import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "node:fs";
import path from "node:path";

export const runtime = "nodejs";

const LeadSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid work email.").max(200),
  organization: z.string().trim().min(1, "Please enter your agency or organization.").max(200),
  role: z.string().trim().max(80).default(""),
  interests: z.array(z.string().max(40)).max(10).default([]),
  notes: z.string().trim().max(2000).default(""),
  website: z.string().max(0).optional(), // honeypot must be empty
});

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

// Simple in-memory rate limit per IP: 5 submissions per 10 minutes.
const hits = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = LeadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    // A filled honeypot is a bot; pretend success so it learns nothing.
    if (fieldErrors.website) return NextResponse.json({ ok: true });
    return NextResponse.json({ message: "Please check the highlighted fields.", fieldErrors }, { status: 400 });
  }

  const lead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    ...parsed.data,
    website: undefined,
    source: req.headers.get("referer") ?? null,
  };

  // Persist locally (append to JSON array). Swap for a database or CRM as needed.
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let existing: unknown[] = [];
    try {
      existing = JSON.parse(await fs.readFile(LEADS_FILE, "utf8"));
      if (!Array.isArray(existing)) existing = [];
    } catch {
      existing = [];
    }
    existing.push(lead);
    await fs.writeFile(LEADS_FILE, JSON.stringify(existing, null, 2));
  } catch (err) {
    console.error("Failed to persist lead", err);
  }

  // Optional forward to a webhook (Slack, Zapier, HubSpot, etc.).
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `New DART demo request from ${lead.name} (${lead.organization})`,
          lead,
        }),
      });
    } catch (err) {
      console.error("Webhook delivery failed", err);
    }
  }

  return NextResponse.json({ ok: true, id: lead.id });
}

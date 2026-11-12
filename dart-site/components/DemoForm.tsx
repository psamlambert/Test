"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "done" | "error";

export default function DemoForm({ preselect = [] }: { preselect?: string[] }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [firstName, setFirstName] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      organization: String(fd.get("organization") ?? "").trim(),
      role: String(fd.get("role") ?? ""),
      interests: fd.getAll("interests").map(String),
      notes: String(fd.get("notes") ?? "").trim(),
      website: String(fd.get("website") ?? ""), // honeypot
    };

    const localErrors: Record<string, string> = {};
    if (!payload.name) localErrors.name = "Please enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(payload.email)) localErrors.email = "Please enter a valid work email.";
    if (!payload.organization) localErrors.organization = "Please enter your agency or organization.";
    setErrors(localErrors);
    if (Object.keys(localErrors).length) {
      const first = Object.keys(localErrors)[0];
      (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrors(data.fieldErrors ?? {});
        setServerMessage(data.message ?? "Something went wrong. Please try again or call us.");
        setStatus("error");
        return;
      }
      setFirstName(payload.name.split(" ")[0]);
      setStatus("done");
    } catch {
      setServerMessage("We could not reach the server. Please try again or call us.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[22px] bg-paper-2 p-8 text-center"
          role="status"
        >
          <h2 className="t-title">Thanks, {firstName}.</h2>
          <p className="t-lede mt-3 text-ink-2">We will be in touch within one business day.</p>
          <p className="t-body mt-6 text-ink-3">Need us sooner? Call {site.phone}.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={onSubmit}
          noValidate
          className="space-y-5"
          exit={{ opacity: 0, y: -8 }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" autoComplete="name" error={errors.name} />
            <Field label="Work email" name="email" type="email" autoComplete="email" error={errors.email} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Agency or organization" name="organization" autoComplete="organization" error={errors.organization} />
            <label className="block">
              <span className="mb-2 block text-[14px] font-medium">Your role</span>
              <select name="role" id="role" className="field" defaultValue="Emergency manager / director">
                {[
                  "Emergency manager / director",
                  "Planning section / IAP",
                  "Mass care / shelter operations",
                  "Public works / debris",
                  "Floodplain / building official",
                  "State or regional coordinator",
                  "Other",
                ].map((r) => <option key={r}>{r}</option>)}
              </select>
            </label>
          </div>

          <fieldset>
            <legend className="mb-2 block text-[14px] font-medium">What are you interested in?</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {[...products.map((p) => ({ id: p.code, label: p.name })), { id: "FUNDING", label: "Grant funding guide" }, { id: "SECURITY", label: "Security overview" }].map((o) => (
                <label key={o.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-rule px-4 py-3 text-[15px] has-[:checked]:border-link has-[:checked]:bg-link/[0.06]">
                  <input type="checkbox" name="interests" id={`interest-${o.id}`} value={o.id} defaultChecked={preselect.includes(o.id)} className="h-4 w-4 accent-link" />
                  {o.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="mb-2 block text-[14px] font-medium">Anything we should know? <span className="font-normal text-ink-3">(optional)</span></span>
            <textarea name="notes" id="notes" rows={4} className="field" placeholder="Upcoming exercise, active incident, procurement timeline, current tools…" />
          </label>

          {/* Honeypot for bots; hidden from people */}
          <div className="hidden" aria-hidden="true">
            <label>Website<input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" /></label>
          </div>

          {status === "error" && <p role="alert" className="text-[15px] text-[#e30000]">{serverMessage}</p>}

          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="btn btn-blue" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Request my demo"}
            </button>
            <p className="t-fine max-w-[36ch]">We respond within one business day. During active incidents, call {site.phone}.</p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type = "text", autoComplete, error }: { label: string; name: string; type?: string; autoComplete?: string; error?: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[14px] font-medium">{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className="field"
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && <span id={`${name}-error`} className="mt-1 block text-[13px] text-[#e30000]">{error}</span>}
    </label>
  );
}

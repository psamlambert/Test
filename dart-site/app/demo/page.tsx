import type { Metadata } from "next";
import DemoForm from "@/components/DemoForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a demo",
  description: "Thirty minutes with your shelters, your forms, and your debris sites.",
};

type Props = { searchParams: Promise<{ product?: string | string[] }> };

export default async function DemoPage({ searchParams }: Props) {
  const sp = await searchParams;
  const pre = ([] as string[]).concat(sp.product ?? []).map((s) => s.toUpperCase());

  return (
    <>
      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 pt-20 pb-16 text-center md:px-6 md:pt-28">
          <Reveal>
            <h1 className="t-hero balance">See it with your data.</h1>
            <p className="t-lede balance mx-auto mt-6 max-w-[44ch] text-ink-2">
              Thirty minutes. We walk through the products you choose using scenarios from your jurisdiction, and leave you with pricing and a funding note.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1024px] gap-14 px-4 pb-24 md:grid-cols-[1fr_1.4fr] md:px-6 md:pb-32">
          <Reveal>
            <div className="space-y-8 text-[15px]">
              <div>
                <h2 className="t-eyebrow text-ink-3">Prefer to talk?</h2>
                <p className="mt-3 text-[20px] font-medium tabular-nums">{site.phone}</p>
                <p className="tabular-nums text-ink-2">{site.phoneAlt}</p>
                <p className="mt-2 break-all text-ink-2">{site.email}</p>
              </div>
              <div>
                <h2 className="t-eyebrow text-ink-3">Want to try first?</h2>
                <p className="mt-3 text-ink-2">The IAP Builder is live in your browser today.</p>
                <a href={site.iapUrl} target="_blank" rel="noopener noreferrer" className="link mt-2">Open dartiap.com</a>
              </div>
              <div id="funding" className="scroll-mt-20 rounded-2xl bg-paper-2 p-5">
                <h2 className="font-semibold">Often grant-eligible</h2>
                <p className="mt-2 text-ink-2">
                  Emergency management software is frequently funded through EMPG, HMGP, and FEMA Public Assistance management costs. Check the funding guide box and we will send budget justification language.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <DemoForm preselect={pre} />
          </Reveal>
        </div>
      </section>
    </>
  );
}

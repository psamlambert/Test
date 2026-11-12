import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DeviceMock from "@/components/DeviceMock";
import ProductTile from "@/components/ProductTile";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function HomePage() {
  const [sms, iap, sdc, dbm] = products;

  return (
    <>
      {/* HERO */}
      <section className="bg-night text-white">
        <div className="mx-auto max-w-[1024px] px-4 pt-20 pb-16 text-center md:px-6 md:pt-28">
          <Reveal>
            <Image src="/brand/dart-mark.png" alt="" width={64} height={52} priority className="mark-on-dark mx-auto mb-8 h-auto w-14 opacity-90" />
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="t-hero balance">Clear information.<br />Confident decisions.</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="t-lede balance mx-auto mt-6 max-w-[40ch] text-white/75">
              Operational software for real-world disaster response and recovery. Built by emergency management professionals, for emergency management professionals.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[19px]">
              <Link href="/demo" className="link">Request a demo</Link>
              <a href={site.iapUrl} target="_blank" rel="noopener noreferrer" className="link">Try the IAP Builder</a>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-[1024px] px-4 pb-20 md:px-6">
          <DeviceMock />
          <p className="t-fine mt-4 text-center text-white/40">Illustrative view. Figures shown are examples.</p>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 py-24 text-center md:px-6 md:py-36">
          <Reveal>
            <h2 className="t-display balance mx-auto max-w-[22ch]">
              Replace the spreadsheets, emails, and ad-hoc tools that introduce lag and risk.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-lede balance mx-auto mt-6 max-w-[46ch] text-ink-2">
              Every DART product gives field teams and EOCs one source of truth. Usable in the field. Defensible in reporting. Scalable across jurisdictions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-paper-2 pb-3">
        <div className="mx-auto grid max-w-[1440px] gap-3 px-3 md:grid-cols-2">
          <ProductTile product={sms} tall />
          <ProductTile product={iap} tall />
          <ProductTile product={sdc} tall />
          <ProductTile product={dbm} tall />
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 py-24 md:px-6 md:py-32">
          <Reveal>
            <h2 className="t-display balance text-center">Built in the field. Not in a boardroom.</h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            {[
              {
                h: "Usable under pressure.",
                p: "Interfaces designed for a volunteer on their first shift and a planning chief on their fourth operational period. Clear on a tablet, in a gym, at midnight.",
              },
              {
                h: "Defensible in reporting.",
                p: "Every record keeps its inputs, timestamps, and author. Data that stands up to audits, after-action reviews, and long-term recovery.",
              },
              {
                h: "Supported by people who know ICS.",
                p: "When you call during an activation, you reach someone who understands operational periods and FEMA Public Assistance, not a ticket queue.",
              },
            ].map((item, i) => (
              <Reveal key={item.h} delay={i * 0.08}>
                <h3 className="t-head balance">{item.h}</h3>
                <p className="t-body mt-3 text-ink-2">{item.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="bg-night text-white">
        <div className="mx-auto max-w-[1024px] px-4 py-24 md:px-6 md:py-32">
          <Reveal>
            <p className="t-eyebrow text-white/50">From activation to reimbursement</p>
            <h2 className="t-display balance mt-3 max-w-[18ch]">One record that follows the incident.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Prepare", "Load shelters, resources, and templates before the season. Train in the tool you will use on the worst day.", "SMS · IAP"],
              ["Respond", "Field teams enter once. The EOC sees it live. The next IAP builds from what is already true.", "SMS · IAP"],
              ["Recover", "Damage assessments and debris operations run on structured data with photos and signatures attached.", "SDC · DBM"],
              ["Reimburse", "Export what FEMA, the state, and your after-action team ask for. No reconstruction from inboxes.", "DBM · SDC · SMS"],
            ].map(([h, p, t], i) => (
              <Reveal key={h} delay={i * 0.06} className="bg-night-2 p-7">
                <div className="t-eyebrow text-white/40">Phase {i + 1}</div>
                <h3 className="t-head mt-2">{h}</h3>
                <p className="t-body mt-3 text-white/65">{p}</p>
                <div className="mt-5 text-[12px] tabular-nums text-white/40">{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION QUOTE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 py-24 text-center md:px-6 md:py-36">
          <Reveal>
            <p className="t-title balance mx-auto max-w-[30ch] font-medium text-ink">
              “Our mission is to reduce the human, operational, and financial impact of disasters by providing cost-effective, usable technology designed for the realities of emergency management.”
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-3">D.A.R.T. mission statement</p>
            <Link href="/about" className="link mt-4 text-[17px]">Meet the team</Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1024px] px-4 py-24 text-center md:px-6 md:py-32">
          <Reveal>
            <h2 className="t-display balance">Ready when it matters most.</h2>
            <p className="t-lede balance mx-auto mt-5 max-w-[40ch] text-ink-2">
              Thirty minutes with your shelters, your forms, and your debris sites. We will leave you with pricing and a funding note.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/demo" className="btn btn-blue">Request a demo</Link>
              <a href={site.iapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">Try the IAP Builder</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

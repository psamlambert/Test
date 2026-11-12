import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getProduct, products } from "@/lib/products";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return { title: p.name, description: p.description };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const others = products.filter((x) => x.slug !== p.slug);

  return (
    <>
      <section className="bg-night text-white">
        <div className="mx-auto max-w-[1024px] px-4 pt-20 pb-24 text-center md:px-6 md:pt-28 md:pb-32">
          <Reveal>
            <p className="t-eyebrow text-white/50">DART {p.code}</p>
            <h1 className="t-hero balance mt-4">{p.tagline}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="t-lede balance mx-auto mt-6 max-w-[48ch] text-white/75">{p.description}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href={`/demo?product=${p.code}`} className="btn btn-blue">Request a demo</Link>
              {p.externalUrl && (
                <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">Try it now</a>
              )}
            </div>
            <p className="mt-6 text-[14px] text-white/45">For {p.audience}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 py-24 md:px-6 md:py-32">
          <div className="grid gap-16 md:gap-24">
            {p.features.map((f, i) => (
              <Reveal key={f.title}>
                <div className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div>
                    <h2 className="t-title balance">{f.title}</h2>
                    <p className="t-lede mt-4 text-ink-2">{f.body}</p>
                  </div>
                  <div aria-hidden="true" className="aspect-[4/3] w-full rounded-[22px] bg-paper-2 p-6">
                    <div className="h-full w-full rounded-[14px] border border-black/5 bg-white p-5">
                      <div className="h-2 w-1/3 rounded bg-black/10" />
                      <div className="mt-5 space-y-3">
                        <div className="h-2 w-5/6 rounded bg-black/[0.07]" />
                        <div className="h-2 w-2/3 rounded bg-black/[0.07]" />
                        <div className="h-2 w-3/4 rounded bg-black/[0.07]" />
                        <div className="h-2 w-1/2 rounded bg-black/[0.07]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-2">
        <div className="mx-auto max-w-[1024px] px-4 py-24 md:px-6">
          <Reveal>
            <h2 className="t-display text-center">At a glance</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <dl className="mx-auto mt-12 max-w-[760px] divide-y divide-rule">
              {p.specs.map((s) => (
                <div key={s.label} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <dt className="text-ink-3">{s.label}</dt>
                  <dd className="t-body text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 py-24 text-center md:px-6">
          <Reveal>
            <h2 className="t-display balance">See {p.short} with your data.</h2>
            <p className="t-lede mx-auto mt-5 max-w-[40ch] text-ink-2">A thirty-minute walkthrough using scenarios from your jurisdiction.</p>
            <div className="mt-8 flex justify-center">
              <Link href={`/demo?product=${p.code}`} className="btn btn-blue">Request a demo</Link>
            </div>
          </Reveal>
          <div className="mt-20 border-t border-rule pt-10">
            <p className="t-eyebrow text-ink-3">Also from DART</p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[17px]">
              {others.map((o) => (
                <li key={o.slug}><Link href={`/products/${o.slug}`} className="link">{o.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

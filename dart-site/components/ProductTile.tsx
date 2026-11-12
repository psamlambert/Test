import Link from "next/link";
import Reveal from "./Reveal";
import type { Product } from "@/lib/products";

export default function ProductTile({ product, tall = false }: { product: Product; tall?: boolean }) {
  const dark = product.theme === "dark";
  return (
    <Reveal className="h-full">
      <article
        className={`flex h-full flex-col items-center overflow-hidden rounded-[28px] px-6 pt-12 text-center ${tall ? "pb-0" : "pb-12"} ${dark ? "bg-night text-white" : "bg-paper-2 text-ink"}`}
      >
        <p className={`t-eyebrow mb-2 ${dark ? "text-white/60" : "text-ink-3"}`}>DART {product.code}</p>
        <h3 className="t-title balance">{product.name}</h3>
        <p className={`t-lede balance mt-3 max-w-[32ch] ${dark ? "text-white/80" : "text-ink-2"}`}>{product.tagline}</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[17px]">
          <Link href={`/products/${product.slug}`} className="link">Learn more</Link>
          {product.externalUrl ? (
            <a href={product.externalUrl} target="_blank" rel="noopener noreferrer" className="link">Try it</a>
          ) : (
            <Link href={`/demo?product=${product.code}`} className="link">Request a demo</Link>
          )}
        </div>

        {/* Abstract product glyph: large logo-derived form, rendered in CSS */}
        <div className="relative mt-10 w-full flex-1" aria-hidden="true">
          <div className={`mx-auto h-40 w-[78%] rounded-t-[22px] border-x border-t ${dark ? "border-white/15 bg-gradient-to-b from-white/[0.08] to-transparent" : "border-black/10 bg-gradient-to-b from-black/[0.05] to-transparent"}`}>
            <div className="flex items-center gap-1.5 px-4 pt-3">
              <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/30" : "bg-black/20"}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/30" : "bg-black/20"}`} />
              <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-white/30" : "bg-black/20"}`} />
            </div>
            <div className="mt-5 space-y-2.5 px-5">
              <div className={`h-2 w-1/2 rounded ${dark ? "bg-white/30" : "bg-black/15"}`} />
              <div className={`h-2 w-4/5 rounded ${dark ? "bg-white/15" : "bg-black/10"}`} />
              <div className={`h-2 w-2/3 rounded ${dark ? "bg-white/15" : "bg-black/10"}`} />
              <div className={`h-2 w-3/4 rounded ${dark ? "bg-white/15" : "bg-black/10"}`} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

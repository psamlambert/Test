"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-glass text-white/85">
      <nav className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-4 text-[12px] md:px-6" aria-label="Primary">
        <Logo onDark size={20} />

        <ul className="hidden items-center gap-8 md:flex">
          {products.map((p) => (
            <li key={p.slug}>
              <Link href={`/products/${p.slug}`} className="hover:text-white transition-colors">
                {p.short}
              </Link>
            </li>
          ))}
          <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><a href={site.iapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Try IAP</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/demo" className="btn btn-blue btn-sm hidden md:inline-flex">Request a demo</Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative h-8 w-8 md:hidden"
          >
            <span className={`absolute left-2 right-2 h-[1.5px] bg-white transition-all ${open ? "top-1/2 rotate-45" : "top-[11px]"}`} />
            <span className={`absolute left-2 right-2 h-[1.5px] bg-white transition-all ${open ? "top-1/2 -rotate-45" : "top-[19px]"}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col px-6 py-4 text-[17px]">
              {products.map((p) => (
                <li key={p.slug} className="border-b border-white/10">
                  <Link href={`/products/${p.slug}`} onClick={() => setOpen(false)} className="block py-3">{p.name}</Link>
                </li>
              ))}
              <li className="border-b border-white/10"><Link href="/about" onClick={() => setOpen(false)} className="block py-3">About</Link></li>
              <li className="border-b border-white/10"><a href={site.iapUrl} target="_blank" rel="noopener noreferrer" className="block py-3">Try the IAP Builder</a></li>
              <li className="pt-4"><Link href="/demo" onClick={() => setOpen(false)} className="btn btn-blue w-full">Request a demo</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

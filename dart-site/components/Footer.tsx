import Link from "next/link";
import Logo from "./Logo";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-paper-2 text-ink-2">
      <div className="mx-auto max-w-[1024px] px-4 py-10 md:px-6">
        <div className="grid grid-cols-2 gap-8 text-[12px] md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-semibold text-ink">Products</h3>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.slug}><Link href={`/products/${p.slug}`} className="hover:underline">{p.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-ink">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">About D.A.R.T.</Link></li>
              <li><Link href="/about#leadership" className="hover:underline">Leadership</Link></li>
              <li><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-ink">Get started</h3>
            <ul className="space-y-2">
              <li><Link href="/demo" className="hover:underline">Request a demo</Link></li>
              <li><a href={site.iapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">Try the IAP Builder</a></li>
              <li><Link href="/demo#funding" className="hover:underline">Grant funding guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-ink">Contact</h3>
            <ul className="space-y-2">
              <li>{site.phone}</li>
              <li>{site.phoneAlt}</li>
              <li className="break-all">{site.email}</li>
              <li>Colorado, USA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-rule pt-5 text-[12px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Logo size={16} withWordmark={false} />
            <span>Copyright © {new Date().getFullYear()} {site.fullName}. All rights reserved.</span>
          </div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/security" className="hover:underline">Security</Link>
            <Link href="/accessibility" className="hover:underline">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

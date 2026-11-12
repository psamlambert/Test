import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Accessibility" };

export default function AccessibilityPage() {
  return (
    <>
      <h1 className="t-display">Accessibility</h1>
      <div className="t-body mt-10 space-y-6 text-ink-2">
        <p>DART is committed to making this website and our products usable by everyone, including people who rely on assistive technology. This site is built to follow WCAG 2.1 AA: semantic structure, keyboard navigation, visible focus states, sufficient color contrast, and respect for reduced-motion preferences.</p>
        <p>If you encounter a barrier on this site or in a DART product, tell us. Email {site.email} or call {site.phone} and we will work with you to provide the information or function you need.</p>
      </div>
    </>
  );
}

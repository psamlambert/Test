import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Security" };

export default function SecurityPage() {
  return (
    <>
      <h1 className="t-display">Security</h1>
      <p className="t-fine mt-3">Summary. Engineering to confirm specifics before publication.</p>
      <div className="t-body mt-10 space-y-6 text-ink-2">
        <p>DART products handle sensitive information, including records about people in shelters. Security is led by our Chief Information Security Officer and built around confidentiality, integrity, and availability.</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Role-based access so staff see only what their role requires.</li>
          <li>An audit trail recording who viewed and changed each record.</li>
          <li>Encryption of data in transit and at rest.</li>
          <li>Customer data ownership, with export available at any time.</li>
        </ul>
        <p>IT and procurement teams can request the full security overview, including hosting, backup, and incident response details.</p>
        <Link href="/demo?product=SECURITY" className="link">Request the security overview</Link>
      </div>
    </>
  );
}

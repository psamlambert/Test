import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <>
      <h1 className="t-display">Privacy</h1>
      <p className="t-fine mt-3">Draft for legal review. Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.</p>
      <div className="t-body mt-10 space-y-6 text-ink-2">
        <p>This website collects only the information you choose to give us through the demo request form: your name, work email, organization, role, areas of interest, and any notes you add. We use it to respond to your request and to follow up about DART products.</p>
        <p>We do not sell personal information. We do not use advertising trackers on this site.</p>
        <p>Data entered into DART products by customer agencies, including shelter client records, is governed by the customer agreement, not by this website policy. Request our security overview for details on how product data is protected.</p>
        <p>To ask what we hold about you or to have it removed, contact us at {site.email} or {site.phone}.</p>
      </div>
    </>
  );
}

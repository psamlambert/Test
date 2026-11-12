import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "D.A.R.T. was created from direct experience in disaster environments. Meet the team.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-night text-white">
        <div className="mx-auto max-w-[1024px] px-4 pt-20 pb-24 text-center md:px-6 md:pt-28 md:pb-32">
          <Reveal>
            <p className="t-eyebrow text-white/50">About D.A.R.T.</p>
            <h1 className="t-hero balance mt-4">Emergency management professionals building technology for emergency management professionals.</h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[760px] px-4 py-24 md:px-6 md:py-32">
          <Reveal>
            <h2 className="t-title">Our mission</h2>
            <p className="t-lede mt-5 text-ink-2">
              To reduce the human, operational, and financial impact of disasters by providing cost-effective, usable technology designed for the realities of emergency management.
            </p>
            <p className="t-lede mt-5 text-ink-2">
              We believe emergency professionals deserve tools that work as hard as they do: under pressure, in chaotic environments, and with limited resources.
            </p>
          </Reveal>

          <Reveal className="mt-20">
            <h2 className="t-title">Our story</h2>
            <p className="t-body mt-5 text-ink-2">
              DART was created from direct experience in disaster environments. The platform was originally developed while supporting long-term disaster operations, where division leaders and EOCs needed accurate, real-time data but had no practical way to collect, analyze, or report it consistently.
            </p>
            <p className="t-body mt-4 text-ink-2">
              What began as a simple solution to track survivors, shelters, and assets evolved into a broader platform supporting shelter management, situational reporting, volunteer coordination, and debris operations.
            </p>
            <p className="t-body mt-4 text-ink-2">
              Every DART product is shaped by lessons learned in the field. Not theory, not buzzwords, and not technology for technology&rsquo;s sake.
            </p>
          </Reveal>

          <Reveal className="mt-20">
            <h2 className="t-title">The problem we solve</h2>
            <p className="t-body mt-5 text-ink-2">
              Disaster recovery is often slowed by disparate technology systems that prevent real-time communication and information sharing among field services. DART offers modular platforms that provide a unified, high-level space for participating organizations.
            </p>
            <p className="t-body mt-4 text-ink-2">
              Our systems connect groups like housing, case management, volunteer services, debris, and substantial damage assessments, ensuring information is conveyed rapidly, effectively, and conveniently. By improving collaboration and data sharing, we accelerate the speed of recovery and enable better, faster decisions.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="leadership" className="bg-paper-2 scroll-mt-16">
        <div className="mx-auto max-w-[1024px] px-4 py-24 md:px-6 md:py-32">
          <Reveal>
            <h2 className="t-display text-center">Leadership</h2>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-[860px] gap-12 md:grid-cols-2">
            <Reveal>
              <Image src="/team/mark.jpg" alt="Mark Lambert" width={223} height={223} className="h-28 w-28 rounded-full object-cover" />
              <h3 className="t-head mt-6">Mark Lambert</h3>
              <p className="text-ink-3">Chief Executive Officer and Chief Operating Officer</p>
              <p className="t-body mt-4 text-ink-2">
                Mark&rsquo;s background is in project management, logistics, and complex operations. He is also an educator and public speaker focused on process design and operational control. A U.S. Army veteran, he brings field discipline to how DART is built and supported.
              </p>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="link mt-4 text-[15px]">LinkedIn</a>
            </Reveal>
            <Reveal delay={0.08}>
              <Image src="/team/steven.jpg" alt="Steven Aljets" width={283} height={219} className="h-28 w-28 rounded-full object-cover" />
              <h3 className="t-head mt-6">Steven Aljets</h3>
              <p className="text-ink-3">Chief Technology Officer and Chief Information Security Officer</p>
              <p className="t-body mt-4 text-ink-2">
                Steven directs product infrastructure and oversees security with attention to confidentiality, integrity, and availability. His experience includes cybersecurity for critical infrastructure and engineering roles at SaaS and IT consulting firms.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1024px] px-4 py-24 text-center md:px-6">
          <Reveal>
            <h2 className="t-display balance">Let&rsquo;s talk about your next activation.</h2>
            <div className="mt-8 flex justify-center">
              <Link href="/demo" className="btn btn-blue">Request a demo</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

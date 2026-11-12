"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Illustrative operations view rendered in CSS. Stands in for product
 * photography until real screenshots are available. All figures are examples.
 */
export default function DeviceMock() {
  const reduce = useReducedMotion();
  const rows = [
    { name: "Mesa County Fairgrounds", n: "212 / 250", pct: 85 },
    { name: "Lincoln HS Gymnasium", n: "96 / 180", pct: 53 },
    { name: "Faith Community Center", n: "58 / 60", pct: 97 },
    { name: "Mobile Unit 4", n: "0 / 40", pct: 0 },
  ];
  const forms = [
    ["ICS-202", "Objectives", "Approved"],
    ["ICS-204", "Assignments × 6", "Approved"],
    ["ICS-205", "Communications", "In review"],
    ["ICS-209", "Situation report", "Due 1800"],
  ];

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className="device mx-auto w-full max-w-[920px]"
      aria-label="Illustrative DART operations dashboard"
      role="img"
    >
      <div className="device-screen text-[11px] text-white/80 md:text-[12px]">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
          </div>
          <span className="tabular-nums text-white/50">Operational Period 3 · 0700–1900</span>
          <span className="flex items-center gap-1.5 text-white/70"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />Live</span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-[1.4fr_1fr]">
          <div className="bg-[#111214] p-4">
            <div className="mb-3 text-[10px] uppercase tracking-wider text-white/40">Shelter occupancy</div>
            <ul className="space-y-3">
              {rows.map((r) => (
                <li key={r.name}>
                  <div className="mb-1 flex justify-between"><span className="text-white/85">{r.name}</span><span className="tabular-nums text-white/50">{r.n}</span></div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-white/70"
                      initial={reduce ? { width: `${r.pct}%` } : { width: 0 }}
                      animate={{ width: `${r.pct}%` }}
                      transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-px bg-white/10">
            <div className="bg-[#111214] p-4">
              <div className="mb-3 text-[10px] uppercase tracking-wider text-white/40">Today</div>
              <div className="grid grid-cols-2 gap-3">
                {[["366", "Clients sheltered"], ["1,184", "Debris loads"], ["47", "SDE inspections"], ["12", "Unmet needs"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="text-2xl font-semibold tabular-nums text-white">{n}</div>
                    <div className="text-white/45">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#111214] p-4">
              <div className="mb-3 text-[10px] uppercase tracking-wider text-white/40">Incident Action Plan</div>
              <ul className="space-y-2 tabular-nums">
                {forms.map(([code, name, status]) => (
                  <li key={code} className="flex items-center justify-between gap-2">
                    <span><span className="text-white/45">{code}</span> <span className="text-white/85">{name}</span></span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] ${status === "Approved" ? "bg-white/10 text-white/70" : "bg-white/20 text-white"}`}>{status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

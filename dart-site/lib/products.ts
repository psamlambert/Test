export type Product = {
  slug: string;
  code: string;
  name: string;
  short: string;
  tagline: string;
  description: string;
  audience: string;
  features: { title: string; body: string }[];
  specs: { label: string; value: string }[];
  theme: "light" | "dark";
  externalUrl?: string;
};

export const products: Product[] = [
  {
    slug: "shelter-management",
    code: "SMS",
    name: "Shelter Management System",
    short: "Shelter",
    tagline: "Every person. Every cot. One record.",
    description:
      "A comprehensive shelter and client management platform designed for disaster response, mass care operations, and long-term sheltering.",
    audience: "Shelter managers, mass care leads, and EOC human services branches.",
    theme: "dark",
    features: [
      { title: "Register once, track everywhere.", body: "Client intake follows the person across shelters, transfers, and reunification. No duplicate records, no lost histories." },
      { title: "Occupancy the EOC can trust.", body: "Capacity, census, and unmet needs roll up live from every site, so the 1800 briefing uses numbers from 1759." },
      { title: "Built for the long haul.", body: "Mass care rarely ends at 72 hours. SMS supports weeks and months of sheltering with the same clarity as day one." },
    ],
    specs: [
      { label: "Client intake", value: "Individual and household, with needs tracking" },
      { label: "Sites", value: "Unlimited shelters, mobile units, and partner sites" },
      { label: "Reporting", value: "Live census, daily rollups, after-action exports" },
      { label: "Access", value: "Role-based; audit trail on every record" },
    ],
  },
  {
    slug: "iap-builder",
    code: "IAP",
    name: "Incident Action Plan Builder",
    short: "IAP Builder",
    tagline: "Your ICS forms, finally connected.",
    description:
      "A digital Incident Action Plan creation and management tool designed to streamline operational planning during incidents. Change a resource once and every linked form follows.",
    audience: "Planning section chiefs, incident commanders, and anyone who has built an IAP at 2 a.m.",
    theme: "light",
    externalUrl: "https://dartiap.com",
    features: [
      { title: "Interconnected documents.", body: "Update an assignment on the ICS-204 and the 203 and 205 stay in sync. The plan is one object, not a folder of PDFs." },
      { title: "Carry the period forward.", body: "Start the next operational period from what is already true instead of from a blank template." },
      { title: "Try it today.", body: "The IAP Builder is live in your browser. No procurement cycle required to see how it works." },
    ],
    specs: [
      { label: "Forms", value: "ICS-202, 203, 204, 205, 206, 208, 209 and more" },
      { label: "Periods", value: "Unlimited operational periods with carry-forward" },
      { label: "Output", value: "Print-ready IAP packet, PDF export" },
      { label: "Access", value: "Browser-based; works on tablets in the field" },
    ],
  },
  {
    slug: "substantial-damage",
    code: "SDC",
    name: "Substantial Damage Calculator",
    short: "Damage Calculator",
    tagline: "Assessments that hold up.",
    description:
      "The DART SDC tool supports Substantial Damage Assessments and Estimates (SDA/SDE) with a structured, auditable workflow for collecting, validating, and reporting data following disasters.",
    audience: "Floodplain managers, building officials, and damage assessment teams.",
    theme: "light",
    features: [
      { title: "Structured from the field in.", body: "Inspectors capture the right fields, photos, and measurements the first time. Validation happens on entry, not in a spreadsheet three weeks later." },
      { title: "Defensible determinations.", body: "Every estimate carries its inputs, method, and timestamp, so the 50 percent determination stands when a property owner challenges it." },
      { title: "Reporting for NFIP compliance.", body: "Produce the summaries your community needs to demonstrate substantial damage enforcement." },
    ],
    specs: [
      { label: "Workflow", value: "Inspection, estimate, determination, letter" },
      { label: "Method", value: "Supports FEMA SDE methodology" },
      { label: "Evidence", value: "Photos, measurements, inspector attribution" },
      { label: "Output", value: "Determination letters and compliance reports" },
    ],
  },
  {
    slug: "debris-management",
    code: "DBM",
    name: "Debris Management",
    short: "Debris",
    tagline: "Every load, documented for reimbursement.",
    description:
      "A FEMA Public Assistance Category A-ready debris management system for statewide oversight and local execution and coordination of debris removal operations.",
    audience: "State debris coordinators, local public works, and debris monitors.",
    theme: "dark",
    features: [
      { title: "State oversight, local execution.", body: "One system serves the state EOC and every county working the mission, with each seeing exactly what they need." },
      { title: "The complete ticket.", body: "Load tickets, truck certifications, site logs, and photos live in one record, captured at the roadside." },
      { title: "Shaped for FEMA PA.", body: "Exports are built around what Public Assistance Category A reviewers ask for, so reimbursement is a report, not a reconstruction." },
    ],
    specs: [
      { label: "Tickets", value: "Load, tower, and disposal with photo capture" },
      { label: "Fleet", value: "Truck certification and capacity tracking" },
      { label: "Sites", value: "TDSR and final disposal site management" },
      { label: "Output", value: "FEMA PA Category A export packages" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

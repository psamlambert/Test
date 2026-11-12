# D.A.R.T. marketing site

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion.
Lead capture runs on a Node API route with validation, a honeypot, and rate limiting.

## Run it

```bash
cd dart-site
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  page.tsx                  Home
  about/page.tsx            Mission, story, leadership
  demo/page.tsx             Demo request (supports ?product=SMS,IAP,SDC,DBM)
  products/[slug]/page.tsx  One page per product, generated from lib/products.ts
  api/demo/route.ts         POST endpoint for demo requests
components/                 Nav, Footer, Logo, Reveal (scroll animation), DeviceMock, ProductTile, DemoForm
lib/products.ts             All product copy and specs. Edit here, every page updates.
lib/site.ts                 Contact details and external links
public/brand/               Real DART logo mark (from dartiap.com)
public/team/                Leadership photos (from the current site)
data/leads.json             Created on first submission. Git-ignored.
```

## Environment variables

Create `.env.local` (git-ignored):

```
# Optional. Every demo request is also POSTed as JSON here
# (Slack incoming webhook, Zapier, Make, HubSpot form endpoint, etc.)
LEAD_WEBHOOK_URL=

NEXT_PUBLIC_PHONE=(719) 761-0739
NEXT_PUBLIC_PHONE_ALT=(719) 238-4630
NEXT_PUBLIC_EMAIL=info@darttechsolutions.org
```

## Before launch

- Confirm the public email address. The current site hides it; `info@` is a guess.
- Replace the CSS device mock on the home page with real product screenshots.
- Add customer quotes and agency logos only with written permission.
- Have engineering confirm the "At a glance" specs on each product page.
- Grant eligibility wording (EMPG, HMGP, PA management costs): confirm with a grants specialist.
- Wire `LEAD_WEBHOOK_URL` so demo requests reach a real inbox or CRM.
- Add `/privacy`, `/security`, `/accessibility` pages (footer links exist).

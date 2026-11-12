import type { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Operational software for disaster response and recovery`,
    template: `%s | ${site.name}`,
  },
  description:
    "D.A.R.T. builds shelter management, incident action planning, substantial damage, and debris management software for emergency management agencies. Clear information. Confident decisions.",
  openGraph: {
    title: site.fullName,
    description: "Operational software for real-world disaster response and recovery.",
    type: "website",
  },
  icons: { icon: "/brand/dart-mark.png" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title:
    "Uniintel | Prior-auth & referral capacity for specialty clinics",
  description:
    "Uniintel helps specialty and multi-site ambulatory clinics cut prior-auth packet prep, referral chase, and inbox triage — inside the EHR, portals, fax, and email they already run, with human checkpoints. No credentialing. Book a 45-minute workflow discovery.",
  keywords: [
    "specialty clinic prior authorization",
    "referral chase automation",
    "ambulatory clinic RCM",
    "prior auth packet prep",
    "clinic inbox triage",
    "practice admin workflow",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${plexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

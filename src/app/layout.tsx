import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { Atmosphere } from "@/components/atmosphere";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const description =
  "Knowledge workers spend about a fifth of the day looking for information, much of it something they already saw. Why bookmarks fail at retrieval, and why Nook exists.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getnook.tech"),
  title: {
    default: "Why Nook exists",
    template: "%s",
  },
  description,
  openGraph: {
    title: "Why Nook exists",
    description:
      "For people who consume more than they remember. Capture anything. Ask later. Get answers with sources.",
    type: "website",
    url: "/",
    siteName: "Nook",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Nook exists",
    description: "For people who consume more than they remember.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable}`}
    >
      <body className="antialiased">
        <span
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: One public page argues why Nook exists as a traditional landing — hero, specimen of the loop, cited argument, coming-soon close — not a teaser screen plus a separate essay, and not a waitlist or feature grid.
OWN-WORLD: Warm paper field, Instrument serif display, Geist body, moss as quiet status, hairline rules, alcove icon, atmosphere wash with grain. No client runtime on the landing.
STORY: You already save too much and cannot re-find it. Nook this, ask later, answers come back with sources. Claims stay cited; no Nook ROI. Product is coming soon.
FIRST VIEWPORT: Wordmark left, Coming soon right. Full-width serif headline, one-sentence lead, then a static ask specimen with a cited source. Reading continues down; there is no conversion control.
FORM: Traditional long-form landing inside the incumbent Nook paper world. User-pinned: keep-world, code-first, why-as-home. No direction seed.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        <Atmosphere />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

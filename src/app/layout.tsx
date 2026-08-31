import type { Metadata } from "next";
import "./globals.css";

const description =
  "You already save too much and cannot find it again. Capture once, ask later, get answers with sources.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getnook.tech"),
  title: {
    default: "Coming soon",
    template: "%s",
  },
  description,
  openGraph: {
    title: "For people who consume more than they remember.",
    description:
      "Capture anything. Ask later. Get answers with sources. Coming soon.",
    type: "website",
    url: "/",
    siteName: "getnook.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "For people who consume more than they remember.",
    description: "Capture anything. Ask later. Get answers with sources.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">
        <span
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: One public page in a black studio one-pager — icon mark, Helvetica column, one photograph, cited essay, coming-soon close — not a waitlist, not a feature grid, not paper-and-serif.
OWN-WORLD: True black, white Helvetica Neue, icon-only mark, rounded photographic plate, --- rules, block cursor. No grain, no atmosphere, no wordmark.
STORY: You already save too much and cannot re-find it. Capture, ask later, answers come back with sources. Claims stay cited; no ROI. Product is coming soon.
FIRST VIEWPORT: Icon top-left of a ~38rem column. Large Helvetica headline. Small loop line. Grassland figure photograph with rounded corners at column width. Essay follows on scroll.
FORM: User-pinned reconstruction of the attached tinycomputer.co one-pager. Helvetica. Icon instead of studio name. Essay body kept. Code-led. No direction seed.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}

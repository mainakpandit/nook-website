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
  "A second brain for people who consume more than they remember. About a fifth of the day goes to hunting information you already saw. Capture anything. Ask later. Get answers with sources.";

export const metadata: Metadata = {
  metadataBase: new URL("https://getnook.tech"),
  title: {
    default: "Nook — coming soon",
    template: "%s",
  },
  description,
  openGraph: {
    title: "Nook — coming soon",
    description: "For people who consume more than they remember.",
    type: "website",
    url: "/",
    siteName: "Nook",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nook — coming soon",
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
        <Atmosphere />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

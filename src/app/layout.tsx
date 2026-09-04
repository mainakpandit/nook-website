import type { Metadata, Viewport } from "next";
import {
  ogCard,
  ogImage,
  pageDescription,
  pageTitle,
  shareDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s · ${siteName}`,
  },
  description: pageDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  keywords: [
    "Nook",
    "personal knowledge",
    "re-finding",
    "bookmarks",
    "second brain",
    "knowledge workers",
    "save for later",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: pageTitle,
    description: shareDescription,
    images: [
      {
        url: ogCard.url,
        width: ogCard.width,
        height: ogCard.height,
        alt: ogCard.alt,
        type: ogCard.type,
      },
      {
        url: ogImage.url,
        width: ogImage.width,
        height: ogImage.height,
        alt: ogImage.alt,
        type: ogImage.type,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: shareDescription,
    images: [
      {
        url: ogCard.url,
        width: ogCard.width,
        height: ogCard.height,
        alt: ogCard.alt,
      },
    ],
  },
  appleWebApp: {
    title: siteName,
    capable: true,
    statusBarStyle: "black",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: pageDescription,
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: { "@id": `${siteUrl}/#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}${ogImage.url}`,
        width: ogImage.width,
        height: ogImage.height,
      },
      inLanguage: "en",
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

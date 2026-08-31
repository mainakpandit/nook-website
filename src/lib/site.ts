export const siteUrl = "https://getnook.tech";
export const siteName = "Nook";

export const pageTitle = "Nook — You already have it. Somewhere.";

export const pageDescription =
  "You already saved it. You just cannot put your hands on it. A paper, a thread, a sentence in a lecture — then the little comedy of looking.";

/** Short line for WhatsApp and other clients that truncate descriptions. */
export const shareDescription =
  "You already saved it. You just cannot put your hands on it.";

export const ogImageAlt =
  "A person standing in tall grass, seen from behind, looking toward a quiet horizon.";

/** Full photograph used on the page and as the canonical share image. */
export const ogImage = {
  url: "/images/hero-grassland.png",
  width: 1536,
  height: 1024,
  alt: ogImageAlt,
  type: "image/png",
} as const;

/**
 * 1200×630 JPEG cropped from the same photograph. Twitter, WhatsApp, and
 * iMessage fetch this more reliably than a 2MB 3:2 PNG.
 */
export const ogCard = {
  url: "/images/og-hero.jpg",
  width: 1200,
  height: 630,
  alt: ogImageAlt,
  type: "image/jpeg",
} as const;

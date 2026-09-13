"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px" },
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 border-b transition-colors duration-200 ease-out-strong ${
        solid ? "border-border bg-card" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 w-full max-w-[42rem] items-center px-6">
        <Link
          href="/"
          aria-label="Home"
          className={`inline-flex min-h-11 min-w-11 items-center ${
            solid ? "" : "focus-visible:outline-brand-foreground"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/nook-icon.svg" alt="" width={28} height={28} />
        </Link>
      </div>
    </header>
  );
}

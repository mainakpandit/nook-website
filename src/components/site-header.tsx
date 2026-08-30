import Link from "next/link";

export function SiteHeader({
  active,
}: {
  active?: "home" | "why";
}) {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 pt-7 md:px-10 md:pt-9">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-[15px] tracking-tight text-ink"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/nook-icon-light.svg"
          alt=""
          width={28}
          height={28}
          className="rounded-[7px] shadow-[0_1px_2px_rgba(55,53,47,0.08)]"
        />
        <span className="font-medium">Nook</span>
      </Link>
      <Link
        href="/why"
        className={`text-[13px] tracking-wide text-muted transition-colors hover:text-ink ${
          active === "why" ? "text-ink" : ""
        }`}
      >
        Why this exists
      </Link>
    </header>
  );
}

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="relative z-10 flex items-center justify-between px-6 pt-7 md:px-10 md:pt-9">
      <Link
        href="/"
        className="flex min-h-11 items-center gap-2.5 text-[15px] tracking-tight text-ink"
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
    </header>
  );
}

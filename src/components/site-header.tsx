import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="pt-8">
      <Link
        href="/"
        aria-label="Home"
        className="inline-flex min-h-11 min-w-11 items-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/nook-icon-light.svg"
          alt=""
          width={28}
          height={28}
          className="rounded-[5px]"
        />
      </Link>
    </header>
  );
}

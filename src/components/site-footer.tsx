export function SiteFooter() {
  return (
    <footer className="pt-4 pb-2">
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[13px] leading-6 text-paper">
        <a
          href="https://getnook.tech"
          className="underline decoration-paper underline-offset-4 transition-opacity duration-150 ease-out-strong hover:opacity-70"
        >
          getnook.tech
        </a>
        <a
          href="mailto:mainak@getnook.tech"
          className="underline decoration-paper underline-offset-4 transition-opacity duration-150 ease-out-strong hover:opacity-70"
        >
          mainak@getnook.tech
        </a>
      </div>
    </footer>
  );
}

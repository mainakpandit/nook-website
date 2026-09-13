export function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-border pt-4 pb-2">
      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[13px] leading-6 text-muted-foreground">
        <a
          href="https://getnook.tech"
          className="underline decoration-primary underline-offset-4 transition-colors duration-150 ease-out-strong hover:text-primary-hover"
        >
          getnook.tech
        </a>
        <a
          href="mailto:mainak@getnook.tech"
          className="underline decoration-primary underline-offset-4 transition-colors duration-150 ease-out-strong hover:text-primary-hover"
        >
          mainak@getnook.tech
        </a>
      </div>
    </footer>
  );
}

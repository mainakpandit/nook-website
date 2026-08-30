import { ComingSoonHero } from "@/components/coming-soon-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader active="home" />
      <main className="flex flex-1 flex-col justify-center py-16 md:py-20">
        <ComingSoonHero />
      </main>
      <SiteFooter />
    </div>
  );
}

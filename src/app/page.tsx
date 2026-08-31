import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Coming soon",
  description: "You already saved it. You just cannot put your hands on it.",
};

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-paper underline-offset-4 transition-opacity hover:opacity-70"
    >
      {children}
    </a>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-5 text-[15px] font-medium leading-snug tracking-[-0.015em] text-paper">
        {title}
      </h2>
      <div className="space-y-5 text-[13px] leading-[1.7] text-paper">
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-full max-w-[42rem] px-6 pb-20">
        <SiteHeader />

        <main>
          <h1 className="mt-[5.5rem] text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.03em] text-paper sm:mt-28 sm:text-[2.75rem]">
            You already have it. Somewhere.
          </h1>
          <p className="mt-5 text-[13px] leading-6 text-paper-soft">
            A paper. A thread. A sentence in a lecture. Then the little comedy
            of looking.
          </p>

          <figure className="mt-[4.5rem] sm:mt-20">
            <Image
              src="/images/hero-grassland.png"
              alt="A person standing in tall grass, seen from behind, looking toward a quiet horizon."
              width={1536}
              height={1024}
              priority
              className="h-auto w-full rounded-[12px]"
            />
          </figure>

          <div className="space-y-14 mt-14">
            <Section title="The folder called later">
              <p>
                Bookmarks. A notes app. A folder named &quot;later,&quot; which
                is where files go to wait for a more organized version of you.
                That person does not arrive. The folder keeps growing.
              </p>
              <p>
                The hunt never starts with a filename. It starts with a feeling.
                A claim. A chart. A sentence that felt expensive at the time.
                You do not remember the tab. You check five places, use Cmd+F
                like a superstition, and still do not have it.
              </p>
              <p>
                The tools you already use make you file the thing before you are
                allowed to want it back. You do not file it. You are on a bus.
                You are in a lecture. You are saving because it felt like it
                would matter, not because you had a taxonomy ready. Most of what
                you save never gets filed. It just sits there, loyal and lost.
              </p>
            </Section>

            <Section title="A fifth of the day">
              <p>
                Knowledge workers spend about a fifth of the day searching and
                gathering information: roughly 1.8 hours a day, 9.3 hours a week
                (
                <Cite href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy">
                  2012
                </Cite>
                ). A workplace figure, not a stopwatch on your bookmarks, and a
                lot of that looking is going back for something you already had.
                <br />
                <br />
                The quote. The paper. The thread you can still hear. Remembering
                a passage and not a URL makes you slower; you miss it, open the
                wrong year, or recreate a slide because hunting was worse than
                making it again. One office study finds about 2.8 hours a week
                looking for or requesting information, and about 2.0 hours
                recreating work that already exists (
                <Cite href="https://www.apqc.org/blog/km-makes-knowledge-workers-more-productive-and-less-stressed-out">
                  study
                </Cite>
                ). Same joke: time looking, then time making it twice.
              </p>
            </Section>

            <Section title="The leftover hunt">
              <p>
                An unfinished hunt does not clock out when you close the tab.
                Part of your attention stays with the last search, so the work
                you sat down to do runs worse. &quot;Where did I see that?&quot;
                is usually several places. Each switch leaves a residue. The
                hunt does not have to last twenty minutes to cost you.
              </p>
              <p>
                An unanswered search stays open in working memory. Twelve tabs
                is not a strategy. It is an unclosed task, humming.
              </p>
              <p>
                Parking &quot;I might need this later&quot; outside your head
                can free the room. Only if you trust you can get it back. A
                graveyard of bookmarks does not count. You already know how that
                story ends.
              </p>
              <p>
                What if keeping it was one action, the way you already try to
                keep it, and finding it did not require the filing you never do.
                Weeks later you ask in the leftover words. The blue line. The
                lecture. That argument about the chart. What comes back is from
                what you actually kept. The source comes with it.
              </p>
            </Section>

            <Section title="Sources">
              <ul className="space-y-4 text-[13px] leading-6 text-paper-soft">
                <li>
                  McKinsey Global Institute.{" "}
                  <em>
                    The Social Economy: Unlocking value and productivity through
                    social technologies
                  </em>
                  . 2012. Knowledge workers spend ~1.8 hours/day (~19–20% of
                  time) searching and gathering information.{" "}
                  <Cite href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy">
                    Report
                  </Cite>
                </li>
                <li>
                  APQC. Knowledge-worker time: ~2.8 hours/week looking for or
                  requesting information; ~2.0 hours/week recreating work that
                  already exists. Organizational / KM context, not a
                  personal-library study.{" "}
                  <Cite href="https://www.apqc.org/blog/km-makes-knowledge-workers-more-productive-and-less-stressed-out">
                    APQC
                  </Cite>
                </li>
                <li>
                  Leroy, Sophie. &quot;Why Is It So Hard to Do My Work? The
                  Challenge of Attention Residue When Switching Between Work
                  Tasks.&quot;{" "}
                  <em>Organizational Behavior and Human Decision Processes</em>,
                  2009. Attention residue: part of attention remains with a
                  prior unfinished task after a switch.
                </li>
                <li>
                  Capra, Robert; Teevan, Jaime; and related
                  personal-information-management research. Re-finding as a
                  distinct problem. Remembering a passage rather than a URL is
                  slower and more error-prone than opening a known item. A
                  research tradition, not a single statistic.
                </li>
              </ul>
            </Section>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}

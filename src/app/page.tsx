import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Coming soon",
  description:
    "You already save too much and cannot find it again. Capture once, ask later, get answers with sources.",
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
            For people who consume more than they remember.
          </h1>
          <p className="mt-5 text-[13px] leading-6 text-paper-soft">
            Capture anywhere. Ask later. Answers come back with sources.
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

          <div className="mt-16 space-y-5 text-[13px] leading-[1.7] text-paper sm:mt-[4.5rem]">
            <p>
              You saw it. A paper, a thread, a sentence in a lecture. You meant
              to keep it. Weeks later you cannot put your hands on it.
            </p>
            <p>
              One save. Later you ask in your own words. The answer comes from
              what you actually kept, and it shows you the source.
            </p>
          </div>

          <div className="space-y-14">
            <Section title="You already saved it">
              <p>
                Bookmarks. A notes app. A folder called &quot;later.&quot;
                Saving was never the hard part. Finding it again was.
              </p>
              <p>
                The hunt starts as a feeling, not a filename. You remember a
                claim or a chart. You do not remember the tab. You open
                Downloads, try the wrong Cmd+F, check five places, and still do
                not have it.
              </p>
              <p>
                Bookmark and notes apps make you file things before you can get
                them back. If you did not file it, you cannot find it. Most of
                what you save never gets filed.
              </p>
            </Section>

            <Section title="The clock">
              <p>
                Knowledge workers spend about a fifth of the day searching and
                gathering information (
                <Cite href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy">
                  McKinsey Global Institute, <em>The Social Economy</em>, 2012
                </Cite>
                ). Roughly 1.8 hours a day. About 9.3 hours a week.
              </p>
              <p>
                McKinsey counted this inside companies: looking for information,
                including what colleagues know. It is not a stopwatch on your
                bookmarks. It is still the public number for how much of a
                knowledge day goes to looking.
              </p>
            </Section>

            <Section title="Finding it again">
              <p>
                A lot of that looking is going back for something you already
                saw. A quote, a paper, a thread you know exists. Nobody has
                measured how much of search is re-finding versus first-time
                discovery.
              </p>
              <p>
                Capra, Teevan, and others treat re-finding as its own problem.
                If you remember a passage and not a URL, you are slower and more
                likely to miss it than if you had a specific bookmark. This is
                built for that case.
              </p>
              <p>
                <Cite href="https://www.apqc.org/blog/km-makes-knowledge-workers-more-productive-and-less-stressed-out">
                  APQC
                </Cite>{" "}
                finds knowledge workers spend about 2.8 hours a week looking for
                or requesting information, and about 2.0 hours recreating work
                that already exists. That is an office study, not a personal
                library. Same waste: time looking, then time making it again.
              </p>
            </Section>

            <Section title="Attention residue">
              <p>
                An unfinished hunt leaves attention residue: part of your
                attention stays with the last task, so the original work runs
                worse (Leroy, 2009). &quot;Where did I see that?&quot; is
                usually several places. Each switch leaves residue. The hunt
                does not have to last twenty minutes to cost you.
              </p>
              <p>
                An unanswered search stays open in working memory. Twelve tabs
                is not a search strategy. It is an unclosed task.
              </p>
              <p>
                Parking &quot;I might need this later&quot; outside your head
                can free working memory. Only if you trust you can get it back.
                A graveyard of bookmarks does not count.
              </p>
              <p>
                One action to keep it. Then ask later in your own words, with
                sources. No filing. No tags.
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

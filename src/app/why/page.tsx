import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Why Nook exists",
  description:
    "Knowledge workers spend about a fifth of the day looking for information, much of it something they already saw. Why bookmarks fail at retrieval, and why Nook exists.",
  openGraph: {
    title: "Why Nook exists",
    description:
      "Knowledge workers spend about a fifth of the day looking for information, much of it something they already saw. Why bookmarks fail at retrieval, and why Nook exists.",
    url: "/why",
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <h2 className="font-serif text-[1.65rem] tracking-[-0.02em] text-ink">
        {title}
      </h2>
      <div className="space-y-5 text-[1.02rem] leading-[1.8] text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export default function WhyPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader active="why" />
      <main className="mx-auto w-full max-w-[38rem] flex-1 px-6 py-16 md:py-24">
        <p className="mb-6 text-[11px] font-medium tracking-[0.28em] text-moss uppercase">
          An argument
        </p>
        <h1 className="font-serif text-[2.4rem] leading-[1.12] tracking-[-0.03em] text-ink sm:text-[3rem]">
          Why Nook exists
        </h1>

        <div className="mt-16 space-y-16">
          <Section title="The problem you already have">
            <p>
              You saw it. A paper, a thread, a sentence in a lecture. You meant
              to keep it. Weeks later you cannot put your hands on it.
            </p>
            <p>
              You did save it. Bookmarks, a notes app, a folder called “later.”
              Capture was never the hard part. Retrieval was.
            </p>
            <p>
              The hunt starts as a feeling, not a filename. You remember a
              claim, a chart, a tone of voice. You do not remember the tab. You
              open Downloads. You try the wrong Cmd+F. You check five places and
              still do not have it.
            </p>
            <p>
              Bookmark and notes apps fail here because they charge organizing
              as the price of getting anything back. If you did not file it, you
              cannot find it. Most of what you save never gets filed.
            </p>
          </Section>

          <Section title="The clock">
            <p>
              Knowledge workers spend about a fifth of the day searching and
              gathering information (
              <a
                href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy"
                className="underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                McKinsey Global Institute, <em>The Social Economy</em>, 2012
              </a>
              ). That is roughly 1.8 hours a day, about 9.3 hours a week.
            </p>
            <p>
              McKinsey measured search and gathering in an enterprise setting:
              looking for information, including internal knowledge and
              colleagues. It is not a stopwatch on your personal bookmarks. It
              is still the best public number for how much of a knowledge day
              goes to looking.
            </p>
            <p>
              A fifth of the day is mixed. Email, meetings, finding people,
              first-time discovery of things you never saw. Nook does not touch
              most of that. The number names the cost of looking. It does not
              name a product result.
            </p>
          </Section>

          <Section title="Re-finding">
            <p>
              A large share of that looking is relocating something already seen
              — a quote, a paper, a thread you know exists. There is no
              gold-standard split between first-time discovery and re-finding.
              We will not invent one.
            </p>
            <p>
              What the literature does show is that re-finding is common, slow,
              and error-prone when the target is fuzzy.
            </p>
            <p>
              <a
                href="https://www.apqc.org/blog/km-makes-knowledge-workers-more-productive-and-less-stressed-out"
                className="underline decoration-rule underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                APQC
              </a>{" "}
              finds knowledge workers spend about 2.8 hours a week looking for
              or requesting information, and about 2.0 hours a week recreating
              work that already exists. That is an organizational
              knowledge-worker context, not a personal library. It still points
              at the same waste: time spent looking, and time spent making again
              what was already made.
            </p>
            <p>
              Academic personal-information-management work — Capra, Teevan, and
              others — treats re-finding as its own problem. Exploratory
              re-finding (you remember a passage, not a URL) is slower and more
              error-prone than locating a specific bookmark. That is the
              situation Nook is built for: you consumed it, you cannot name the
              file, you still need it.
            </p>
          </Section>

          <Section title="The load, not just the minutes">
            <p>The expensive part is not only the clock.</p>
            <p>
              An unfinished hunt leaves <strong className="font-medium text-ink">attention residue</strong>:
              part of attention stays with the last task, so the original work
              runs at reduced capacity (Leroy, 2009). A “where did I see that?”
              trip is often several places. Each switch leaves residue. The hunt
              does not have to last twenty minutes for the cost to land.
            </p>
            <p>
              There is also the open loop. An unanswered search stays open in
              working memory. Twelve tabs is not a search strategy. It is an
              unclosed task.
            </p>
            <p>
              Cognitive offloading — storing “I might need this later” outside
              the head — can free working memory for the current task. It only
              lowers load if you trust you can get the thing back. A graveyard
              of bookmarks does not count. Capture has to be cheaper than
              remembering, and retrieval has to be trusted.
            </p>
            <p>
              Nook’s bet is both: one action to nook it, then ask later in your
              own words, with sources. No filing. No tags.
            </p>
          </Section>

          <Section title="What we are not claiming">
            <p>
              Nook is not enterprise search. It does not fix email, meetings, or
              finding people. It only helps if you actually captured the thing,
              and only for your library.
            </p>
            <p>
              McKinsey estimated that a searchable record of knowledge could cut
              information-search time by as much as 35%, returning on the order
              of 6% of the workweek. That analog is for <em>retrieval of what
              you already have</em>. It was enterprise social technology, not a
              personal second brain, and it is not a Nook result.
            </p>
            <p>
              We do not print a savings number. We do not say Nook cuts
              cognitive load by a percentage. Nobody has measured that.
            </p>
          </Section>

          <Section title="Why Nook">
            <p>
              You consume more than you remember. You already save too much. The
              expensive part is re-finding your own consumption.
            </p>
            <p>Nook this. Ask later. Answers come back from what you actually saved, and show you where they came from.</p>
            <p>That is why this exists.</p>
          </Section>

          <section className="border-t border-rule pt-10">
            <h2 className="mb-5 font-serif text-[1.35rem] tracking-[-0.02em] text-ink">
              Sources
            </h2>
            <ul className="space-y-4 text-[0.92rem] leading-7 text-muted">
              <li>
                McKinsey Global Institute. <em>The Social Economy: Unlocking value and productivity through social technologies</em>.
                2012. Knowledge workers spend ~1.8 hours/day (~19–20% of time)
                searching and gathering information; a searchable record of
                knowledge was estimated to cut information-search time by as
                much as 35% (~6% of the workweek).{" "}
                <a
                  href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/the-social-economy"
                  className="underline decoration-rule underline-offset-4 hover:text-ink"
                >
                  Report
                </a>
              </li>
              <li>
                APQC. Knowledge-worker time: ~2.8 hours/week looking for or
                requesting information; ~2.0 hours/week recreating work that
                already exists. Organizational / KM context, not a
                personal-library study.{" "}
                <a
                  href="https://www.apqc.org/blog/km-makes-knowledge-workers-more-productive-and-less-stressed-out"
                  className="underline decoration-rule underline-offset-4 hover:text-ink"
                >
                  APQC
                </a>
              </li>
              <li>
                Leroy, Sophie. “Why Is It So Hard to Do My Work? The Challenge
                of Attention Residue When Switching Between Work Tasks.”{" "}
                <em>Organizational Behavior and Human Decision Processes</em>,
                2009. Attention residue: part of attention remains with a prior
                unfinished task after a switch.
              </li>
              <li>
                Capra, Robert; Teevan, Jaime; and related
                personal-information-management research. Re-finding as a
                distinct problem; exploratory re-finding (a remembered passage
                rather than a known URL) is slower and more error-prone than
                locating a specific item. Cited as a research tradition, not a
                single statistic.
              </li>
            </ul>
            <p className="mt-10 text-[13px] text-muted">
              <Link
                href="/"
                className="underline decoration-rule underline-offset-4 hover:text-ink"
              >
                Back to Nook
              </Link>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

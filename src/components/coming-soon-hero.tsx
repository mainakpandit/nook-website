"use client";

import { motion, type Variants } from "motion/react";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease },
  },
};

const glow: Variants = {
  hidden: { opacity: 0, scale: 0.86 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.6, ease, delay: 0.1 },
  },
};

export function ComingSoonHero() {
  return (
    <div className="relative mx-auto flex w-full max-w-[40rem] flex-col items-center px-6 text-center">
      <motion.div
        className="pointer-events-none absolute top-[8%] h-[22rem] w-[34rem] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(216,196,160,0.28) 0%, rgba(247,247,245,0) 70%)",
        }}
        variants={glow}
        initial="hidden"
        animate="visible"
        aria-hidden
      />

      <motion.div
        className="relative flex flex-col items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={item}
          className="mb-7 text-[11px] font-medium tracking-[0.28em] text-moss uppercase"
        >
          Coming soon
        </motion.p>

        <motion.h1
          variants={item}
          className="font-serif text-[2.35rem] leading-[1.12] tracking-[-0.03em] text-balance text-ink sm:text-[3.15rem] md:text-[3.5rem]"
        >
          For people who consume more than they remember.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-[32rem] text-[1.05rem] leading-7 text-ink-soft sm:text-[1.125rem] sm:leading-8"
        >
          Nook is a second brain you throw things into — then ask in your own
          words. Answers come back with sources.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 space-y-6 text-left text-[0.98rem] leading-7 text-ink-soft sm:text-[1.02rem] sm:leading-[1.75]"
        >
          <p>
            You already save too much. Articles, threads, papers, videos, a
            sentence you meant to keep. It disappears into bookmarks and notes
            you never open again.
          </p>
          <p>
            Knowledge workers spend about a fifth of the day looking for
            information. A large slice of that is something they already saw.
          </p>
          <p>
            Nook is the other way: capture in one action, from wherever you
            already are. No filing. No tags. Later, you ask. Nook answers from
            what you actually saved, and shows you where it came from.
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[12px] tracking-[0.18em] text-muted uppercase"
        >
          <span>Nook this</span>
          <span className="h-px w-6 bg-rule" aria-hidden />
          <span>Ask later</span>
          <span className="h-px w-6 bg-rule" aria-hidden />
          <span>Sources</span>
        </motion.p>
      </motion.div>
    </div>
  );
}

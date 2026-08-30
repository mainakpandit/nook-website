---
target: src/app/page.tsx
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-30T13-29-24Z
slug: src-app-page-tsx
---
Method: dual-agent (A: 13dc7287-ee22-4c61-a37a-358f1c5cc029 · B: 9335d6c7-7122-45e1-9878-e24ec8641d85)

#### Design Health Score

Persuade surface. Heuristics 7 and 10 scored n/a. Applicable maximum **32**.

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Status is only the moss “Coming soon” eyebrow plus footer “getnook.tech — coming soon.” Home is unmarked in chrome; no action, so no progress/success. |
| 2 | Match System / Real World | 2 | “Nook this” is a coined verb with no gloss. “Second brain” and “Knowledge workers” are category/research-speak. |
| 3 | User Control and Freedom | 2 | Escape is “Why this exists” or the wordmark. No way to express interest. Entrance blur/stagger has no `prefers-reduced-motion` path. |
| 4 | Consistency and Standards | 3 | Header/footer/`/why` share type and tokens. Triad “Sources” is a noun after two verbs; footer URL looks like a link and is not. |
| 5 | Error Prevention | 2 | Avoids fake savings, but footer domain, triad-as-steps, and the only control reading as “learn more” are false affordances. |
| 6 | Recognition Rather Than Recall | 2 | Visitor must remember the body to decode “Nook this.” No picture of capture or sourced answers. |
| 7 | Flexibility and Efficiency | n/a | Single announcement page; no expert path or repeat-task surface. |
| 8 | Aesthetic and Minimalist Design | 3 | Materials are restrained. Extra noise: stacked gold washes, grid, grain, four frame marks, then a full essay under a headline that already stated the idea. |
| 9 | Error Recovery | 2 | No form errors. The Persuade failure — “I want in” — has no recovery: no email, no profile, no “we’ll tell you.” |
| 10 | Help and Documentation | n/a | Product is not live; `/why` is an argument, not task help. |
| **Total** | | **18/32** | **Acceptable** |

#### Design Specificity Verdict

**LLM assessment:** Partially authored for Nook, not category-proof. Paper/ink/moss, Instrument Serif against Geist, crop-mark frame corners, grain, fade grid, and the alcove icon are specific. “Nook this” and the home/`/why` split are editorial, not SaaS-template. What is interchangeable: centered serif manifesto, tracked “Coming soon” eyebrow, warm radial wash, and “second brain you throw things into.” There is no product artifact — no capture gesture, no ask field, no source chip. Swap the wordmark and you still have a premium “we’re almost here” poster.

`branding/coming-soon.md` forbids waitlists and second-brain jargon without a concrete loop. The live page obeys the waitlist ban and still leads the subhead with “second brain,” then dumps three body paragraphs plus a research line. Specificity lives in voice and materials; it dies in the missing *thing*.

**Deterministic scan:** `detect.mjs --json` on `src/app/page.tsx`, `coming-soon-hero.tsx`, `site-header.tsx`, `site-footer.tsx`, `atmosphere.tsx`, `layout.tsx`, `src/app/why/page.tsx` returned `[]`, exit code 0, 0 findings. The detector did not catch the missing primary action, false footer affordance, motion, or contrast issues — those are interaction and token problems, not the markup patterns it flags. No false positives.

**Visual overlays:** No reliable user-visible overlay. Browser mutation APIs were not exposed to Assessment B (fallback signal: `mutation unavailable`). Live-server was not started. CLI scan is the only deterministic evidence.

#### Overall Impression

The room is right. The visit has nowhere to go. The H1 is the peak; everything after it is the same weight; the end is a tautological footer. The single biggest opportunity is not “add a louder waitlist.” It is to decide what the visitor is allowed to *do* after they recognize themselves — one quiet next step — and to show a nook instead of only describing one.

#### What's Working

1. **Voice and materials.** Short sentences, moss eyebrow, paper field, frame marks. It feels like a quiet room, which is what the coming-soon brief asked for.
2. **IA split.** Home vs “Why this exists” is the right cut: manifesto vs cited argument. `/why`’s “What we are not claiming” is more trustworthy than typical launch copy.
3. **The loop, as an idea.** “Nook this — Ask later — Sources” plus the alcove icon is a brand habit, not a feature grid. Presentation is the failure, not the concept.

#### Priority Issues

**[P0] No next step after recognition**
- **What:** There is no waitlist, notify, follow, or other primary control. The only interactive target besides the wordmark is header “Why this exists” (`13px`, `text-muted`). Footer `getnook.tech — coming soon.` is a `<p>`.
- **Why it matters:** Persuade succeeds when the visitor decides. This page can only be read. The brand brief forbids waitlist theater; that still does not replace a decision. The task “I want this” cannot complete.
- **Fix:** One visible primary that stays quiet: a real profile, a save/bookmark of the page, or a notify that does not perform scarcity. If the product decision is announce-only, make that the named job of the page and promote **Why** as the explicit secondary, not a muted chrome link.
- **Suggested command:** `$impeccable shape` (or `$impeccable clarify` if the next step is copy-only)

**[P1] Hierarchy lies about what to do**
- **What:** H1 + three even `text-ink-soft` paragraphs own the center. The loop is tracked caps at `12px`. The only next step is top-right chrome.
- **Why it matters:** First-timers follow visual weight. They finish the essay and land on a footer that restates the eyebrow.
- **Fix:** Cut or move the three body paragraphs to `/why`. Leave H1, one sentence, the loop, and one action. Let the action be the second thing they see.
- **Suggested command:** `$impeccable distill`

**[P1] “Nook this” / “second brain” without a picture**
- **What:** Subhead leads with “second brain”; the close asks them to “Nook this” without showing a nook, a question, or a sourced answer. The briefing file itself lists second-brain jargon without a concrete loop as anti-copy.
- **Why it matters:** Jordan maps this to Notion/Mem. The verb reads as a command they failed. Riley notices the product is asserted, not evidenced. Home’s “fifth of the day” claim has no on-page citation; `/why` then qualifies it.
- **Fix:** One still of the loop: capture → ask in their words → answer with a source chip. Put the verb on that. Demote “second brain.”
- **Suggested command:** `$impeccable bolder`

**[P2] False affordance: footer URL + duplicate status**
- **What:** Footer repeats coming-soon and the domain looks clickable.
- **Why it matters:** Riley clicks it. Casey thinks the marketing host is the product. Status is noisier, not clearer.
- **Fix:** One coming-soon signal. Domain as plain text without em-dash theater, or a real `href` if it should navigate.
- **Suggested command:** `$impeccable polish`

**[P2] Motion and small-type contrast ignore edge users**
- **What:** Hero items animate opacity + `y` + `blur(6px)` for ~0.95s, stagger 0.14, glow 1.6s. No `prefers-reduced-motion`. Header/footer muted and moss eyebrow at 11–13px on paper are likely under AA. “Why this exists” has no extra hit padding.
- **Why it matters:** Casey’s thumb misses the only link; vestibular users eat a blur entrance; low-vision users lose chrome.
- **Fix:** Instant opacity on reduced motion. Darken or enlarge muted/moss. Pad the Why hit target to ~44×44. Move a next step into the thumb zone on small viewports.
- **Suggested command:** `$impeccable adapt` (pair with `$impeccable audit` for contrast/motion)

#### Persona Red Flags

**Jordan (First-Timer):** Five-second job is unclear — no button, only “Coming soon” and a literary H1. “Nook this” reads as a command with no control. “Second brain” maps to apps they already abandoned. “Why this exists” sounds like a manifesto, not “what is this.” After the footer there is no confirmation they did anything, because they couldn’t.

**Riley (Stress Tester):** Footer domain is not a link. Loop beats are not links and not a stepper. The “fifth of the day” line has no footnote on home; `/why` walks the claim into cited humility — Riley will call that bait. No form to break because there is no form; the missing feature is the finding.

**Casey (Distracted Mobile):** The only real control sits in top chrome, not the thumb zone, at 13px. Three `space-y-6` paragraphs push the loop and footer below a phone fold. Entrance blur burns the first glance. `justify-center` plus `py-16` gives no sticky way back into the visit after an interruption.

#### Minor Observations

- Body is `text-left` inside a `text-center` hero: a small lurch, not a designed letter.
- Dual gold washes: `.atmosphere-wash` and the hero radial ellipse.
- Header active state exists for `why`, not for home.
- No skip link; one `h1` — heading structure is otherwise clean.
- No `:focus-visible` in CSS (browser default only).
- Light-only `color-scheme: light`.
- OG image is type-led; the nested mark is a U without the head.

#### Questions to Consider

- If they cannot join anything, what decision is this page for — belief, or polite delay?
- Would the page get stronger if the three body paragraphs moved entirely to `/why`?
- Why is “Sources” a noun in a verb chain?
- What would “authored for Nook” look like if the first viewport were a nook, not a poster?
- Is “Why this exists” the real homepage, and `/` a title card?

#### Cognitive load

**6 of 8 checklist items failed → high load.** Failures: single focus, grouping, visual hierarchy, one thing at a time, working memory, progressive disclosure. Passes: chunking, minimal choices (only Nook + Why). No decision point with >4 visible options; overload is reading and decoding, not a wall of buttons.

#### Emotional journey

Peak is the H1. Valley is three even-weight paragraphs; the “fifth of the day” line is the coldest beat. The end is the same news as the eyebrow, smaller. High-stakes trust (privacy, “your library only”) never arrives. `/why` is where trust actually peaks; chrome sends the curious there before any belonging gesture. Recognition → lecture → door closed.

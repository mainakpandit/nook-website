# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the curious high-volume information consumer. Researchers, founders, students, and similar people who read articles, watch videos, follow threads, and browse documentation across many domains. They capture opportunistically and need to resurface things weeks or months later without remembering where. Comfortable with AI tools. Single-player. They have tried bookmarks and notes apps and abandoned them because organizing was the price of retrieval.

This website’s visitor is that same person, arriving before the product ships.

## Product Purpose

Nook is a human second brain. Promise: capture anywhere, ask anything, get answers with sources.

The core loop: the user nooks something wherever they are, and later asks Nook a question to get it back.

This site exists to state why that loop is needed, while the product is still coming soon. Success for the site is comprehension: a first-time visitor knows the problem (re-finding their own consumption), the mechanism (nook it, ask later, with sources), and that the product is not live yet.

## Positioning

Capture was never the hard part. Retrieval was. Bookmark and notes apps charge organizing as the price of getting anything back.

Nook: one action to nook it, then ask later in your own words. No filing. No tags. Answers come from what was actually saved, with sources.

Nook is not enterprise search. It does not fix email, meetings, or finding people. It only helps if the person captured the thing, and only for their library.

## Operating Context

The live site is a public marketing page at getnook.tech. The product (extension, mobile, WhatsApp, MCP, webapp) is not on this site. No waitlist, pricing, or signup on the current website.

Confirmed site IA (2026-08-31): a single traditional landing page at `/` whose content is the “Why this exists” argument. No separate `/why` route. Close remains “coming soon.” No email capture. Visual identity stays the incumbent paper / serif / moss system.

## Capabilities and Constraints

- Site stack: Next.js App Router, React, Tailwind. Landing must be server-rendered; no `"use client"` on the landing page.
- Product v1 (from PRD, not claimed on the landing): browser extension, webapp, mobile share sheet, WhatsApp bot, MCP. 14-day trial then Pro. Google sign-in only.
- Landing copy must not invent waitlists, prices, MCP, WhatsApp, feature grids, or a Nook ROI number.
- Public cost line: knowledge workers spend about a fifth of the day looking for information; a large share is re-finding. Do not invent a split percentage. Do not print a Nook savings number.
- Standing workflow for later new screens: code-first (`buildPath: code` in `.impeccable/config.json`).

## Brand Commitments

- Name: Nook. A **nook** is one saved item. **Nook this** / **nooked** is the capture verb.
- Voice: calm, precise, slightly literary. Short paragraphs. “You” is the reader. Never “users.” No exclamation marks. No productivity-hustle.
- Cite in the sentence; sources listed at the bottom.
- No charts, vendor logos, or “we save you 30 minutes.”
- Site icons live in `src/app/` and `public/icons/`; the full brand kit (lockups, social, app-store) lives in `nook-assets/`.
- Domain: getnook.tech.

## Evidence on Hand

- Argument and citations: `branding/why.md`.
- Voice and anti-claims: `branding/coming-soon.md`.
- Product spec: `nook-prd.md`.
- Cited sources: McKinsey Global Institute, *The Social Economy* (2012); APQC knowledge-worker time; Leroy (2009) attention residue; Capra/Teevan PIM re-finding tradition.
- Do not fabricate testimonials, customers, benchmarks, or a Nook-measured savings figure.
- Not cited: IDC 2.5 hrs / 30%; Betterstacks 7 hrs/week; “23 minutes × N hunts”; Gartner ~18 minutes.

## Product Principles

- Retrieval is the product; capture only matters if getting it back is trusted.
- Honest claims: name the cost of looking; never convert literature analogs into a Nook result.
- One page, one argument: the site explains why this exists, then says it is coming soon.
- Speak in situations (papers, threads, lectures), not job-title lists.
- The visitor should leave knowing the loop: nook this, ask later, sources.

## Accessibility & Inclusion

No product-specific accessibility standard was set beyond ordinary public-web expectations: readable contrast, semantic headings, keyboard-reachable links, and content visible without client JavaScript.

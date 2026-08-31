---
name: Nook
description: Black studio one-pager. Icon mark, Helvetica, one photograph, cited essay, coming soon.
colors:
  void: "#000000"
  paper: "#f2f2f2"
  paper-soft: "#b3b3b3"
  rule: "#2a2a2a"
typography:
  display:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.35em"
rounded:
  sm: "5px"
  md: "12px"
spacing:
  sm: "20px"
  md: "40px"
  lg: "80px"
  column: "42rem"
components:
  link:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    padding: "0"
  mark:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    size: "22px"
    width: "22px"
    height: "22px"
---

# Design System: Nook

## Overview

**Creative North Star: "The studio sheet"**

A single black column, the kind a small software studio would publish as a one-page site: no chrome, no atmosphere, no wordmark. The alcove icon is the only brand. Helvetica is the only voice. One photograph carries color. Everything else is type, dashes, and a blinking block cursor.

The visitor is here to understand why the product exists, then to learn it is not live. There is no waitlist and no conversion control. Density is high in the essay and empty in the first viewport.

**Key Characteristics:**
- True black field, near-white Helvetica
- Icon-only mark; never a text wordmark
- One rounded photographic plate
- `---` as the only section rule
- Coming-soon close with a terminal cursor

## Colors

Restrained: black ground, two values of off-white, one dim rule.

### Primary
- **Paper** (#f2f2f2): Body, headlines, links, cursor.

### Neutral
- **Void** (#000000): Page field.
- **Paper soft** (#b3b3b3): Subhead and sources.
- **Rule** (#2a2a2a): Unused as a drawn line; the live divider is the `---` glyph in paper-soft.

## Typography

Helvetica Neue, then Helvetica, then Arial. No serif. No mono costume.

- **Display:** 2.4–2.75rem, semibold, tracking −0.03em. The home headline only.
- **Headline:** 15px medium section titles.
- **Body:** 13px / 1.7 for the essay.
- **Label:** 13px tracked dashes for `---`.

Links are the same size as body, underlined, paper color, opacity 0.7 on hover.

## Layout

One centered column, `max-width: 42rem`, `padding-inline: 1.5rem`. Header icon sits at the start of that column, not the viewport edge. First viewport stacks mark → large gap → headline → small loop line → large gap → photograph. Essay sections stack with ~3.5rem between titles. Footer after a `---` rule.

## Elevation & Depth

Flat. No drop shadows. The photograph is the only object; its rounded rectangle is enough.

## Shapes

- Mark: 22px, 5px corner (the icon asset already has a rounded square).
- Photograph: 12px corner, full column width, intrinsic 3:2.

## Components

- **Mark:** Home link, icon only, `aria-label="Home"`.
- **Cite:** Underlined text link, no button treatment.
- **Rule:** Literal `---` in tracked paper-soft.
- **Cursor:** 0.52em × 0.92em paper block, 1.12s step blink; static when reduced motion is requested.

## Do's and Don'ts

**Do**
- Keep the icon as the only brand lockup.
- Keep coming soon as the close; no email capture.
- Keep claims cited; no product ROI number.
- Set Helvetica as the stack even on machines that fall back to Arial.

**Don't**
- Write the product name as a wordmark in the header or footer.
- Restore paper, serif, moss, grain, or corner frame marks.
- Invent a waitlist, changelog, or journal to mimic the reference studio's copy.
- Use monospace to signal “technical.”

# Design.md

**Scope:** Color palette only, for the Nook public landing page at `getnook.tech`.
**Component library:** Watermelon UI (React, Tailwind, Radix). Components come from the library. This file supplies the palette they are themed with.
**Not in this file:** typography, spacing, motion, copy, layout. Do not invent them from this document.

---

## 0. Rules for the agent

1. Use Watermelon UI components as shipped. Override **color only**.
2. Never hardcode a hex in component markup. Every color comes from a token below.
3. Tokens follow the standard semantic naming used by Tailwind and Radix component registries (`background`, `foreground`, `primary`, `muted`, `border`, `ring`, and so on). If Watermelon UI exposes different token names, map these values onto its names and keep the mapping in one theme file.
4. Both light and dark values are mandatory. Every section must be checked in both.
5. If a color is needed that is not in this file, stop and ask. Do not add a hue.

---

## 1. Brand anchor

| Token | Value | Note |
|---|---|---|
| `brand` | `#1D03A1` | Constant in both appearances. This is a **fill**, never body text. |
| `brand-foreground` | `#FFFFFF` | The only content color placed on `brand`. |

The logo is a white knockout mark with no background. It must always sit on a `#1D03A1` ground. Never place the logo on white, on a photo, or on a gradient.

---

## 2. Semantic tokens

### Light appearance

| Token | Hex |
|---|---|
| `background` | `#F2F2F7` |
| `foreground` | `#1C1C1E` |
| `card` | `#FFFFFF` |
| `card-foreground` | `#1C1C1E` |
| `popover` | `#FFFFFF` |
| `popover-foreground` | `#1C1C1E` |
| `primary` | `#1D03A1` |
| `primary-foreground` | `#FFFFFF` |
| `secondary` | `#FFFFFF` |
| `secondary-foreground` | `#1D03A1` |
| `muted` | `#E8E8ED` |
| `muted-foreground` | `#8E8E93` |
| `accent` | `#EDEBFF` |
| `accent-foreground` | `#1D03A1` |
| `destructive` | `#FF3B30` |
| `destructive-foreground` | `#FFFFFF` |
| `border` | `#E5E5EA` |
| `input` | `#E5E5EA` |
| `ring` | `#1D03A1` |

### Dark appearance

| Token | Hex |
|---|---|
| `background` | `#0B0B0F` |
| `foreground` | `#FFFFFF` |
| `card` | `#1C1C1E` |
| `card-foreground` | `#FFFFFF` |
| `popover` | `#1C1C1E` |
| `popover-foreground` | `#FFFFFF` |
| `primary` | `#5E5CE6` |
| `primary-foreground` | `#FFFFFF` |
| `secondary` | `#2C2C2E` |
| `secondary-foreground` | `#FFFFFF` |
| `muted` | `#2C2C2E` |
| `muted-foreground` | `#A1A1A6` |
| `accent` | `#1A1140` |
| `accent-foreground` | `#B9B5FF` |
| `destructive` | `#FF453A` |
| `destructive-foreground` | `#FFFFFF` |
| `border` | `#2C2C2E` |
| `input` | `#2C2C2E` |
| `ring` | `#5E5CE6` |

**Critical substitution:** `primary` is `#1D03A1` in light and `#5E5CE6` in dark. Indigo on a near-black page sits at roughly 1.5:1 against its background and the button loses its edge. `brand` stays `#1D03A1` in both appearances, because it is only ever used as a large filled ground carrying white content.

---

## 3. Interaction tokens

| Token | Light | Dark |
|---|---|---|
| `primary-hover` | `#3520B8` | `#7A78EC` |
| `primary-pressed` | `#16027E` | `#4D4BD4` |
| `brand-tint` | `#EDEBFF` | `#1A1140` |
| `border-strong` | `#D1D1D6` | `#3A3A3C` |
| `foreground-tertiary` | `#AEAEB2` | `#6E6E73` |

Hover and pressed states shift the hex. Do not produce them by lowering opacity on indigo. Opacity over the gray page produces a muddy violet.

---

## 4. Status colors

Used on the landing page only where the product is being demonstrated, for example a mock nook card inside a hero or feature screenshot. Not for marketing emphasis.

| State | Dot or fill | Label on light | Label on dark |
|---|---|---|---|
| `status-ready` | `#34C759` | `#248A3D` | `#30D158` |
| `status-processing` | `#FF9F0A` | `#8A5300` | `#FFD60A` |
| `status-failed` | `#FF3B30` | `#D70015` | `#FF453A` |

The vivid hex is for dots, pills, and indicators. The label hex is for any text rendered in that color, because the vivid green and amber do not reach readable contrast as text on white.

Always pair the color with a text label or an icon. Color alone never carries the meaning.

---

## 5. Token object

```json
{
  "brand": { "DEFAULT": "#1D03A1", "foreground": "#FFFFFF", "hover": "#3520B8", "pressed": "#16027E" },
  "light": {
    "background": "#F2F2F7",
    "foreground": "#1C1C1E",
    "card": "#FFFFFF",
    "cardForeground": "#1C1C1E",
    "primary": "#1D03A1",
    "primaryForeground": "#FFFFFF",
    "secondary": "#FFFFFF",
    "secondaryForeground": "#1D03A1",
    "muted": "#E8E8ED",
    "mutedForeground": "#8E8E93",
    "accent": "#EDEBFF",
    "accentForeground": "#1D03A1",
    "destructive": "#FF3B30",
    "border": "#E5E5EA",
    "ring": "#1D03A1"
  },
  "dark": {
    "background": "#0B0B0F",
    "foreground": "#FFFFFF",
    "card": "#1C1C1E",
    "cardForeground": "#FFFFFF",
    "primary": "#5E5CE6",
    "primaryForeground": "#FFFFFF",
    "secondary": "#2C2C2E",
    "secondaryForeground": "#FFFFFF",
    "muted": "#2C2C2E",
    "mutedForeground": "#A1A1A6",
    "accent": "#1A1140",
    "accentForeground": "#B9B5FF",
    "destructive": "#FF453A",
    "border": "#2C2C2E",
    "ring": "#5E5CE6"
  },
  "status": {
    "ready": { "fill": "#34C759", "label": "#248A3D", "labelDark": "#30D158" },
    "processing": { "fill": "#FF9F0A", "label": "#8A5300", "labelDark": "#FFD60A" },
    "failed": { "fill": "#FF3B30", "label": "#D70015", "labelDark": "#FF453A" }
  }
}
```

---

## 6. Landing page component mapping

| Component | Light | Dark |
|---|---|---|
| Page shell | `background`, `foreground` | `background`, `foreground` |
| Nav bar | Transparent over hero, then `card` with a `border` bottom hairline on scroll. Logo mark in `foreground`, not indigo. | `card` with `border` hairline |
| Hero band | Full-bleed `brand` ground, white logo mark, `brand-foreground` headline and subhead | Identical. The hero is the one block that does not change between appearances. |
| Hero primary CTA | `card` fill with `brand` text, sitting on the indigo ground | Identical |
| Hero secondary CTA | Transparent with a `brand-foreground` hairline border at reduced opacity, white label | Identical |
| Section outside hero | `background` | `background` |
| Feature card | `card` fill, `border` hairline, `foreground` title, `muted-foreground` body | `card` fill, `border` hairline |
| Feature icon | `brand-tint` rounded tile with a `primary` glyph | `accent` tile with `accent-foreground` glyph |
| Capture surface row (extension, mobile, WhatsApp, MCP) | `muted` chips, `muted-foreground` labels, `primary` on the active or hovered one | `muted` chips, `primary` on active |
| Product screenshot frame | `card` on `background`, `border` hairline, no shadow | `card` on `background` |
| Mock nook card inside a screenshot | `card`, `border`, status dot from section 4 | Same |
| Pricing card, standard | `card` fill, `border` hairline | `card`, `border` |
| Pricing card, recommended | `card` fill, `primary` border, `brand-tint` badge with `accent-foreground` label | `card` fill, `primary` border, `accent` badge |
| Pricing CTA | `primary` fill, `primary-foreground` label | `primary` fill, `primary-foreground` label |
| Trial banner or strip | `brand-tint` background, `accent-foreground` text | `accent` background, `accent-foreground` text |
| FAQ accordion | `card` panels, `border` dividers, `muted-foreground` answers | Same |
| Final CTA band | Full-bleed `brand`, same treatment as hero | Identical |
| Footer | `background`, `muted-foreground` links, `border` top hairline | Same |
| Focus state, all interactive elements | 2px `ring`, offset 2px | 2px `ring` |

---

## 7. Constraints

- **At most two indigo grounds on the whole page**: the hero and the final CTA band. If a third appears, remove one.
- **One filled `primary` button per viewport.** Everything else is secondary or a text link.
- **No gradients anywhere**, including on the brand color and behind the hero. The logo is a flat knockout and the system is flat.
- **No shadows on cards.** Separation comes from the `border` hairline against `background`.
- **No system blue.** Do not introduce `#0A84FF` or any second blue. Links use `primary`.
- **No additional accent hue.** No teal, no amber outside the status layer, no green outside the status layer.
- **Neutrals stay neutral.** Do not tint the grays toward indigo. The single saturated color only carries weight because everything around it is gray.
- **Expired or empty states are never red.** Red is reserved for `destructive` and `status-failed`.
- Contrast reference: `#1D03A1` on white is about 13:1. `#5E5CE6` on `#0B0B0F` is about 3.9:1, which clears the 3:1 bar for UI elements and large text but not for small body copy, so dark-mode paragraphs stay `foreground` or `muted-foreground`.

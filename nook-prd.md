# Nook: Product Requirements Document
 
**Version:** 2.0 (v1 scope, aligned with final implementation plan)
**Document type:** Product spec, non-technical
**Domain:** getnook.tech
 
## 1. Overview and vision
 
Nook is a human second brain. Its promise to the user is simple: **capture anywhere, ask anything, get answers with sources.**
 
The product exists because knowledge workers consume more content than they can remember, and existing tools (bookmarks, read-later apps, notes) fail at the retrieval step. Nook makes capture frictionless across every surface a user already uses, and makes retrieval conversational, so saved content actually gets used.
 
The core loop is one sentence: **the user nooks something wherever they are, and later asks Nook a question to get it back.**
 
## 2. Goals and non-goals
 
### Goals for v1
 
- Frictionless capture from every surface the target user already inhabits (browser, mobile, WhatsApp).
- A single unified library of saved items ("nooks") regardless of capture source.
- Natural-language retrieval that returns AI-generated answers with citations to the user's own nooks.
- First-class programmatic access via MCP so power users can plug Nook into their AI agents.
- A capture experience so low-friction it becomes reflex.
- A trial that lets users experience full value before being asked to pay.
### Non-goals for v1
 
- Team workspaces, sharing, or any multiplayer feature.
- Public publishing or a social feed.
- Manual organization systems (folders, user-managed tags, collections).
- Rich text editing of captured content.
- PDF or arbitrary file uploads.
- Video and audio capture beyond linked media (see Section 5.2).
- Offline mode.
- Proactive resurfacing of any kind (digests, "on this day", related nooks, etc.).
- Favorites, pins, and archive states.
- iMessage support (deferred to v1.1).
- A permanent free tier.
## 3. Target user
 
A single blended persona: **the curious high-volume information consumer.**
 
This user reads articles, watches videos, follows threads, and browses documentation across many domains every week. They are researchers, founders, and students, distinct in their subject matter but identical in behavior: they capture opportunistically and need to resurface things weeks or months later, often without remembering exactly where or when they saw it.
 
They are comfortable with AI tools, single-player by default, and value speed over structure. They have tried bookmarking and note-taking apps and abandoned them because the friction of organizing outweighed the payoff of retrieval.
 
## 4. The nook (data primitive)
 
A **nook** is the atomic unit of saved content.
 
### 4.1 Structure
 
One nook equals one saved item with optional attachments. Every nook has a **primary type** and a consistent set of metadata.
 
**Primary types:**
 
- Link (URL only)
- Full page (extracted article content)
- Text highlight (selected text from a page)
- Screenshot
- Note (user-written text)
- Image
- Rich media (video, tweet, thread; see Section 5.2)
**Metadata carried by every nook:**
 
- Source URL (if any)
- Source title
- Capture timestamp
- Capture surface (extension, mobile, webapp, WhatsApp, MCP)
- Capture type (see primary types above)
- User's optional note
- AI-generated summary (lazy, see Section 13)
- AI-generated topic tags (hidden from user, used for retrieval)
- Thumbnail or preview image
### 4.2 Mutability
 
- The captured content itself is **immutable**. It is a record of what the user saw.
- The user's **note is editable** at any time.
- The AI summary is viewable, not directly editable, but **regeneratable on demand**.
- Nooks can be **deleted**. Deleted nooks sit in trash for 30 days, then are removed permanently.
## 5. Capture
 
Capture is the surface where Nook wins or loses. Every capture path shares three principles: **silent, one action, and always produces a valid nook.**
 
### 5.1 Capture surfaces
 
**Browser extension**
 
Three capture modes, three entry points:
 
- **Right-click "Nook this"**, context-aware. If text is selected, it captures the highlight. If nothing is selected, it offers full page or screenshot.
- **Extension icon click** opens a small popup with three explicit buttons: highlight (if selection present), full page, screenshot.
- **Keyboard shortcuts**, configurable, for power users.
Capture is silent. A brief toast appears in the corner of the page ("Nooked ✓") and auto-dismisses in about two seconds. No note field at capture time; notes are added later from webapp or mobile.
 
**Full page capture** stores reader-mode extracted text plus the article's primary image. Primary image fallback hierarchy: og:image, then first substantial image in the article body, then an auto-generated card showing the site favicon, title, and domain on a colored background.
 
**Highlight capture** stores the selected text with source URL. One highlight action equals one nook.
 
**Screenshot capture** stores a rendered image of the current viewport or selected region, with source URL.
 
Distribution covers Chromium browsers (Chrome, Edge, Brave, Arc, Opera) and Firefox at v1. Safari is deferred to v1.1.
 
**Webapp**
 
Primarily a retrieval and management surface. Capture is secondary. A single "+ New nook" action opens a modal where the user can add: a URL, a note, an image, or any combination. If a URL is provided, Nook fetches and processes the page in the background exactly as the extension would, so cross-surface parity is preserved.
 
**Mobile app**
 
Both capture and retrieval, weighted toward capture. Available on iOS and Android. The killer feature is the OS-level share sheet: **"Share to Nook"** works from Safari and any app that supports sharing. Accepts URLs, selected text (with source URL), and images with optional caption. The caption becomes the user's note.
 
Retrieval and asking is available in-app, with a search and ask bar at the top of the home screen.
 
**WhatsApp channel**
 
Users can nook by sending a message to the Nook bot on WhatsApp. Accepts URLs, plain text (treated as a note), and images with optional caption. The bot replies with a short confirmation and a deep link to the nook.
 
**Account linking:** in-app setting shows a QR code or a pre-filled linking message to send to the Nook number. The user taps, WhatsApp opens with the message pre-filled, and they send it. Once the phone number is linked, all messages from it are attributed to that account. Phone numbers are stored as hashes only.
 
iMessage is out of scope for v1 and deferred to v1.1.
 
**MCP**
 
External AI clients (Claude Desktop, other MCP-capable agents) can add nooks programmatically. Full parity for the add action. See Section 8.
 
### 5.2 Rich media capture
 
When a user nooks a URL matching a supported media platform, Nook routes to a specialized extraction pipeline instead of the article pipeline. To the user, the capture experience is identical; the difference is what gets stored.
 
**In scope for v1:**
 
- **YouTube** (long-form and Shorts): transcript, thumbnail, title, channel, duration, publish date, source URL. If the user is captured mid-video, the timestamp is saved and used for a resume link.
- **Twitter / X**: single tweet or full thread by the same author. Stores tweet text, author, timestamp, attached media (image or video thumbnail), and quoted tweets as context. Replies from other authors are excluded.
- **LinkedIn posts**: post text, author, timestamp, attached media.
- **Reddit threads**: original post, author, subreddit, top-level content.
**Deferred to a later version:**
 
- Instagram (posts and Reels)
- TikTok
- Podcasts (Spotify, Apple)
- Voice notes from messaging channels
**Missing transcript handling:** if a video has no available transcript (uncaptioned, unsupported language, platform restriction), the nook is still saved with thumbnail, title, and author. A subtle "transcript unavailable" indicator appears on the nook. Retrieval falls back to title and author metadata.
 
### 5.3 Cross-surface consistency
 
A nook created from any surface must be indistinguishable in the library from a nook created from any other surface, given equivalent source content. The extraction pipeline, summary quality, and metadata schema are shared. Capture surface is stored only as metadata for the user's reference.
 
## 6. Retrieval
 
Retrieval is where the second brain earns its name. Three modes, one hero.
 
### 6.1 Ask (hero mode)
 
A prominent ask bar on the webapp and mobile home screens: **"Ask your nooks anything..."**
 
Each ask is **standalone**. No conversational follow-ups in v1. New questions start fresh.
 
**Response format:**
 
- An AI-generated answer with inline citations.
- Cards for each cited nook below the answer, showing thumbnail, title, source, snippet, and capture date.
- Clicking a citation highlights the corresponding source card.
**Time-aware retrieval:** the system understands relative time expressions ("last month", "yesterday", "this week") and uses capture timestamps as a first-class filter.
 
**Empty-result behavior:** if the user's nooks contain nothing relevant, the AI says so plainly and offers a per-query web search fallback the user can opt into. The default answer scope is strictly the user's library, to preserve the trust contract of a "second brain."
 
### 6.2 Search
 
Keyword search across nook content, notes, source metadata, and AI-generated tags. Filter controls for source, capture type, and date range. Available on every plan state, including expired.
 
### 6.3 Browse
 
A chronological grid or list of nooks on the home screen, below the ask bar. This is the default view when the user opens the app without a query. Available on every plan state.
 
## 7. Organization
 
**No user-managed folders, tags, or collections in v1.** The AI auto-tags every nook in the background, and those tags power retrieval invisibly. The user's mental model is: throw it in Nook, ask later.
 
Delete is the only user-driven organization action. Deleted nooks sit in trash for 30 days, then are permanently removed.
 
## 8. MCP access
 
Nook exposes an MCP server so users can plug their library into any MCP-capable AI client.
 
**Five tools:**
 
1. `search_nooks`, keyword search across the library.
2. `ask_nooks`, natural-language question returning an answer with cited nooks.
3. `get_nook`, retrieve a single nook by ID.
4. `add_nook`, create a new nook (URL, text, or image).
5. `delete_nook`, delete a nook by ID.
**Connection:** the user's Nook dashboard provides a copyable connector link containing an opaque token. The user pastes it into their MCP client's connector settings. Tokens are shown once at creation, then only their hash is stored. Users can name each token (e.g., "Claude Desktop") and revoke instantly from the dashboard.
 
**Access under expired plans:** read tools (`search_nooks`, `get_nook`) remain available even for expired users, because their nooks are their forever. Write and LLM-billing tools (`add_nook`, `ask_nooks`) require an active plan.
 
MCP is a first-class access channel with parity for these five actions.
 
## 9. Onboarding
 
Three steps after Google sign-in, each skippable:
 
1. **Install the browser extension.** Direct link to the store, plus a "skip for now" option.
2. **Connect WhatsApp.** QR code and pre-filled linking message, or skip.
3. **Capture your first nook.** A suggested URL is provided to try immediately; alternatively the user can nook anything of their own.
The user then lands in an empty (or one-item) library that displays example ask queries to seed the retrieval habit.
 
**Auth:** Google sign-in only in v1. No email/password, no other providers.
 
## 10. Monetization
 
Nook uses a **14-day free trial, then paid** model. There is no permanent free tier in v1.
 
### 10.1 Plan states
 
Every user is in one of three states at any given time:
 
- **Trialing.** Default at signup. Full Pro capabilities for 14 days. No card required to start.
- **Pro.** Active paying customer. Full capabilities. Card collected at conversion via Dodo-hosted checkout.
- **Expired.** Trial ended without subscribing, or subscription canceled and the paid period ran out. Read-only access to the library.
### 10.2 What each state can do
 
| Capability | Trialing | Pro | Expired |
|---|---|---|---|
| Sign in | ✅ | ✅ | ✅ |
| Browse existing nooks | ✅ | ✅ | ✅ |
| Keyword search | ✅ | ✅ | ✅ |
| Export all data | ✅ | ✅ | ✅ |
| Delete account | ✅ | ✅ | ✅ |
| Subscribe or resubscribe | ✅ | manage | ✅ |
| Capture new nooks | ✅ | ✅ | ❌ |
| Ask (AI) | ✅ | ✅ | ❌ |
| MCP read (`search_nooks`, `get_nook`) | ✅ | ✅ | ✅ |
| MCP write (`add_nook`) | ✅ | ✅ | ❌ |
| MCP ask (`ask_nooks`) | ✅ | ✅ | ❌ |
 
### 10.3 Pricing
 
**Pro tier:**
 
- **$8 per month**, billed monthly.
- **$72 per year** ($6 per month effective, 25% discount over monthly).
- Unlimited captures, unlimited asks, WhatsApp channel, MCP access, priority processing for captures, early access to new platform integrations.
Card is collected at trial conversion, not at signup. Payments are processed by Dodo Payments as merchant of record.
 
### 10.4 Trial expiry and email sequence
 
If a trialing user does not subscribe by day 14, they move to expired at 08:00 UTC on day 15. Nooks captured during the trial are preserved and remain browsable and searchable.
 
Automated emails over the trial:
 
- Day 0 (signup): welcome and capture-your-first-nook tip.
- Day 3: value nudge if fewer than 5 nooks captured.
- Day 7: mid-trial check-in with the user's own capture count and a suggested ask query built from their tags.
- Day 12: "Your trial ends in 2 days" with subscribe CTA.
- Day 14: "Your trial ends tomorrow" with subscribe CTA.
- Day 15 (if not subscribed): "Your trial has ended. Your nooks are safe. Subscribe to keep capturing and asking."
- Day 15 (if subscribed): "Welcome to Nook Pro."
### 10.5 Pricing rationale
 
Nook sits in the AI-first second-brain price band ($8 to $14/month category norm), below Readwise Reader ($9.99/mo annual) and Mem (~$14/mo) because Nook is more focused (single-player, capture-first, no reading environment), and meaningfully above pure bookmark managers like Raindrop ($3/mo) because AI retrieval is the core value, not a bolt-on. The 25% annual discount matches category standard.
 
The trial-first model (no card at signup) is chosen because Nook's value grows with library size. A user cannot meaningfully evaluate "ask my nooks" until they have nooks. Front-loading a card would suppress the exact capture behavior the trial exists to seed. Notion and Linear use the same pattern for the same reason.
 
### 10.6 Design principle
 
Captures are never gated for active plans. The moment a paying or trialing user hits a save limit, they stop trusting Nook as their second brain. The billable expensive part (AI generation) is what governs the Pro price, not the storage of the user's own content.
 
## 11. Success metrics
 
Three tiers of measurement for the first six months.
 
**Activation:**
 
- Percentage of new users who capture 10 or more nooks in their first 7 days.
- Percentage who ask their first question within 14 days (during trial).
- Trial-to-paid conversion rate.
**Engagement:**
 
- Captures per weekly active user per week.
- Asks per weekly active user per week.
- Percentage of asks that result in the user opening a cited nook (proxy for answer quality).
**Retention:**
 
- Week 4 retention of users who captured 10 or more nooks in week 1.
- Week 12 retention of the same cohort.
- Pro subscriber month-over-month churn.
**North Star candidate:** weekly asks per active user. This is the moment Nook delivers its unique value, and it grows only when both capture (input) and trust in retrieval (output) are working.
 
## 12. Out of scope for v1 (consolidated)
 
- Team workspaces, sharing, collaboration.
- Public sharing or social features.
- User-managed folders, tags, or collections.
- Favorites, pins, archive state.
- Rich text editing of captured content.
- PDF and arbitrary file uploads.
- Instagram, TikTok, podcast capture.
- Voice note transcription.
- Offline mode.
- Proactive resurfacing of any kind (weekly digests, "on this day", related nooks on a nook detail view, etc.).
- Conversational multi-turn asks.
- Note-adding at moment of capture (deferred; notes added post-capture from webapp or mobile).
- iMessage channel (deferred to v1.1).
- Safari extension (deferred to v1.1).
- Permanent free tier.
- Student pricing tier.
## 13. Resolved decisions
 
The following decisions were open during earlier PRD drafts and are now settled.
 
- **Monetization model:** 14-day free trial with no card at signup, then Pro at $8/month or $72/year. No permanent free tier. No student tier in v1.
- **Messaging channels in v1:** WhatsApp only. iMessage moved to v1.1.
- **AI summary generation:** lazy. Summaries are generated on first view of a nook, not eagerly at capture time. This keeps capture fast and cheap; the small latency on first view is acceptable.
- **Expired plan behavior:** read-only. Existing nooks remain browsable and searchable via webapp, mobile, and MCP read tools. Capture and AI features are gated.
- **Content retention promise:** nooks are the user's forever, on any plan state including expired. Captured content is never deleted for downgrade, expiry, or inactivity. Stated explicitly to users as a trust commitment.
- **Paywalled or login-walled URLs:** capture whatever content is available. If extraction returns only a login page or partial content, the nook is still saved with whatever was retrieved (title, URL, any accessible metadata) rather than refused. The user chose to save it; Nook honors that.
- **Source page changes or death:** a nook is a permanent snapshot. Nook does not re-fetch source URLs after capture. What was captured at capture time is what the user has forever, even if the original page changes, moves, or disappears.

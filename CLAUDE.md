# DM Tuition — Project Context for Claude

This file is auto-loaded at the start of every Claude Code session. Read it
fully before making changes. **Section "Guardrails" contains hard rules.**

## Snapshot
DM Tuition is a newly launched (2026) tutoring service run by two high-achieving
Year 12 students at Altrincham Grammar School for Boys (AGSB) — Daniel Stevenson
and Mazin Elma. It offers GCSE tuition across every subject plus 11+ preparation,
taught by students who recently sat these exact exams and scored top grades.
Core promise: **"we only tutor the subjects we scored a grade 9 in."** Sessions
are £15/hour with a free, no-commitment intro session, delivered online
(preferred) or in person around Altrincham, Sale, Timperley and the wider
Trafford area. Tagline: **Focus · Prepare · Perform.**

## Founders / lead tutors
- **Daniel Stevenson — Co-founder.** AGSB Year 12. A-Levels: Maths, Further
  Maths, Physics, Economics. GCSE grade 9s in the subjects he tutors (maths,
  sciences, economics). Smart, charismatic, friendly. Senior prefect; football,
  cricket, founded the volleyball club, runs the finance society. Aiming for
  engineering at a top university, then finance.
- **Mazin Elma — Co-founder.** AGSB Year 12. A-Levels: Further Maths, Physics,
  Economics. GCSE grade 8s and 9s. Top 2% British Physics Olympiad; work
  experience at EY. Funny, great at teaching, relatable. (Fuller bio to come.)

## Tutor network
A network of high-achieving AGSB students enabling near-constant availability and
near-total subject coverage. Every tutor passed the 11+, got top grades, and only
teaches subjects they scored a grade 9 in.

## Subjects & boards
GCSE (every subject) + 11+. Dedicated pages: Maths, Further Maths, Physics,
Chemistry, Biology, English, Economics, Geography, History, Computer Science,
Languages, PE (Theory), RS, Electronics. Specialisms: maths, sciences, economics.
Strongest on AQA; confident across Edexcel/OCR.

## Pricing, sessions & payment
- £15/hour flat, no hidden fees.
- Free intro session, no payment details, no obligation.
- Length: from 1 hour; can be longer, not shorter.
- Payment: bank transfer, after the free intro once happy.
- Cancellation: ~24 hours' notice requested. No commitment; session-by-session.

## Availability & delivery
- Almost any time, any day (the team means another tutor is usually free).
- Online preferred (Zoom / Microsoft Teams); also in person.
- Year groups: GCSE Years 9–11; 11+ Years 4–5.

## Location
Founders based in Timperley, operating across Trafford. In person around
Altrincham, Sale, Timperley; online nationwide. Marketed areas: Altrincham, Hale,
Bowdon, Timperley, Sale, wider Trafford / South Manchester.

## 11+ preparation
Every tutor passed the 11+ (AGSB). Target schools: AGSB, Altrincham Grammar School
for Girls, Sale Grammar, Loreto Grammar, Stretford Grammar, Urmston Grammar, and
other Trafford / Greater Manchester selective & independent schools. Formats:
GL / CEM style + school-specific. Skills: verbal reasoning, non-verbal reasoning,
maths, English/comprehension.

## Contact
- Email: DMtuition@gmail.com
- Phone / WhatsApp: 07467 284 353
- Instagram: @dmtuition2026 · Facebook: DM Tuition
- Website: dm-tuition.github.io/9 (GitHub Pages; repo `dm-tuition/9`, from `main`)

## Brand & visual identity
- **Palette (official):** dark navy, medium blue, light blue, grey/silver.
  **No gold.** (Live site still has some gold accents — pending re-skin.)
- **Logo:** circular navy emblem, "DM" monogram over an open book. File
  `logo.jpg`. Keep the real logo — bespoke alternatives were rejected.
- **Typography:** Cormorant Garamond (serif headings), Outfit (sans body).
- **Aesthetic:** dark, premium, modern/"futuristic" with tasteful animation
  (particle hero, aurora gradients, glow, scroll-reveal, count-up, tilt cards,
  scroll-progress bar, subject-specific animated backgrounds). All motion
  respects `prefers-reduced-motion`.

## What's been built (structure & tech)
- Static site on GitHub Pages (repo `dm-tuition/9`), served from `main`.
- Shared `style.css` and `script.js` across all pages.
- Homepage (`index.html`): hero, ticker, trust bar, about, subjects grid (every
  card links to its subject page), how-it-works, testimonials, pricing, contact
  form, footer.
- Pages: 14 subject pages + `11-plus`, `tutors`, `faq`, `thank-you`.
- **Form:** Formspree (endpoint `f/xbdbqyae`); fields `name`, `phone`,
  `_replyto`, `subject_area`, `year_group`, `message`; AJAX with
  `Accept: application/json`; in-page success; `_next` → `thank-you.html`.
- **SEO:** meta descriptions, Open Graph + Twitter cards, favicon (logo.jpg),
  JSON-LD (EducationalOrganization/LocalBusiness, Course per subject, FAQPage).

## Guardrails (IMPORTANT — hard rules)
- **No fabricated track record.** New business — never invent years of
  experience, student numbers, or pass rates.
- **Grades must be accurate.** Do NOT claim "Daniel got 8 grade 9s." Use:
  "we only teach the subjects we scored a grade 9 in."
- **Testimonials:** treat any testimonials in the markup as not-yet-verified
  sample copy. Do not present them as genuine reviews until real ones are
  supplied; replace or remove on request.
- **DBS:** only the lead tutor is checked — don't over-claim that all tutors are
  DBS-checked.
- **Don't break the enquiry form** — never change the Formspree endpoint, field
  `name`s, or `_next` redirect carelessly.
- **Keep every claim defensible** and aligned to the navy/blue brand (no gold in
  final assets).

## Roadmap / to-dos
- Re-skin site gold → navy/blue palette.
- Replace/remove sample testimonials once real ones exist.
- Add real tutor headshots & study photos (with rights).
- Expand Mazin's bio.
- Define the three pricing tiers properly.
- Optionally optimise the large inline homepage images.

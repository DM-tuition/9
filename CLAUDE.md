# DM Tuition — Project Context for Claude

This file is auto-loaded at the start of every Claude Code session. Read it
fully before making changes. **Section "Guardrails" contains hard rules.**

## Snapshot
DM Tuition is a newly launched (2026) tutoring service run by two high-achieving
Year 12 students at Altrincham Grammar School for Boys (AGSB) — Daniel Stevenson
and Mazin Elma. **Starting small and deliberately focused:** it offers GCSE
tuition only in the subjects the founders are studying at A-Level and scored top
grades in — **Maths, Further Maths, Physics, Economics** — plus 11+ preparation.
Core promise: **"we only tutor the subjects we scored a grade 9 in."** Every
lesson is tailored to the individual student — prepped around what they're
struggling with, working through hard exam questions and teaching exam technique.
Sessions are £15/hour with a free, no-commitment intro session, delivered online
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

## Tutor network (future, not yet)
The long-term plan is a network of high-achieving AGSB students for wider
availability and subject coverage. **For now the site does NOT claim this** —
it's just Daniel and Mazin tutoring the subjects they personally excel in. Start
small, prove it, then grow. Do not re-add "network"/"every subject" claims.

## Subjects & boards
**Focused offering: GCSE Maths, Further Maths, Physics, Economics + 11+ only.**
These are the subjects the founders study at A-Level and scored top grades in.
Dedicated pages: `maths`, `further-maths`, `physics`, `economics`, `11-plus`.
(The 10 other GCSE subject pages were removed — start small, expand only when a
tutor genuinely excels in the subject.) Strongest on AQA; confident across
Edexcel/OCR.

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
- Homepage (`index.html`): hero, ticker, trust bar, about (tailoring/exam-technique
  focus), subjects grid (4 subjects + 11+), how-it-works, pricing, contact form,
  footer. **Testimonials section was removed** — no reviews until real ones exist.
- Pages: 4 subject pages (`maths`, `further-maths`, `physics`, `economics`) +
  `11-plus`, `tutors`, `faq`, `thank-you`.
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
- **Testimonials:** none on the site (the placeholder reviews were removed). Do
  NOT add any until the founders supply real, verified ones.
- **Only offer subjects the founders genuinely excel in** (currently Maths,
  Further Maths, Physics, Economics + 11+). Don't pad the subject list or imply a
  tutor network until it actually exists. Start small.
- **Lead with tailoring:** lessons are personalised to each student's weak spots,
  with exam-question practice and exam technique — keep this front and centre.
- **DBS:** only the lead tutor is checked — don't over-claim that all tutors are
  DBS-checked.
- **Don't break the enquiry form** — never change the Formspree endpoint, field
  `name`s, or `_next` redirect carelessly.
- **Keep every claim defensible** and aligned to the navy/blue brand (no gold in
  final assets).

## Roadmap / to-dos
- Re-skin site gold → navy/blue palette.
- Add real testimonials once the first clients provide them (none on site now).
- Expand the subject list only as more tutors who genuinely excel come on board.
- Add real tutor headshots & study photos (with rights).
- Expand Mazin's bio.
- Refine pricing/quotes once there's real client experience to base them on.
- Optionally optimise the large inline homepage images.

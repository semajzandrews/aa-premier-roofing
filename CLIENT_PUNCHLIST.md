# AA Premier Roofing — Pre-Launch Punch List

The front end is a complete, sale-in-hand demo. Everything below is **real-client data to confirm/supply before going live**. Nothing here blocks showing the demo. Items are honest placeholders, not invented facts.

## Update (07-03-2026, round 2) — old-site parity + cross-browser fixes, deployed
- DONE: **Safari nav overlap fixed.** The brand tagline was colliding with the nav links at ~1370px windows; the nav now sheds the tagline (≤1400px) and the phone number (≤1080px) before anything can collide.
- DONE: **Service-area map fixed.** The embed was geocoding "Dallas–Fort Worth metroplex" to a world view; it now centers on DFW via coordinates.
- DONE: **Legal pages** (privacy.html, terms.html, accessibility.html), styled in-system, linked in the footer. Honest generic content, no invented facts. Old site's "Refund Policy" was a Wix template artifact and intentionally skipped: refunds/warranty belong in their written contract.
- DONE: **Blog** at /blog/ with two real DFW guides (hail-claim walkthrough, replace-vs-repair) with Article JSON-LD, linked in footer as "Roofing guides". Replaces the old Wix filler blog. OFFER: monthly guide as a content add-on.
- DONE: **Online-booking hook (dormant).** Set `data-booking-url` on `<body>` (index.html) to a Cal.com (free) or Calendly scheduling link and "Book a time online" buttons appear in the hero, storm card, and lead form automatically. NEEDS: owners to create the scheduling account with their 4 service types; until then the lead form with preferred day/time covers the intent.

## Update (07-03-2026) — pre-send polish pass, deployed to production
- DONE: **Booking parity with their old Wix site.** Lead form now has optional "Preferred day" + "Best time" fields (covers the Wix Bookings pick-a-date intent), and the service dropdown now includes **Holiday lighting** and **Junk removal** (both were bookable services on their old site). Webhook payload now posts `{name, phone, email, address, service, preferredDate, preferredTime, message, source, submittedAt}`.
- DONE: **Mobile sticky action bar** (Call now + Free inspection) slides in after the hero on phones, where the nav phone/CTA collapse behind the burger.
- DONE: **Roof-anatomy stage enlarged** (cropped SVG dead space, un-overlapped the numbered pins, ambient patina aura) — reads much bigger on both desktop and mobile.
- DONE: **SEO layer**: RoofingContractor JSON-LD (honest fields only — no address/hours/license until confirmed), canonical + og:url/og:image/twitter card. NOTE: absolute URLs point at aa-premier-roofing.vercel.app — **swap to the final domain at cutover** (marked with a comment in index.html `<head>`).
- DONE: **Perf**: below-fold images lazy-load; phones get the 0.5MB hero video instead of 5MB; Save-Data users get the poster.

## Recon update (07-01-2026) — folded in from their live site
- DONE: **Real before/after slider** using their own home transformation (roof + exterior). Ask Anthony & Ashton for MORE before/after pairs and I'll add them.
- DONE: **Real owner/crew photo** in the story section (pulled from their site). Confirm it's OK to use and send a higher-res copy if they have one.
- CONFIRM: **Socials.** Their current site's social icons are unconfigured Wix template defaults (they point to @wix, not them). Ours link Instagram @aaconsultingtx + a Facebook page found via search. Have them confirm those are really theirs, or I omit them.
- CONTEXT: their live site is a near-stock Wix "general contracting" template. Only real interactive feature was Wix Bookings (pick a service + time). Our lead form covers that intent; can add a "preferred time" field to match it exactly. Their portfolio + blog were template filler (skipped).

## Must confirm (accuracy / trust)
1. **Reviews** — the 3 testimonials are clearly-marked SAMPLES (Marcus T./Plano, Denise R./Fort Worth, James & Carla/McKinney). Replace with real Google/Facebook reviews (name + quote + city). Section is built to hold real ones as-is.
2. **Credentials** — the badges claim "Licensed & Insured" and "Workmanship Warranty." Confirm both are accurate and add the real license #, insurance, and warranty terms. Remove/adjust any that don't apply.
3. **Manufacturer certifications** — if they're a certified installer (GAF, Owens Corning, CertainTeed, etc.), we can add a real certifications row. Do NOT claim any that aren't real.
4. **Owner roles/relationship** — Anthony & Ashton are both labeled "Owner." Confirm titles / whether they're brothers/partners so we can make the story copy specific.
5. **Service-area cities** — confirm the DFW city list is accurate to where they actually work.
6. **Business hours** — not shown yet; add if they want them.

## Supply (assets)
7. **Real photos** — swap stock for AA Premier's own job photos. Priority: `inspection.jpg` (the stock shows another company's shirt logo), `hero-poster.jpg` / hero video, `crew.jpg`, the gallery, and a real Anthony & Ashton / team photo for the story section. Their real before/after job shots are the single biggest credibility upgrade.
8. **Real Google Business Profile URL** — the "Read reviews on Google" button currently points to a Google search; swap for their GBP link.

## Wire up (functionality)
9. **CRM / lead routing** — set `data-crm-endpoint` on `#leadForm` (in index.html) to a webhook:
   - JobNimbus / AccuLynx: use their inbound-lead webhook or a Zapier "Catch Hook."
   - Or Formspree/email fallback if they don't use a CRM yet.
   - Payload posted as JSON: `{name, phone, email, address, service, message, source, submittedAt}`.
   - Also update the notification email / where same-day-callback alerts land.
10. **Map** — the service-area map uses the keyless Google `output=embed` (renders blank only in the preview sandbox). Verify it renders in a real browser before the demo; optionally re-center on their exact base if they want a pin.
11. **Domain + deploy** — decide canonical domain (aapremierroofing.com vs aaconsultingtx.com), then deploy the static site.

## Nice-to-have
12. **Spanish version** — large DFW Latino market. Offer a professionally-translated ES toggle as an add-on. Do NOT machine-translate.
13. **Financing** — reference research shows financing offers convert; add a real financing line if they offer it.

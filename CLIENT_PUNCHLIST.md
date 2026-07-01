# AA Premier Roofing — Pre-Launch Punch List

The front end is a complete, sale-in-hand demo. Everything below is **real-client data to confirm/supply before going live**. Nothing here blocks showing the demo. Items are honest placeholders, not invented facts.

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

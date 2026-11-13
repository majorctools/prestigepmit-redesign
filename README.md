# Prestige PMIT clickable redesign

Open `index.html` in a browser. All pages, fonts and images are local; no server or framework is required.

## Pages
- `index.html`: homepage, proof rail, seven specialties, price bands, local-service preview and author/reviewer strip.
- `behavioral-health.html`: behavioral health billing service page.
- `towson.html`: Towson service-area page with named communities, Maryland onboarding, pricing and six FAQs.

## Reference direction
- Demophorius, https://demophorius.com/ (Awwwards SOTD): direct healthcare communication, one strong subject and restrained content framing. Its desktop/mobile structure capture showed clear full-width bands and a strong footer; the prototype keeps that clarity but deliberately avoids the reference’s measured mobile overflow.
- Wembi, https://www.wembi.ai/ (Awwwards SOTD): decisive type scale, compact navigation and clear visual hierarchy. Its palette and 3D imagery were not copied.
- Sinedogma / Dogma Yayın, https://sinedogma.com.tr/ (Awwwards Nominee): editorial serif/sans hierarchy and typography-led restraint. The Prestige build retains its own Oswald/Poppins brand system.

## Audit fixes
| Audit finding | Mockup response |
| --- | --- |
| Hero image loads as a late CSS background | Real local `<img>` with dimensions, preload and `fetchpriority="high"`; no framework or third-party scripts |
| No prices anywhere | Visible percentage-of-collections bands and scoped audit pricing, prominently marked illustrative until confirmed |
| Articles use a phone number instead of an author | Krystle Brown named for business review; coding/compliance reviewer slots explicitly await real names and credentials |
| Town pages swap names without local detail | Towson page names six communities, includes Maryland Medicaid/ePREP onboarding, local pricing and six specific FAQs |
| Missing specialty pages | Dedicated behavioral health page linked from the homepage specialty index |
| Strong credentials sit unused | HBMA, 13 years, 80+ staff and 4.4 from 345 reviews appear immediately below the hero |

## Illustrative or replacement assets
- Every price band is a design placeholder, not an approved Prestige rate or quote.
- Coding and compliance reviewer names and credentials must be supplied.
- The logo and photographs come from the existing Prestige website. The homepage hero uses an existing revenue-cycle flat lay; the behavioral page uses an existing consultation image, and its reviewer byline uses the cropped founder portrait. Production should replace these with original full-resolution assets if available.
- All calls use the existing `(410) 835-0009` number. No contact form or fake submission is included.

## Verification
- `node verify.cjs`: renders all pages at 1280×800 and 390×844, plus homepage at 1920×1080; writes screenshots and `screenshots/verification.json`.
- Final measured checks: no page-level horizontal overflow, no JavaScript errors, all images loaded, mobile menus opened, and the Towson FAQ opened.
- Hallmark static sweep: clean after fixes.
- Independent hero review: `ship`, no actionable findings.
- Independent finish review: `ship`, no actionable findings; no before screenshots were supplied for an old-versus-new comparison.

## Open Design status
Open Design was launched and the registered Hermes bridge was confirmed in `hermes mcp list`. This existing chat session did not expose `mcp__opendesign` tools, and the desktop process presented no capturable window to the GUI driver. No Open Design generation is claimed; the design DNA was implemented directly in the HTML/CSS token system.

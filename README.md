# Prestige PMIT clickable redesign

Open `index.html` in a browser. All pages, fonts and images are local; no server or framework is required.

## Pages
- `index.html`: homepage, proof rail, seven specialties, price bands, local-service preview and author/reviewer strip.
- `behavioral-health.html`: behavioral health billing service page.
- `towson.html`: Towson service-area page with named communities, Maryland onboarding, pricing and six FAQs.

## Reference direction
- Demophorius, https://demophorius.com/ (Awwwards SOTD): direct healthcare communication and restrained framing. Its desktop/mobile structure capture showed clear full-width bands and a strong footer; the prototype deliberately avoids the reference’s measured mobile overflow.
- Health+, https://www.healthplus.cz/en/home (Awwwards Honorable Mention): a committed dark color field, oversized two-part headline and clean left/right hero tension.
- Institute of Health, https://www.instituteofhealth.com/ (Awwwards Honorable Mention): one decisive, tightly cropped clinical image and a stacked credential rhythm rather than decorative healthcare graphics.
- Significo, https://www.significo.com (Awwwards SOTD): poster-scale typography as the main visual event. Prestige retains its own Oswald/Poppins system and green palette.

## Visual direction
Open Design’s **Editorial — Monocle / FT magazine** direction informed the v2 structure: print-like scale contrast, no rounded-card language, fine rules, one decisive image, and whitespace doing the structural work. Open Design’s artifact linter reports 0 P0, 0 P1 and 0 P2 findings on all three pages.

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
- Open Design artifact linter: 0 P0, 0 P1, 0 P2 on all three pages.
- Independent hero review: `fix`; 12 of 13 combined review findings resolved. The remaining partial is the stock desk image, which should be replaced with an owner-supplied team, office or HBMA certificate photo.
- Independent finish review: `fix`; copy, pricing spans, phone URIs, reviewer strip, fold height and heading specificity corrected.

## Open Design status
Open Design’s local daemon was run headlessly and the project was imported through its MCP tools. Its editorial direction and artifact linter were used. The bundled AI agents were not used: Codex authentication failed, and the available Qwen runtime launches with `--yolo` and no sandbox, which violates the project rule against unsandboxed coding agents.

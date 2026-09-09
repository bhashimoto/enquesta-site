# Handoff: Site Enquesta — Inspeção Periódica de Gás (RJ)

## Overview
Site comercial da Enquesta (inspeção/vistoria de gás predial no Rio de Janeiro). Três páginas: a home/landing principal (foco em SEO/conversão para "inspeção periódica de gás RJ"), uma página local para Barra da Tijuca/Zona Oeste, e uma página de orientação para quem recebeu notificação da Naturgy.

## About the Design Files
The files in `reference/` are **design references**, not production code — they were authored in an internal prototyping tool (custom `{{ }}` template syntax, `<sc-for>`/`<sc-if>` loop/conditional tags, `<image-slot>` placeholder web component). **Do not copy this markup verbatim.** Recreate the visual design and content structure in the target codebase's actual framework (React, Vue, plain HTML, etc. — whichever the project already uses; pick React if starting fresh) using its existing component/styling conventions.

## Fidelity
**High-fidelity.** Colors, typography, spacing and copy are final/near-final. Photography is a placeholder (striped/labeled box) — real photos need to be dropped in later. WhatsApp phone number is a placeholder (`5521900000000`) — replace with the real number.

## Screens / Views

### 1. Home (`Home.dc.html`) — main landing / SEO page
- Sticky header: logo "ENQUESTA" left, nav links (O que é, Verificações, Barra da Tijuca, Notificação Naturgy, FAQ) center, "Agendar pelo WhatsApp" primary button right.
- Hero: eyebrow tag "Organismo de Inspeção Acreditado CGCRE/Inmetro", H1 "Inspeção Periódica de Gás no Rio de Janeiro", supporting paragraph, two CTAs (primary "Agendar minha inspeção", secondary "Falar pelo WhatsApp"), duotoned photo placeholder on the right (4:3).
- "O que é a Inspeção Periódica de Gás?" — explanatory text citing Lei Estadual 6.890/2014.
- "Quem precisa passar pela Inspeção Periódica de Gás?" — 5-year cycle explanation + CTA link.
- Dark plate section (accent-900 background, reversed white text): "Quem pode realizar" credentials — 3 spec cells: Fundação 2019, Registro CREA-RJ 2019200638, CNPJ 33.519.767/0001-80.
- "O que é verificado" — 4-column grid of 8 checklist cards (tubulações, estanqueidade, aparelhos, ventilação, exaustão/chaminés, combustão, monóxido de carbono, demais requisitos).
- "Irregularidades" section + a highlighted card: "reinspeção incluída no valor contratado".
- "Regiões atendidas" — 2 cards: Barra da Tijuca/Zona Oeste (links to page 2), Zona Sul (WhatsApp CTA); Zona Sul card is conditionally shown (a content toggle).
- Naturgy notification banner card → links to page 3.
- "Por que a Enquesta" — 2-column bullet list, 5 reasons.
- FAQ — 4 native `<details>` accordions.
- Closing dark CTA plate: headline, WhatsApp buttons, address line.
- Footer: copyright + accreditation line.

### 2. Barra da Tijuca (`Inspecao-Gas-Barra-da-Tijuca.dc.html`)
- Same header pattern (nav adjusted, no "O que é"/"Verificações" anchors — links back to Home's).
- Hero: "Inspeção de Gás na Barra da Tijuca e Zona Oeste" + photo placeholder.
- Address block (Av. Embaixador Abelardo Bueno, 1340 – sala 401, Barra da Tijuca).
- 3-column grid of neighborhood cards (Barra da Tijuca, Recreio dos Bandeirantes, Jacarepaguá, Vargem Grande/Vargem Pequena).
- Closing dark CTA plate.

### 3. Recebi Notificação Naturgy (`Recebi-Notificacao-Naturgy.dc.html`)
- Same header pattern.
- Narrow (780px) hero: "Recebeu uma notificação sobre a Inspeção de Gás?" + urgency copy + WhatsApp CTA.
- 3 numbered step cards (1. Verifique o prazo, 2. Agende com Organismo Acreditado, 3. Corrija pendências / reinspeção).
- Callout card: reinspeção deve seguir com o mesmo Organismo da primeira inspeção.
- Closing dark CTA plate.

## Interactions & Behavior
- All WhatsApp buttons link to `https://wa.me/<digits>` (opens in new tab). Number is a single placeholder value reused everywhere — should become one config value in the app.
- FAQ items are native disclosure widgets (`<details>/<summary>`) — no JS needed, just semantic HTML.
- Nav anchor links (`#o-que-e`, `#verificacoes`, `#faq`) scroll within the Home page.
- No form inputs, modals or client-side validation on these pages — pure marketing content driving to WhatsApp.
- Responsive: below 720px, all grids collapse to 1 column and the H1 reduces to ~32px.

## Design Tokens (Industry design system — see `reference/design-system/`)
- Background: `#f2f2f3`. Surface: `#e9e9ea`. Text: `#1d1f20`.
- Accent (single hue, steel blue): base `#5980a6`; ramp 100→900 from `#eef6ff` to `#1d2d3d`. Dark "plate" sections use `--color-accent-900` (`#1d2d3d`) as background with `--color-bg` text.
- Divider: `color-mix(in srgb, #1d1f20 16%, transparent)`.
- Type: headings in "Barlow Condensed" (weight 600), body in "Barlow" (400). Scale: h1 42px (48px on hero), h2 32px, h3 25px, h4 20px, h6 13px uppercase/letter-spaced (used as eyebrow labels).
- Spacing scale (0.85× density): 3.4 / 6.8 / 10.2 / 13.6 / 20.4 / 27.2px (`--space-1..8`).
- Radius: 4px default; this design uses **square corners everywhere** (radius overridden to 0 on cards/buttons/inputs) — a deliberate "blueprint"/technical look.
- Buttons: `.btn-primary` = solid accent fill, `.btn-secondary` = 1px divider-color outline. No rounded corners.
- Cards: transparent background, 1px hairline border (`--color-divider`), no shadow, square corners. (An earlier draft added "+" crosshair corner marks per the base design system's card style; the user asked to remove them — final cards are plain hairline-bordered boxes.)
- Photos: wrapped in a `.duotone` treatment — a `mix-blend-mode: color` accent wash over the image, inside a square hairline frame.

## Assets
- No real photography yet — hero and region images are placeholder boxes labeled with what should go there (e.g. "Foto: técnico realizando inspeção de gás"). Replace with real photos, kept inside a square frame with the accent duotone wash if following the system as-is, or plain if the target app drops that treatment.
- No logo file — brand is currently wordmark-only ("ENQUESTA" in Barlow Condensed). If a logo exists, swap it into the header.

## Content notes / data still pending
- WhatsApp number, and general contact (phone/email) are placeholders — insert real values.
- Company credentials shown (fundação 2019, CREA-RJ 2019200638, CNPJ 33.519.767/0001-80) were confirmed by the client; do not add unconfirmed claims (e.g. "+10.000 inspeções", ABRAIPE membership) without verifying first — the original content brief flagged these as unverified.
- No client testimonials are included by design decision (no verified testimonials available yet).

## Files
- `reference/Home.dc.html` — home/landing page
- `reference/Inspecao-Gas-Barra-da-Tijuca.dc.html` — Barra da Tijuca / Zona Oeste page
- `reference/Recebi-Notificacao-Naturgy.dc.html` — Naturgy notification guidance page
- `reference/design-system/styles.css` — full token sheet + component CSS classes referenced above
- `reference/design-system/readme.md` — design system usage guide

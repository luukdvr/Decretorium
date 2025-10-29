# Decretorium — Beveiliging & Juridisch

Responsive website met split-hero homepagina en templates voor Beveiliging en Juridisch. Opgezet met Next.js (App Router) + Tailwind CSS. Alle teksten zijn placeholders (Lorem Ipsum) en gemarkeerd waar relevant.

## Snel starten

1. Vereisten: Node.js 18+
2. Installeer dependencies

```cmd
npm install
```

3. Start de dev server

```cmd
npm run dev
```

4. Open http://localhost:3000

## Content en CMS-ready structuur

Project gebruikt Markdown-bestanden als eenvoudige headless CMS-laag:

- `content/services/*.md` — beveiligingsdiensten (slug, title, image, intro, content)
- `content/blogs/*.md` — blogs (slug, title, date, image, content)

Gebruik frontmatter in elk bestand, bijvoorbeeld:

```md
---
slug: winkelbeveiliging
title: Winkelbeveiliging
image: foto_winkel_winkelbeveiliging.png
intro: Lorem ipsum...
---

Volledige tekst in Markdown of plain text...
```

Als content ontbreekt, wordt automatisch Lorem Ipsum getoond met een badge “Placeholder: voeg tekst toe”.

### Koppeling naar CMS (WordPress/Webflow)

- WordPress: vervang file-based loaders in `lib/content.ts` door fetch naar WP REST API of GraphQL. Bewaar dezelfde datastructuren (`Service`, `Blog`).
- Webflow: gebruik de Webflow CMS API om collecties te lezen en mappen naar dezelfde interfaces.
- Tip: maak `.env.local` met API keys en implementeer fetch in server componenten.

## Assets en afbeeldingen

- Plaats alle aangeleverde foto’s in `public/assets/` met exact de bestandsnamen van de klant. Voorbeelden staan in `public/assets/README.txt`.
- Component `components/Picture.tsx` rendert responsive `<picture>` met optionele `.webp` fallback en lazy-loading.
- Alt-tekst wordt automatisch afgeleid uit de bestandsnaam (underscores/shorttags worden leesbaar gemaakt). Je kunt een `altOverride` meegeven.
- Als een afbeelding ontbreekt, toont de site een nette placeholder.

> Let op: de oorspronkelijke map “Documenten en foto's” kan je voor archief gebruiken, maar Next.js serveert alleen bestanden vanuit `public/`. Kopieer dus assets naar `public/assets/`.

## Navigatie en routes

- `/` — Home met split hero (Beveiliging/Juridisch)
- `/beveiliging` — Thematische pagina met secties (intro, MVO, diensten, blogs, contact)
- `/juridisch` — Zelfde template; geen losse dienstpagina’s, enkel tekstblok
- `/over`, `/mvo` — Over/MVO pagina’s
- `/diensten` — Overzicht; Beveiliging lijst + Juridisch tekstblok
- `/diensten/[slug]` — Detailpagina voor elke beveiligingsdienst
- `/blogs`, `/blogs/[slug]` — Blogs overzicht & detail
- `/contact` — Contactformulier met frontend validatie en serverless POST handler (`/api/contact`). Backend is een placeholder; koppel hier een mailprovider of CMS-webhook.

## Design tokens & stijl

- Tailwind + CSS-variabelen voor primaire en accentkleuren. Variabelen staan in `app/globals.css`.
- Update de kleuren na extractie uit `public/assets/logo decretorium.jpeg`.
- Typografie: system sans-serif, voldoende contrast (WCAG AA) en toegankelijke knoppen/links.

## Toegankelijkheid

- Semantische tags (`header`, `nav`, `main`, `footer`)
- Alt-tekst automatisch op basis van bestandsnaam
- Keyboard-navigatie en focus-stijlen op CTA’s
- ARIA labels in navigatie en formulieren

## Hoe teksten en blogs te vervangen

1. Vervang Markdown-bestanden in `content/`.
2. Upload/plaats afbeeldingen in `public/assets/` en verwijs ernaar via `image:` in frontmatter of via component props.
3. Pas de pagina-secties aan of koppel een extern CMS via `lib/content.ts`.

## Notes voor ontwikkelaar

- Code is opgezet met server components. Content-helpers lezen Markdown op de server.
- `components/Picture.tsx` controleert op buildtime of een asset bestaat en toont anders een placeholder.
- Voor echte e-mailafhandeling: vervang `app/api/contact/route.ts` door integratie met Postmark/Sendgrid/Mailgun of CMS-webhook.

## License

Private project voor Decretorium.

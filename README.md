# Sabiosphere — Landing Page

Marketing landing page for Sabiosphere, a luxury interior design and architecture studio. Built with React + Vite, SCSS modules and Framer Motion.

## Stack

- React 19 + Vite
- SCSS (one module per component, no global leakage)
- Framer Motion for scroll-triggered and entrance animations

## Content

All copy, images and contact details live in [`src/data/mockData.json`](src/data/mockData.json). Nothing is hardcoded in components — to update the site for the real client, edit that file only:

- `brand` — studio name, tagline, founder
- `nav` — header links + CTA label
- `hero` / `about` / `services` / `process` / `stats` / `projects` / `testimonials` / `cta` / `contact` / `footer`

Images currently point to Unsplash placeholders and avatars to `i.pravatar.cc` — swap these `image`/`avatar`/`backgroundImage` URLs for the client's real photography when available.

The contact form has no backend; on submit it opens the visitor's email client via a `mailto:` link addressed to `contact.email` in the JSON. Replace `handleSubmit` in [`src/components/Contact/Contact.jsx`](src/components/Contact/Contact.jsx) with a real API/Formspree call when one is available.

## Development

```bash
npm install
npm run dev      # start local dev server
npm run lint      # eslint
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment

`npm run build` outputs a static `dist/` folder — deployable to any static host:

- **Vercel**: import the repo, framework preset "Vite", build command `npm run build`, output directory `dist`.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **Any static host** (S3, GitHub Pages, etc.): upload the contents of `dist/` after running the build.

No environment variables or server are required.

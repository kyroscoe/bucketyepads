# FH Bonn redesign starter project

This is a complete Next.js starter project for the FH Bonn/Buckeye Pads and Covers redesign.

## What is included

- Next.js app router project
- Tailwind CSS setup
- Homepage
- About page
- Products overview page
- Individual product category pages
- Industries page
- Distributors page
- Resources page
- Contact page
- Request a Quote page
- Current logo asset copied into `public/images/logo-current.png`
- Local SVG placeholder illustrations so the project runs without needing external image downloads

## Start the project

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`

## What you should replace first

1. Update all placeholder copy with the final client-approved content.
2. Replace placeholder SVG category and industry images with actual product photography.
3. Add real distributor data to `/app/distributors/page.tsx`.
4. Hook the quote form to email, Netlify forms, Formspree, Resend, or your CRM.
5. Update metadata and SEO page titles.

## Notes

- This project intentionally keeps the existing logo small so it does not dominate the design.
- The current logo image is included, but you can replace it with a cleaner web version later.
- The site is built to be easy to edit, not to perfectly mirror the current site content.

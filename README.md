# Zach's Coffee!

A scroll-driven, coffee-themed one-page experience built with **Astro**, **GSAP**, and **Webflow Cloud**. Every scene is a hand-drawn inline SVG, animated and choreographed with GSAP as you scroll through the story: waking up to a rough morning, getting the perfect fix, pulling a shot, steaming milk, and finishing with latte art.

Built for the Webflow hackathon on top of the `astro-gsap` starter template and deployed with Webflow Cloud.

## Tech Stack

- **Astro** — component-based static site framework
- **GSAP** (`^3.15`) — all animation and scroll choreography, including Club GSAP plugins that are now free thanks to Webflow
- **webcoreui** — Webflow's Web Core design system (used for cards, buttons, and global styles)
- **Inline SVG** — every scene is hand-drawn in Affinity Designer and exported as an inline SVG, then animated with GSAP
- **Webflow Cloud** — hosting & deployment

## Commands

All commands are run from the root of the project:

| Command                   | Action                                      |
| :------------------------ | :------------------------------------------ |
| `npm install`             | Installs dependencies                       |
| `npm run dev`             | Starts local dev server at `localhost:4321` |
| `npm run build`           | Build your production site to `./dist/`     |
| `npm run preview`         | Preview the production build locally        |
| `npm run astro ...`       | Run CLI commands like `astro add`           |

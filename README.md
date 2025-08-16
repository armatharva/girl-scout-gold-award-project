# MenstruationEdu — Girl Scouts Gold Award Project

A simple, youth-friendly multi-page website about menstruation, products, hygiene, and body basics.  
Designed from a Figma concept and built with plain HTML/CSS so it deploys perfectly on GitHub Pages.

## Live Site
Once GitHub Pages is enabled, your site will be at:
`https://<your-username>.github.io/<your-repo>/`

## Pages
- `index.html` — Home / overview
- `video.html` — Pad application demo + step-by-step instructions
- `products.html` — Pads, tampons, cups, and period underwear (pros/cons)
- `hygiene.html` — Hygiene tips
- `cleanliness.html` — Why cleanliness matters
- `reproductive.html` — Reproductive system basics
- `qa.html` — Q&A (expandable FAQ)
- `myths.html` — Myths vs facts

## Assets
- `style.css` — Shared styles (Figma-inspired)
- `gold-award.png` — Girl Scouts Gold Award badge (shown bottom-right on every page)
- `video.mp4` — Your demo video file (referenced by `video.html`)
- Optional images (e.g., `reproductive-diagram.png`) go in the repo root or an `assets/` folder

> If your image/video filenames differ, update the corresponding `<img src="...">` or `<source src="...">` in the HTML.

## Deploy on GitHub Pages
1. Push all files to your repository’s **main** branch.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = Deploy from a branch** and **Branch = main / root**.
4. Click **Save**. Wait for the “Site is published” banner.
5. Visit your Pages URL.

## Notes
- No contact forms or personal info is included.
- All pages are static (no framework) for reliability and speed.
- Accessibility: the Q&A uses native `<details>`/`<summary>` for keyboard and screen-reader support.

## License
MIT — see `LICENSE`.

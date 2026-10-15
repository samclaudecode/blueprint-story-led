# Story-Led Appeal: a SmartRaise Blueprint

A long-form story page with photos and impact numbers that builds to a donation ask.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/samclaudecode/blueprint-story-led)

A simple campaign site customers edit with [Pages CMS](https://pagescms.org): home page, **donate** and **petition** pages, and a **campaign updates** blog. Built with [Eleventy](https://www.11ty.dev/) (static HTML, no runtime).

## What customers can edit in Pages CMS
| CMS section | What it controls |
|---|---|
| Site settings | Name, logo, brand colour, banner, footer/disclaimer, social links, and the SmartRaise petition and donation forms |
| Campaign updates | Blog posts (title, date, summary, cover image, body) |
| Petition page text / Donate page text | Intro copy above each form |

## Connecting SmartRaise forms
SmartRaise forms are embedded with an iframe. In **Site settings → Petition form / Donation form**, paste the form URL into **Form URL** and adjust **Form height (px)** if it gets cut off. Two advanced options exist: custom embed code (overrides the URL) and a plain link that shows a button instead of embedding.

## Onboarding a new customer
1. Click **Deploy to Netlify** on the Blueprints gallery. Netlify copies this site into the org's GitHub account and deploys it (build command `npm run build`, publish directory `_site`, both set in `netlify.toml`).
2. Optionally add a custom domain in Netlify.
3. Open [app.pagescms.org](https://app.pagescms.org), sign in with GitHub, and add the new repo. Invite the customer to the repo or give them Pages CMS access.
4. Fill in Site settings, paste the SmartRaise form URLs, and publish the first update. Every save redeploys the site.

## Local development
```
npm install
npm start      # http://localhost:8080
npm run build  # outputs _site/
```

## Layout
- `.pages.yml`: the CMS configuration (fields, collections, media folder)
- `src/_data/site.json`: site-wide settings (edited via the CMS)
- `src/updates/*.md`: blog posts
- `src/_includes/`: layouts and the form embed partial
- `src/assets/css/style.css`: styling (brand colour comes from settings)

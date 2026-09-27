# Chance IT Studio site rebuild: handoff

## Goal
Get the phone ringing. chanceitstudio.com becomes a local business site (websites + computer repair first). The old dev portfolio moves to chancecrump.dev. Priority order stays: live clients (TCMVP, SmokeSignal, Twin Rivers), then CIT Studio, then solo projects.

## Repo: `cit` (vanilla HTML/CSS/JS, Cloudflare Pages drag-and-drop)
```
index.html  404.html  robots.txt  sitemap.xml  _redirects  site.webmanifest
css/styles.css   js/main.js
img/ hero.jpg hero.webp og-banner.png favicon.png favicon-32.png apple-touch-icon.png
websites/ computer-repair/ custom-software/ ai-consulting/ pricing/ service-area/ about/ contact/   (each index.html)
```
- All internal links are relative (`websites/`, `../pricing/`). The only exception is 404.html, which uses root links (`/`) because Cloudflare serves it at any URL.
- Header and footer are duplicated in every page. A change to either one has to be made in all 10 files.
- CJ has edited copy directly in the repo since the last batch. **The repo is the source of truth.** Do not regenerate pages from the old `_src/build.py`, because it would overwrite those edits.

## Pending changes CJ asked for
1. **Remove the address everywhere.** Keep "drop-offs by appointment." Check the footer tagline ("Based in Cottage Hills, IL"), the home page schema (`addressLocality`/`postalCode`), meta descriptions, page titles, the OG image text, the /about and /service-area copy, and the contact page note.
2. The hero now reads "right here in the Riverbend" (CJ already changed it). Match the rest of the site to it: page titles, meta descriptions, OG image, and service-area wording.
3. Regenerate `img/og-banner.png` without "Cottage Hills, IL" (see the OG section below).

## Locked decisions
- **Offer order:** websites, computer repair/setup/builds, custom software, AI consulting. No phone or mobile repair mentioned anywhere.
- **Service modes:** drop-off (by appointment), remote, on-site. Flat $50 on-site trip fee, waived for drop-off and remote.
- **Prices:**
  - Websites: one-page $400, up to 5 pages $1,000, extra page $150, redesign same as a new build, hosting and upkeep $35/mo or $400/yr. Existing clients are grandfathered.
  - Repair: diagnostic $50 (waived if the repair is approved), virus/Windows repair $120, data transfer $80, setup $60, tune-up $60, hardware install $50 + parts, Wi-Fi $80, custom PC build $150 + parts.
  - Software: MVP from $2,500, launch from $1,000, features flat-rate per feature.
  - AI assessment: from $250.
- **Phone:** (618) 946-8844. **Email:** chance@chanceitstudio.com.
- **Hours:** Mon, Tue, Thu, Fri 4 to 8 pm. Sat 8 am to 8 pm. Wed and Sun closed (family days; texts still get answered). These must match the Google Business Profile exactly.
- **Service area:** Madison, Jersey, Greene, Macoupin, Calhoun counties; Fairview Heights, O'Fallon; St. Louis, St. Charles, Florissant, Chesterfield MO, West Alton.
- **Voice:** first person, plain, a little dry. No em dashes. No corporate words. Never "we."
- **Contact form:** Web3Forms. The access key is public by design and is already in contact/index.html. Spam protection is a hidden trap field, a 3-second minimum time on the page, and a 30-second cooldown between sends.

## Design system
- **Palette:** paper #fbf6e9, ink #141414, green #00995c, orange #ff6b35, cyan #19d3ff, yellow #ffd23f. No magenta. Colored panels always have black text on top.
- **Type:** Bangers for display, DM Sans for body, Archivo 900 for the C[IT] wordmark.
- **Components:** 3px ink outlines, hard offset shadows, halftone dots, starburst price tags, speech bubbles, tilted case-file cards, full-bleed color bands, and the comic-page services grid with slanted gutters.
- **Hero:** the illustrated portrait (option 2, text removed). The speech bubble must never cover the face.

## Blog decision
There is no blog on the business site for now. The existing posts are for recruiters and belong on chancecrump.dev. `_redirects` sends `/blog/*` to `https://chancecrump.dev/blog/:splat` with a 301. Add a customer-facing help blog later, once 3 or 4 posts exist.

## Launch order
1. Deploy the old portfolio repo to chancecrump.dev, with its `/blog/` folder intact.
2. Deploy `cit` to chanceitstudio.com.
3. Submit the sitemap in Search Console. Add chancecrump.dev as a separate property.
4. Once GBP is verified, set its website field to chanceitstudio.com and send the review link to Shawn, Nikki, and Caleb.

## Google Business Profile
- Created and waiting on verification. It is asking for more photos (bench, a repair in progress, a build, the Twin Rivers site on a phone).
- **Do not finish the $500 ad-credit campaign until the new site is live.** Check the offer's expiration date.

## Next after launch
Rework chancecrump.dev: a portfolio with case studies, a blog shell, and two post templates with prompts. The business-site "help" template will be for customer problems with a price and a CTA. The portfolio "build" template will be for postmortems and architecture writeups for recruiters.

## OG image
1200x630. Paper background with halftone dots. On the left: the C[IT] wordmark, the headline "WEBSITES AND / COMPUTER HELP" in Bangers, a yellow tilted tag, the line "Flat prices, posted up front.", and the phone number in green. On the right: the hero art in a 6px ink frame with an offset shadow. Change the tag from "COTTAGE HILLS, IL" to a Riverbend line.

# chuboi.com

Plain HTML/CSS/JS site, no build step. Hosted free on GitHub Pages.

## Editing

| What | Where |
|---|---|
| Brand partnership cards, gallery order, social follower counts | top of `main.js` |
| Headline, About text, contact email | `index.html` |
| Brand logo strip | the `<section class="brands">` block in `index.html`; logo files in `assets/logos/` (each logo's size is the `height` on its `<img>`) |
| Colours / fonts | top of `styles.css` (`--accent: #ff3300`) |
| Photos | `assets/img/` (keep them ~1600px on the long side, JPG) |

**Adding videos to a work card:** drop an `.mp4` (short, under ~15 MB) in `assets/video/` and add
`video: "assets/video/name.mp4"` to that card in `main.js`. It plays muted on hover.
Set `url` to the real Instagram / TikTok / YouTube post so brands can click through.

## Put it online (one-time, ~10 minutes)

1. Create a free account at github.com, then a **new public repository** called `chuboi.com`.
2. On the empty repo page click **uploading an existing file**, drag in everything inside this
   `CHUBOI.COM` folder (including `CNAME` and `.nojekyll` — on a Mac press `Cmd+Shift+.` in Finder
   to show hidden files), and click **Commit changes**.
3. Repo **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. At your domain registrar's DNS settings for chuboi.com, add:
   - four **A** records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - one **CNAME** record for `www` → `<your-github-username>.github.io`
   - delete any other A / AAAA records on `@` (e.g. a parking page).
5. Back in **Settings → Pages**, the custom domain should show `chuboi.com`. Once the DNS check
   passes (minutes to a few hours), tick **Enforce HTTPS**.

To update later: edit files on github.com (pencil icon) or re-upload them; the site redeploys in ~1 minute.

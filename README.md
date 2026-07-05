# Emily's Pet Grooming

## What's in here

| File | Purpose |
| --- | --- |
| `index.html` | The whole one-page site (hero, about, services, gallery, contact) |
| `assets/css/styles.css` | Warm/spring styling and responsive layout |
| `assets/js/script.js` | Mobile menu, footer year, and the contact form |
| `assets/images/emily_profile_pic.png` | Emily's photo used in the hero |
| `assets/images/gallery/` | Placeholder dog & cat photos for the gallery |
| `CNAME` | Tells GitHub Pages to serve the site at `emilyspetgrooming.com` |
| `.nojekyll` | Ensures GitHub serves all files as-is |

> **Note:** `index.html`, `CNAME`, and `.nojekyll` must stay at the root for
> GitHub Pages to work. Everything else lives under `assets/`.

## Preview locally

Just open `index.html` in a browser, or run a tiny local server:

```powershell
python -m http.server 8000
```

Then visit http://localhost:8000

## Publish with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**,
   choose your `main` branch and the `/ (root)` folder, then **Save**.
4. The site goes live at `https://<username>.github.io/<repo>/` within a minute or two.

### Using the custom domain (emilyspetgrooming.com)

The included `CNAME` file already points at the custom domain. To make it work:

1. At your domain registrar, add these DNS records:
   - Four `A` records for the apex domain pointing to GitHub's IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` pointing to `<username>.github.io`
2. In **Settings → Pages → Custom domain**, confirm `emilyspetgrooming.com`.
3. Enable **Enforce HTTPS** once the certificate is issued.

> Not ready for the custom domain yet? Just delete the `CNAME` file and the
> site will happily live at the free `github.io` address.

## Things to update later

- **Contact email:** the form opens the visitor's email app addressed to
  `hello@emilyspetgrooming.com`. Change `CONTACT_EMAIL` at the top of
  `assets/js/script.js` once Emily has a real inbox.
- **Gallery photos:** the gallery currently uses friendly placeholder pet
  photos stored in the `assets/images/gallery/` folder. Swap them for real
  photos of Emily's grooming work as they come in — just keep the same file
  names, or update the `src` paths in the `#gallery` section of `index.html`.
- **Services & pricing:** add prices or extra services in the `#services`
  section whenever ready.

## Photo credits

Placeholder dog photos are from [placedog.net](https://placedog.net) and cat
photos are from [cataas.com](https://cataas.com) (Cat as a Service) — both free
to use. Replace them with original photos over time.

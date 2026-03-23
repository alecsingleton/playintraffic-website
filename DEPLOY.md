# Deploying Your Random Run Website

You have your domain ready—here's how to get your website live on the internet. I've outlined several options from simplest to most flexible.

---

## Option 1: GitHub Pages (Free, Easiest)

**Best for:** Simple static sites, completely free hosting

### Steps:

1. **Create a GitHub repository**
   ```bash
   cd website
   git init
   git add .
   git commit -m "Initial website"
   ```

2. **Push to GitHub**
   - Go to [github.com](https://github.com) and create a new repository (e.g., `randomrun-website`)
   - Follow the instructions to push your existing repo:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/randomrun-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repo's **Settings** → **Pages**
   - Under "Source," select **Deploy from a branch**
   - Choose `main` branch and `/ (root)` folder
   - Click **Save**

4. **Connect your custom domain**
   - Still in **Settings** → **Pages**, enter your domain in the "Custom domain" field
   - GitHub will provide instructions for DNS configuration

5. **Configure DNS at your domain registrar**
   - Add these DNS records:
   
   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | 185.199.108.153          |
   | A     | @    | 185.199.109.153          |
   | A     | @    | 185.199.110.153          |
   | A     | @    | 185.199.111.153          |
   | CNAME | www  | YOUR_USERNAME.github.io  |

6. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

7. **Enable HTTPS**
   - Once DNS is verified, check "Enforce HTTPS" in GitHub Pages settings

---

## Option 2: Netlify (Free, Very Easy, More Features)

**Best for:** Automatic deployments, form handling, edge functions

### Steps:

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Deploy via drag & drop**
   - Go to your Netlify dashboard
   - Drag your `website` folder directly onto the page
   - Your site is live instantly at a `.netlify.app` URL

3. **Connect your custom domain**
   - Go to **Site settings** → **Domain management** → **Add custom domain**
   - Enter your domain name

4. **Configure DNS**
   
   **Option A: Use Netlify DNS (Recommended)**
   - Netlify will provide nameservers
   - Update your domain registrar to use Netlify's nameservers
   - Netlify handles everything else automatically

   **Option B: Keep your current DNS**
   - Add these records at your registrar:
   
   | Type  | Name | Value                          |
   |-------|------|--------------------------------|
   | A     | @    | 75.2.60.5                      |
   | CNAME | www  | your-site-name.netlify.app     |

5. **HTTPS is automatic** once DNS is configured

### Bonus: Connect to GitHub for auto-deploy
- Link your GitHub repo in Netlify
- Every push to `main` automatically deploys

---

## Option 3: Vercel (Free, Developer-Focused)

**Best for:** If you might add dynamic features later

### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd website
   vercel
   ```
   - Follow the prompts to link/create a project

3. **Add custom domain**
   - Go to your project on [vercel.com](https://vercel.com)
   - **Settings** → **Domains** → Add your domain

4. **Configure DNS**
   - Vercel provides specific instructions based on your registrar
   - Generally, you'll add an A record pointing to `76.76.21.21`

---

## Option 4: Cloudflare Pages (Free, Fast Global CDN)

**Best for:** Maximum performance, already using Cloudflare

### Steps:

1. **Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)**

2. **Create a project**
   - Connect your GitHub repo, OR
   - Use "Direct Upload" to upload your `website` folder

3. **Configure custom domain**
   - If your domain is already on Cloudflare, it's one-click
   - If not, transfer DNS to Cloudflare (free) for easiest setup

---

## Option 5: Traditional Web Hosting

**Best for:** If you already have hosting, or want email hosting too

### Steps:

1. **Get hosting** (examples: Bluehost, SiteGround, DreamHost, A2 Hosting)

2. **Upload files via FTP or cPanel File Manager**
   - Upload everything in the `website` folder to `public_html` or `www`

3. **Point your domain**
   - Either use the host's nameservers, or
   - Set an A record pointing to your hosting IP address

---

## DNS Configuration Quick Reference

No matter which option you choose, you'll configure DNS at your **domain registrar** (where you bought the domain—GoDaddy, Namecheap, Google Domains, Cloudflare, etc.).

### Common DNS Record Types:

| Record | Purpose | Example Value |
|--------|---------|---------------|
| A | Points domain to an IP address | `185.199.108.153` |
| CNAME | Points subdomain to another domain | `your-site.netlify.app` |
| NS | Delegates DNS to another provider | `dns1.p01.nsone.net` |

### How to find DNS settings:
- **GoDaddy:** My Products → DNS
- **Namecheap:** Domain List → Manage → Advanced DNS
- **Google Domains:** DNS → Manage custom records
- **Cloudflare:** DNS → Records

---

## Checklist After Deployment

- [ ] Site loads at `https://yourdomain.com`
- [ ] Site loads at `https://www.yourdomain.com` (redirects to non-www or vice versa)
- [ ] HTTPS is working (padlock icon in browser)
- [ ] All links work (especially App Store link)
- [ ] Privacy policy page loads
- [ ] Email link opens mail client
- [ ] Site looks good on mobile

---

## Updating Your Site

### GitHub Pages / Netlify / Vercel (with Git):
```bash
# Make your changes, then:
git add .
git commit -m "Update website"
git push
```
Site updates automatically!

### Netlify (drag & drop):
- Go to **Deploys** → drag your updated folder

### Traditional hosting:
- Re-upload changed files via FTP

---

## Need Help?

If you run into issues:
1. Check DNS propagation: [dnschecker.org](https://dnschecker.org)
2. Test your site: [web.dev/measure](https://web.dev/measure)
3. Most hosts have 24/7 support chat

---

## Update the App Store Link

Once your app is live on the App Store, replace the placeholder URL in both HTML files:

**In `index.html` and `privacy.html`, find:**
```html
https://apps.apple.com/app/random-run/id000000000
```

**Replace with your actual App Store URL:**
```html
https://apps.apple.com/app/random-run/id[YOUR_APP_ID]
```

You'll get this URL from App Store Connect after your app is approved.

---

## Analytics (Umami)

The site uses [Umami](https://umami.is) for privacy-friendly analytics. No cookies, no personal data, GDPR-compliant.

### Setup

1. Sign up at [cloud.umami.is](https://cloud.umami.is) (free Hobby plan)
2. Add your website (`playintraffic.ca`)
3. Copy the `data-website-id` value from the tracking snippet
4. The website ID (`70251b7d-b076-42d7-82d0-01856cd589fa`) is already set in all 5 HTML files

### What's tracked automatically

- **Page views** on all pages (built into Umami)
- **Download clicks**: `download-click-random-run`, `download-click-bikeright`
- **Android interest**: `android-interest-random-run`, `android-interest-bikeright`
- **Hub card clicks**: `hub-card-random-run`, `hub-card-bikeright`
- **Section visibility**: `section-view-hero`, `section-view-how-it-works`, `section-view-screenshots`, `section-view-specs`, `section-view-cta` (each with an `app` property of `random-run` or `bikeright`)

### Funnel configurations

Set these up in the Umami dashboard under **Funnels**:

**Index → Random Run Download**
1. URL: `/index.html`
2. Event: `hub-card-random-run`
3. URL: `/random-run.html`
4. Event: `download-click-random-run`

**Index → BikeRight Download**
1. URL: `/index.html`
2. Event: `hub-card-bikeright`
3. URL: `/bikeright.html`
4. Event: `download-click-bikeright`

**Direct → Random Run Download**
1. URL: `/random-run.html`
2. Event: `download-click-random-run`

**Direct → BikeRight Download**
1. URL: `/bikeright.html`
2. Event: `download-click-bikeright`

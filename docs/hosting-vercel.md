# Hosting on Vercel

This document describes how to deploy the 3D Viewer website to [Vercel](https://vercel.com).

## Why Vercel

- **Zero config** for Vite/React projects
- **Automatic deployments** from Git (push to deploy)
- **Free tier** for personal projects
- **Global CDN** for fast loading
- **Preview deployments** for every branch/PR

## Prerequisites

- A [Vercel account](https://vercel.com/signup) (free)
- Project in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **Add New** → **Project**.
3. Import your Git repository (connect GitHub/GitLab/Bitbucket if needed).
4. Vercel will auto-detect the Vite project. Confirm:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**.

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. From the project root, run:
   ```bash
   vercel
   ```

3. Follow the prompts (login if needed, link to existing project or create new).

4. For production:
   ```bash
   vercel --prod
   ```

## Build Configuration

The project uses default Vite settings. If needed, add a `vercel.json` in the project root:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

For client-side routing (SPA), add rewrites so all routes serve `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Environment Variables

If you add environment variables later (e.g. API keys), set them in:

- **Dashboard:** Project → Settings → Environment Variables
- **CLI:** `vercel env add <name>`

Use `VITE_` prefix for variables that must be available in the browser.

## Custom Domain

1. Go to Project → Settings → Domains.
2. Add your domain and follow DNS instructions.
3. Vercel provides free SSL.

## Useful Commands

| Command           | Description                    |
|-------------------|--------------------------------|
| `vercel`          | Deploy to preview URL          |
| `vercel --prod`   | Deploy to production           |
| `vercel ls`       | List deployments               |
| `vercel logs`     | View deployment logs           |

## References

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel + Vite](https://vercel.com/docs/frameworks/vite)

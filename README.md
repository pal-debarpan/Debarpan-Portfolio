# Debarpan Portfolio

Interactive 3D portfolio built with React, Vite, React Three Fiber, and Tailwind CSS.

## Run locally

```bash
npm ci
npm run dev
```

## Deploy to Vercel

This repository is ready to deploy as one Vercel project.

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep the project root as this repository's root. Vercel will use `npm run build` and publish `dist` automatically.
4. Deploy.

`vercel.json` includes the SPA rewrite required for direct visits to `/about`, `/projects`, and `/contact`.

### Optional environment variable

The contact form already includes a public Web3Forms fallback key. To use your own key, add this environment variable in **Vercel → Project → Settings → Environment Variables** before deploying:

```text
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

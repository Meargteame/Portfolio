# Deployment Guide

This portfolio is built with Vite + React and can be deployed to multiple platforms.

## Quick Deploy Options

### 1. Vercel (Recommended) ⚡

**One-Click Deploy:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy!

**CLI Deploy:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### 2. Netlify 🌐

**One-Click Deploy:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

**CLI Deploy:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

### 3. GitHub Pages 📄

**Setup:**
1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json` scripts:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add to `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/', // Replace with your repo name
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in your repo settings (Settings → Pages → Source: gh-pages branch)

## Build Locally

To test the production build locally:

```bash
# Build
npm run build

# Preview
npm run preview
```

## Environment Variables

If you need environment variables:

1. Create `.env` file (already in .gitignore)
2. Add variables with `VITE_` prefix:
```
VITE_API_URL=https://api.example.com
```

3. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

4. For deployment platforms, add environment variables in their dashboard

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as instructed

## Performance Tips

- ✅ Images are optimized
- ✅ Code splitting enabled (Vite default)
- ✅ Lazy loading implemented
- ✅ Analytics ready (@vercel/analytics)

## Troubleshooting

**Build fails:**
- Check Node.js version (v18+ recommended)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for TypeScript/ESLint errors: `npm run lint`

**Routing issues (404 on refresh):**
- Ensure rewrites are configured (already in vercel.json)
- For Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

**Slow build times:**
- Use `npm ci` instead of `npm install` in CI/CD
- Enable caching in your deployment platform

---

**Current Status:** ✅ Ready to deploy!

Choose your preferred platform above and follow the steps. Vercel is recommended for the fastest setup.

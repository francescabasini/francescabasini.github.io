# Francesca Basini — personal website

React + Vite site designed for `https://francescabasini.github.io`.

## Develop
Install Node.js 22+, then run:
```bash
npm ci
npm run dev
```

## Publish
Create a **public** repository named `francescabasini.github.io` under the GitHub account `francescabasini`. Push all these files to its `main` branch. In GitHub **Settings → Pages**, select **GitHub Actions** as the build/deployment source. The included workflow builds and publishes on each push.

## Edit
- `src/main.jsx`: biography, news, project entries and links
- `src/style.css`: Nordic Ember colors and styling
- `public/profile.jpg`: profile photo extracted from the original archive
- `public/404.html`: simple fallback for direct navigation to `/projects/`

**Important:** News and project entries are placeholders; the biography is adapted from a 2023 archive. Verify current professional details, photo permission, and links before publishing.

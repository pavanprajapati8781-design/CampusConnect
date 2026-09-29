# CampusConnect Responsive MVP

CampusConnect is a responsive HTML/CSS/JavaScript MVP for a smart campus platform.

## Features

- Student dashboard
- Staff/Admin dashboard
- Maintenance ticket reporting and status workflow
- Marketplace
- Lost & Found
- Campus Events
- Internship & Hackathon opportunities
- Notifications
- Profile management
- Analytics
- LocalStorage persistence
- Responsive mobile, tablet and desktop layout

## Run locally

1. Open this folder in VS Code.
2. Open `index.html`.
3. Use the Live Server extension, or open `index.html` directly in a browser.
4. Test Student and Staff/Admin roles.

## GitHub

Upload the contents of this folder to a GitHub repository. Keep `index.html` at the repository root.

## GitHub Pages

1. Push this folder to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. GitHub will provide the public Pages URL.

## Cloudflare Pages / Netlify / Vercel

This is a static frontend and can also be deployed directly by connecting the GitHub repository. No Node.js build step is required for the current MVP.

## Important limitation

The current MVP stores application data in browser LocalStorage. That means data is local to each browser/device and is not shared between users. A real multi-user deployment will require a backend/API and database.

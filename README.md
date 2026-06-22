# 3D Viewer Website

Marketing website for the **3D Viewer** application — an advanced 3D model viewer built with React, Vite, and Three.js.

**Live site:** https://3dbviewer.com

This repository is the marketing/landing page only. To **use** the 3D Viewer, download or clone the application repo:

- **3D Viewer source:** https://github.com/basic-user-iom/3d
- **Windows downloads (v3.18):** https://github.com/basic-user-iom/3d/releases/tag/v3.18

## 3D Viewer Application

Download the Windows installer or portable build from GitHub Releases — no Node.js required.

Or run from source:

```bash
git clone https://github.com/basic-user-iom/3d.git
cd 3d
npm install
npm run dev              # Viewer at http://localhost:3000 + Streets GL at :8081
npm run dev:full         # Also starts bug server at http://localhost:3001
npm run dev:with-revit   # Revit sync at :3002/:3003 + Streets GL + viewer
npm run desktop:dev      # Electron desktop shell
npm run desktop:dist     # Windows NSIS + portable builds
```

## Marketing Website (this repo)

For developers maintaining this landing page:

```bash
git clone https://github.com/basic-user-iom/https-3dbviewer.com-.git
cd https-3dbviewer.com-
npm install
npm run dev              # http://localhost:5000
npm run build
npm run preview
```

## Website Features

- Modern, responsive landing page with feature showcase
- Technical documentation and use cases for the 3D Viewer app
- Getting started guide focused on downloading and running the viewer
- Orb preview demo (WebGL)

## Tech Stack (this site)

- React 19, Vite 7, TypeScript, CSS3

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── TechSpecs.tsx
│   │   ├── UseCases.tsx
│   │   ├── GettingStarted.tsx
│   │   └── Footer.tsx
│   ├── viewerAppMeta.ts    # Viewer version, GitHub URLs, download links
│   └── App.tsx
├── index.html
└── package.json
```

## License

This website is part of the 3D Viewer project.

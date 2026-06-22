# 3D Viewer Website

A modern, professional website showcasing the 3D Viewer project - an advanced 3D model viewer built with React, Vite, and Three.js.

## Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Feature Showcase**: Comprehensive display of all 3D Viewer capabilities
- **Technical Documentation**: Detailed tech specs and architecture information
- **Use Cases**: Real-world applications and scenarios
- **Getting Started Guide**: Step-by-step setup instructions

## Tech Stack

- **React 19**: Modern UI framework
- **Vite 7**: Next-generation build tool
- **TypeScript**: Type-safe development
- **CSS3**: Modern styling with CSS variables and animations

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5000`

Production: https://3dbviewer.com

GitHub: https://github.com/basic-user-iom/https-3dbviewer.com-

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 3D Viewer Application

The 3D Viewer app (v3.18) is a separate project from this marketing website.

- **Viewer source (planned):** `basic-user-iom/3d` — not published on GitHub yet
- **Windows downloads:** will be on GitHub Releases (`v3.18`) after the viewer repo is published

Use a local development copy (e.g. `F:\3d-viever-backup\v3.18`):

```bash
cd F:/3d-viever-backup/v3.18
npm install
npm run dev              # Viewer at http://localhost:3000 + Streets GL at :8081
npm run dev:full         # Also starts bug server at http://localhost:3001
npm run dev:with-revit   # Revit sync at :3002/:3003 + Streets GL + viewer
npm run desktop:dev      # Electron desktop shell
npm run desktop:dist     # Windows NSIS + portable builds
```

Publish the viewer to GitHub with `scripts/publish-to-github.ps1` when ready.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation bar
│   │   ├── Hero.tsx            # Hero/landing section
│   │   ├── Features.tsx        # Features showcase
│   │   ├── TechSpecs.tsx       # Technical specifications
│   │   ├── UseCases.tsx        # Use cases section
│   │   ├── GettingStarted.tsx # Getting started guide
│   │   └── Footer.tsx          # Footer component
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles
│   └── App.css                 # App-specific styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
└── vite.config.ts              # Vite configuration
```

## Sections

1. **Hero Section**: Eye-catching landing area with key stats and call-to-action
2. **Features**: Comprehensive feature categories with detailed descriptions
3. **Technical Specifications**: Tech stack, dependencies, and architecture
4. **Use Cases**: Real-world applications and scenarios
5. **Getting Started**: Setup instructions and quick start guide
6. **Footer**: Additional links and information

## Customization

The website uses CSS variables for easy theming. Modify the variables in `src/index.css` to change colors, spacing, and other design elements.

## License

This website is part of the 3D Viewer project.


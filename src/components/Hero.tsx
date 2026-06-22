import HeroOrb from './HeroOrb'
import { VIEWER_APP_VERSION } from '../viewerAppMeta'
import './Hero.css'

const openOrbPreview = () => {
  const url = `${window.location.origin}/orb-preview.html`
  const w = window.open(
    url,
    'orb-preview',
    'width=480,height=480,left=100,top=100,resizable=yes,scrollbars=no'
  )
  if (!w) {
    window.location.href = url
  }
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badges">
          <div className="hero-badge hero-badge-beta">
            <span className="badge-dot"></span>
            Beta — Not final release
          </div>
          <div className="hero-badge">
            Version {VIEWER_APP_VERSION}
          </div>
        </div>
        <h1 className="hero-title">
          3D Viewer
          <span className="gradient-text"> — Load, inspect, and present</span>
        </h1>
        <p className="hero-description">
          Modern, client-side 3D model viewer. Load models in the browser;
          adjust lighting and materials; create camera views and hotspots; export for web or images, video, and panorama.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">Web-based</div>
            <div className="stat-label">Browser-based</div>
          </div>
          <div className="stat">
            <div className="stat-number">13+</div>
            <div className="stat-label">3D Formats</div>
          </div>
          <div className="stat">
            <div className="stat-number">31</div>
            <div className="stat-label">UI Panels</div>
          </div>
          <div className="stat">
            <div className="stat-number">React 19 · Vite 7</div>
            <div className="stat-label">Three.js · Zustand</div>
          </div>
        </div>
        <div className="hero-actions">
          <a href="#getting-started" className="btn btn-primary">
            Get Started
          </a>
          <a href="#features" className="btn btn-secondary">
            Explore Features
          </a>
        </div>
        <p className="hero-utility">
          <button type="button" className="hero-utility-link" onClick={openOrbPreview} title="Open orb in new window">
            Open orb preview
          </button>
        </p>
        <div className="hero-tech">
          <span className="tech-tag">React 19</span>
          <span className="tech-tag">Vite 7</span>
          <span className="tech-tag">Three.js 0.181</span>
          <span className="tech-tag">TypeScript</span>
          <span className="tech-tag">Zustand</span>
        </div>
      </div>
      <div className="hero-visual">
        <HeroOrb variant="hero" />
        <div className="visual-grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
        <div className="visual-glow"></div>
      </div>
    </section>
  )
}

export default Hero


import HeroOrb from './HeroOrb'
import {
  VIEWER_APP_VERSION,
  GITHUB_VIEWER_RELEASE_PUBLISHED,
  VIEWER_WINDOWS_SETUP_URL,
  GITHUB_VIEWER_RELEASE_URL
} from '../viewerAppMeta'
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
  const primaryHref =
    GITHUB_VIEWER_RELEASE_PUBLISHED && VIEWER_WINDOWS_SETUP_URL
      ? VIEWER_WINDOWS_SETUP_URL
      : '#getting-started'
  const primaryLabel =
    GITHUB_VIEWER_RELEASE_PUBLISHED && VIEWER_WINDOWS_SETUP_URL
      ? 'Download for Windows'
      : 'Get the 3D Viewer'

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
          Desktop and browser-based 3D model viewer. Load 13+ formats, adjust lighting and materials,
          create camera views and hotspots, and export for web, images, video, or panorama.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">Windows</div>
            <div className="stat-label">Desktop app</div>
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
          <a
            href={primaryHref}
            className="btn btn-primary"
            {...(GITHUB_VIEWER_RELEASE_PUBLISHED && VIEWER_WINDOWS_SETUP_URL
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {primaryLabel}
          </a>
          <a href="#getting-started" className="btn btn-secondary">
            Run from Source
          </a>
        </div>
        {GITHUB_VIEWER_RELEASE_PUBLISHED && GITHUB_VIEWER_RELEASE_URL ? (
          <p className="hero-release-note">
            v{VIEWER_APP_VERSION} —{' '}
            <a href={GITHUB_VIEWER_RELEASE_URL} target="_blank" rel="noopener noreferrer">
              GitHub Releases
            </a>
            {' '}(Setup + Portable)
          </p>
        ) : null}
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

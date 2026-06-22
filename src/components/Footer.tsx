import {
  VIEWER_APP_VERSION,
  GITHUB_WEBSITE_URL,
  GITHUB_VIEWER_REPO,
  GITHUB_VIEWER_REPO_PUBLISHED,
  GITHUB_VIEWER_RELEASE_PUBLISHED,
  GITHUB_VIEWER_URL,
  GITHUB_VIEWER_RELEASE_URL
} from '../viewerAppMeta'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">3D Viewer</h3>
          <p className="footer-description">
            A modern, feature-rich 3D model viewer built with React, Vite, and Three.js.
            Advanced rendering, path tracing, and comprehensive 3D tools.
          </p>
          <div className="footer-version">
            <span>Version {VIEWER_APP_VERSION}</span>
            <span className="version-dot">●</span>
            <span className="footer-beta">Beta — Not final release. Features and behavior may change.</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Features</h4>
          <ul className="footer-links">
            <li><a href="#features">Model Loading</a></li>
            <li><a href="#features">Path Tracing</a></li>
            <li><a href="#features">Post-Processing</a></li>
            <li><a href="#features">Lighting System</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-links">
            <li><a href="#getting-started">Getting Started</a></li>
            <li><a href="#tech">Technical Specs</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#features">Documentation</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">GitHub</h4>
          <ul className="footer-links">
            <li>
              <a href={GITHUB_WEBSITE_URL} target="_blank" rel="noopener noreferrer">
                Website Repository
              </a>
            </li>
            {GITHUB_VIEWER_REPO_PUBLISHED && GITHUB_VIEWER_URL ? (
              <li>
                <a href={GITHUB_VIEWER_URL} target="_blank" rel="noopener noreferrer">
                  3D Viewer Source
                </a>
              </li>
            ) : (
              <li className="footer-link-pending">3D Viewer Source ({GITHUB_VIEWER_REPO}) — coming soon</li>
            )}
            {GITHUB_VIEWER_RELEASE_PUBLISHED && GITHUB_VIEWER_RELEASE_URL ? (
              <li>
                <a href={GITHUB_VIEWER_RELEASE_URL} target="_blank" rel="noopener noreferrer">
                  Windows Downloads
                </a>
              </li>
            ) : (
              <li className="footer-link-pending">Windows Downloads — coming soon</li>
            )}
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-heading">Tech Stack</h4>
          <ul className="footer-links">
            <li>React 19</li>
            <li>Vite 7</li>
            <li>Three.js 0.181</li>
            <li>TypeScript</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 3D Viewer. Built with modern web technologies.
        </p>
        <p className="footer-note">
          Beta software • Features may change • Developer-friendly
        </p>
      </div>
    </footer>
  )
}

export default Footer


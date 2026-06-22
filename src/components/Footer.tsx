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
            <span>Version 3.7.0</span>
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


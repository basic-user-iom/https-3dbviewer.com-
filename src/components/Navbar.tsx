import { useState, useEffect } from 'react'
import HeroOrb from './HeroOrb'
import { VIEWER_APP_VERSION } from '../viewerAppMeta'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <button
            type="button"
            className="nav-logo-link"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <HeroOrb variant="logo" />
            <span className="logo-text">3D Viewer</span>
          </button>
          <span className="logo-version">v{VIEWER_APP_VERSION}</span>
          <span className="logo-beta">Beta</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#tech">Tech</a>
          <a href="#use-cases">Use Cases</a>
          <a href="#getting-started">Get Started</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


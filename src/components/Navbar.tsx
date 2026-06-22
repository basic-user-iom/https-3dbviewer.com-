import { useState, useEffect } from 'react'
import HeroOrb from './HeroOrb'
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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <HeroOrb variant="logo" />
          <span className="logo-text">3D Viewer</span>
          <span className="logo-version">v3.7.0</span>
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


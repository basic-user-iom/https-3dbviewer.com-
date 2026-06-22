import OrbInteriorCanvas from './OrbInteriorCanvas'
import './HeroOrb.css'

interface HeroOrbProps {
  /** Use "preview" for the standalone orb window (slightly larger, no float). */
  variant?: 'hero' | 'preview' | 'logo'
}

const ORB_SIZE = { hero: 220, preview: 280, logo: 28 }

const HeroOrb = ({ variant = 'hero' }: HeroOrbProps) => {
  const isPreview = variant === 'preview'
  const isLogo = variant === 'logo'
  const size = ORB_SIZE[variant]

  return (
    <div
      className={`hero-orb-container ${isPreview ? 'hero-orb-container--preview' : ''} ${isLogo ? 'hero-orb-container--logo' : ''}`}
    >
      <div className={`hero-orb ${isLogo ? 'hero-orb--logo' : ''}`}>
        <div className="hero-orb-interior-fallback" aria-hidden />
        <OrbInteriorCanvas width={size} height={size} />
      </div>
    </div>
  )
}

export default HeroOrb

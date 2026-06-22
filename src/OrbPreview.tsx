import HeroOrb from './components/HeroOrb'
import OrbSourceCodePanel from './components/OrbSourceCodePanel'
import './OrbPreview.css'

const OrbPreview = () => {
  return (
    <div className="orb-preview-page">
      <div className="orb-preview-page__demo">
        <HeroOrb variant="preview" />
        <p className="orb-preview-page__hint">Live preview — WebGL interior shader</p>
      </div>
      <OrbSourceCodePanel />
    </div>
  )
}

export default OrbPreview

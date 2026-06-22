import './BetaBanner.css'

const BetaBanner = () => {
  return (
    <div className="beta-banner" role="status" aria-live="polite">
      <span className="beta-badge">Beta</span>
      <span className="beta-message">This is a beta release, not a final release. Features and behavior may change.</span>
    </div>
  )
}

export default BetaBanner

import { useState } from 'react'
import { ORB_SOURCE_FILES, getOrbSourceBundle } from '../orbSourceFiles'
import './OrbSourceCodePanel.css'

type CopyState = 'idle' | 'copied'

const OrbSourceCodePanel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const activeFile = ORB_SOURCE_FILES[activeIndex]

  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2000)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.opacity = '0'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2000)
    }
  }

  return (
    <section className="orb-source-panel" aria-labelledby="orb-source-title">
      <header className="orb-source-panel__header">
        <div>
          <h1 id="orb-source-title" className="orb-source-panel__title">
            Complete orb implementation
          </h1>
          <p className="orb-source-panel__desc">
            All source files needed to reproduce this WebGL orb effect — component, canvas,
            shaders, and styles.
          </p>
        </div>
        <div className="orb-source-panel__actions">
          <button
            type="button"
            className="orb-source-panel__copy-btn"
            onClick={() => copyText(activeFile.content)}
          >
            {copyState === 'copied' ? 'Copied!' : `Copy ${activeFile.name}`}
          </button>
          <button
            type="button"
            className="orb-source-panel__copy-btn orb-source-panel__copy-btn--secondary"
            onClick={() => copyText(getOrbSourceBundle())}
          >
            Copy all files
          </button>
        </div>
      </header>

      <div className="orb-source-panel__tabs" role="tablist" aria-label="Source files">
        {ORB_SOURCE_FILES.map((file, index) => (
          <button
            key={file.path}
            type="button"
            role="tab"
            id={`orb-source-tab-${index}`}
            aria-selected={index === activeIndex}
            aria-controls={`orb-source-panel-${index}`}
            className={`orb-source-panel__tab ${index === activeIndex ? 'orb-source-panel__tab--active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {file.name}
          </button>
        ))}
      </div>

      <div className="orb-source-panel__code-wrap">
        <div className="orb-source-panel__code-meta">
          <span className="orb-source-panel__path">{activeFile.path}</span>
          <span className="orb-source-panel__lines">
            {activeFile.content.split('\n').length} lines
          </span>
        </div>
        <pre
          className="orb-source-panel__code"
          role="tabpanel"
          id={`orb-source-panel-${activeIndex}`}
          aria-labelledby={`orb-source-tab-${activeIndex}`}
        >
          <code>{activeFile.content}</code>
        </pre>
      </div>
    </section>
  )
}

export default OrbSourceCodePanel

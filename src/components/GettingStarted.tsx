import './GettingStarted.css'
import {
  VIEWER_APP_VERSION,
  VIEWER_APP_PATH_WIN,
  VIEWER_APP_PATH_UNIX
} from '../viewerAppMeta'

const PRODUCTION_URL = 'https://3d-viewer-website.vercel.app'

const GettingStarted = () => {
  const websiteSteps = [
    {
      number: '1',
      title: 'Install Dependencies',
      description: 'Clone this marketing website repository and install packages',
      code: 'npm install'
    },
    {
      number: '2',
      title: 'Start Development Server',
      description: 'Launch the site locally with hot-reload (Vite dev server on port 5000)',
      code: 'npm run dev'
    },
    {
      number: '3',
      title: 'Build for Production',
      description: 'Create an optimized static build in the dist/ folder',
      code: 'npm run build'
    },
    {
      number: '4',
      title: 'Explore the Site',
      description: 'Browse features, tech specs, and use cases; open the orb preview from the hero section',
      code: 'npm run preview   # optional: preview the production build locally'
    }
  ]

  const viewerSteps = [
    {
      number: '1',
      title: 'Open the Viewer Project',
      description: `Open the 3D Viewer application at ${VIEWER_APP_PATH_WIN} (separate from this website)`,
      code: `cd ${VIEWER_APP_PATH_UNIX}`
    },
    {
      number: '2',
      title: 'Install & Start',
      description: 'Install dependencies and launch the viewer with Streets GL (opens http://localhost:3000)',
      code: 'npm install\nnpm run dev'
    },
    {
      number: '3',
      title: 'Full Stack (Optional)',
      description: 'Start bug server, Streets GL, and viewer together for full development workflow',
      code: 'npm run dev:full'
    },
    {
      number: '4',
      title: 'Desktop or Revit (Optional)',
      description: 'Run the Electron desktop shell or connect to Revit live sync',
      code: 'npm run desktop:dev      # Electron + viewer\nnpm run dev:with-revit   # Revit sync + viewer'
    },
    {
      number: '5',
      title: 'Load Models',
      description: 'Drag & drop files, use the file picker, or load from URL in the running viewer',
      code: '// Open http://localhost:3000 in your browser'
    }
  ]

  const websiteCommands = [
    { cmd: 'npm run dev', desc: 'Start Vite dev server at http://localhost:5000' },
    { cmd: 'npm run build', desc: 'Production build (output: dist/)' },
    { cmd: 'npm run preview', desc: 'Serve the production build locally' }
  ]

  const viewerCommands = [
    { cmd: 'npm run dev', desc: 'Viewer (port 3000) + Streets GL server (port 8081)' },
    { cmd: 'npm run dev:full', desc: 'Bug server (3001) + Streets GL (8081) + viewer (3000)' },
    { cmd: 'npm run dev:with-revit', desc: 'Revit sync server + Streets GL + viewer' },
    { cmd: 'npm run desktop:dev', desc: 'Electron desktop shell against local Vite app' },
    { cmd: 'npm run desktop:dist', desc: 'Build viewer + Streets GL + Windows NSIS/portable artifacts' },
    { cmd: 'npm run build', desc: 'Production build of the 3D Viewer app' },
    { cmd: 'npm run preview', desc: 'Preview the viewer production build' }
  ]

  const websiteServers = [
    { name: 'Production', url: PRODUCTION_URL, desc: 'Live marketing website (Vercel)' },
    { name: 'Development', url: 'http://localhost:5000', desc: 'Local Vite dev server for this site' }
  ]

  const viewerServers = [
    { name: '3D Viewer', url: 'http://localhost:3000', desc: 'Main viewer application (Vite)' },
    { name: 'Bug Server', url: 'http://localhost:3001', desc: 'Bug tracking API (dev:full only)' },
    { name: 'Streets GL', url: 'http://localhost:8081', desc: 'Streets GL map overlay server' }
  ]

  return (
    <section id="getting-started" className="getting-started">
      <div className="section-header">
        <h2 className="section-title">Getting Started</h2>
        <p className="section-subtitle">
          This page covers two projects: this marketing website and the separate 3D Viewer application
        </p>
      </div>

      <div className="project-section">
        <h3 className="project-section-title">This Marketing Website</h3>
        <p className="project-section-desc">
          Run and deploy the site you are viewing now (3d-viewer-website on port 5000).
        </p>

        <div className="steps-container">
          {websiteSteps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
                <div className="step-code">
                  <code>{step.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="commands-section">
          <h4 className="commands-title">Website Commands</h4>
          <div className="commands-grid">
            {websiteCommands.map((command, idx) => (
              <div key={idx} className="command-card">
                <code className="command-code">{command.cmd}</code>
                <p className="command-desc">{command.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="servers-section">
          <h4 className="servers-title">Website Endpoints</h4>
          <div className="servers-grid">
            {websiteServers.map((server, idx) => (
              <div key={idx} className="server-card">
                <div className="server-header">
                  <span className="server-name">{server.name}</span>
                  <span className="server-status">●</span>
                </div>
                <a href={server.url} className="server-url" target="_blank" rel="noopener noreferrer">
                  {server.url}
                </a>
                <p className="server-desc">{server.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="project-section viewer-app-section">
        <h3 className="project-section-title">Run the 3D Viewer App</h3>
        <p className="project-section-desc">
          The actual 3D Viewer (v{VIEWER_APP_VERSION}) lives at{' '}
          <code>{VIEWER_APP_PATH_WIN}</code>. Features, tech specs, and use cases on this site describe
          that application.
        </p>

        <div className="steps-container">
          {viewerSteps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
                <div className="step-code">
                  <code>{step.code}</code>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="commands-section">
          <h4 className="commands-title">Viewer Commands</h4>
          <div className="commands-grid">
            {viewerCommands.map((command, idx) => (
              <div key={idx} className="command-card">
                <code className="command-code">{command.cmd}</code>
                <p className="command-desc">{command.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="servers-section">
          <h4 className="servers-title">Viewer Endpoints</h4>
          <div className="servers-grid">
            {viewerServers.map((server, idx) => (
              <div key={idx} className="server-card">
                <div className="server-header">
                  <span className="server-name">{server.name}</span>
                  <span className="server-status">●</span>
                </div>
                <a href={server.url} className="server-url" target="_blank" rel="noopener noreferrer">
                  {server.url}
                </a>
                <p className="server-desc">{server.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="quick-start">
        <h3 className="quick-start-title">Quick Start Guide</h3>
        <div className="quick-start-content">
          <div className="quick-start-item">
            <span className="quick-start-icon">🌐</span>
            <div>
              <h4>Visit Live Site</h4>
              <p>
                <a href={PRODUCTION_URL} target="_blank" rel="noopener noreferrer">
                  {PRODUCTION_URL}
                </a>
              </p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">🎮</span>
            <div>
              <h4>Run 3D Viewer</h4>
              <p>
                <code>cd {VIEWER_APP_PATH_UNIX}</code> then <code>npm run dev</code> →{' '}
                <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
                  localhost:3000
                </a>
              </p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">🖥️</span>
            <div>
              <h4>Desktop App</h4>
              <p>
                <code>npm run desktop:dev</code> for Electron, or <code>npm run desktop:dist</code> for
                Windows installers
              </p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">📖</span>
            <div>
              <h4>Features Overview</h4>
              <p>Read the Features section for 3D Viewer application capabilities</p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">🔮</span>
            <div>
              <h4>Orb Preview</h4>
              <p>WebGL orb demo on this marketing site — open from the hero section</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted

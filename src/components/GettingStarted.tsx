import './GettingStarted.css'
import {
  VIEWER_APP_VERSION,
  GITHUB_WEBSITE_URL,
  GITHUB_WEBSITE_REPO,
  GITHUB_VIEWER_REPO,
  GITHUB_VIEWER_RELEASE_TAG,
  GITHUB_VIEWER_REPO_PUBLISHED,
  GITHUB_VIEWER_RELEASE_PUBLISHED,
  GITHUB_VIEWER_URL,
  GITHUB_VIEWER_RELEASE_URL,
  VIEWER_WINDOWS_SETUP_URL,
  VIEWER_WINDOWS_PORTABLE_URL
} from '../viewerAppMeta'

const GettingStarted = () => {
  const viewerSteps = [
    {
      number: '1',
      title: GITHUB_VIEWER_RELEASE_PUBLISHED ? 'Download or Clone' : 'Get the Viewer',
      description: GITHUB_VIEWER_RELEASE_PUBLISHED
        ? 'Download a Windows installer (no Node.js required) or clone the 3D Viewer source from GitHub'
        : GITHUB_VIEWER_REPO_PUBLISHED
          ? 'Clone the 3D Viewer repository from GitHub'
          : `Use a local copy — the ${GITHUB_VIEWER_REPO} GitHub repo is not published yet`,
      code: GITHUB_VIEWER_RELEASE_PUBLISHED
        ? `# Windows: use the download buttons above, or:\ngit clone ${GITHUB_VIEWER_URL}.git\ncd ${GITHUB_VIEWER_REPO}\nnpm install`
        : GITHUB_VIEWER_REPO_PUBLISHED
          ? `git clone ${GITHUB_VIEWER_URL}.git\ncd ${GITHUB_VIEWER_REPO}\nnpm install`
          : `cd path/to/3d-viewer\nnpm install`
    },
    {
      number: '2',
      title: 'Install & Start',
      description: 'Install dependencies and launch the viewer with Streets GL (opens http://localhost:3000)',
      code: 'npm install\nnpm run dev'
    },
    {
      number: '3',
      title: 'Load Models',
      description: 'Drag & drop files, use the file picker, or load from URL in the running viewer',
      code: '// Open http://localhost:3000 in your browser'
    },
    {
      number: '4',
      title: 'Full Stack (Optional)',
      description: 'Start bug server, Streets GL, and viewer together for full development workflow',
      code: 'npm run dev:full'
    },
    {
      number: '5',
      title: 'Desktop or Revit (Optional)',
      description: 'Run the Electron desktop shell or connect to Revit live sync',
      code: 'npm run desktop:dev      # Electron + viewer\nnpm run dev:with-revit   # Revit sync + viewer'
    }
  ]

  const viewerCommands = [
    { cmd: 'npm run dev', desc: 'Viewer (port 3000) + Streets GL server (port 8081)' },
    { cmd: 'npm run dev:full', desc: 'Bug server (3001) + Streets GL (8081) + viewer (3000)' },
    { cmd: 'npm run dev:with-revit', desc: 'Revit sync (3002/3003) + Streets GL (8081) + viewer (3000)' },
    { cmd: 'npm run desktop:dev', desc: 'Electron desktop shell against local Vite app' },
    { cmd: 'npm run desktop:dist', desc: 'Build viewer + Streets GL + Windows NSIS/portable artifacts' },
    { cmd: 'npm run build', desc: 'Production build of the 3D Viewer app' },
    { cmd: 'npm run preview', desc: 'Preview the viewer production build' }
  ]

  const viewerServers = [
    { name: '3D Viewer', url: 'http://localhost:3000', desc: 'Main viewer application (Vite)' },
    { name: 'Bug Server', url: 'http://localhost:3001', desc: 'Bug tracking API (dev:full only)' },
    { name: 'Revit Sync API', url: 'http://localhost:3002', desc: 'Revit live-link HTTP API (dev:with-revit)' },
    { name: 'Revit WebSocket', url: 'ws://localhost:3003', desc: 'Revit live-link WebSocket (dev:with-revit)' },
    { name: 'Streets GL', url: 'http://localhost:8081', desc: 'Streets GL map overlay server' }
  ]

  return (
    <section id="getting-started" className="getting-started">
      <div className="section-header">
        <h2 className="section-title">Getting Started</h2>
        <p className="section-subtitle">
          Download or run the 3D Viewer application (v{VIEWER_APP_VERSION}) — load models, adjust lighting,
          create presentations, and export for web or desktop
        </p>
      </div>

      <div className="project-section viewer-app-section viewer-app-section-primary">
        <h3 className="project-section-title">3D Viewer Application</h3>
        <p className="project-section-desc">
          The 3D Viewer is a separate project from this marketing website. Source code is on{' '}
          {GITHUB_VIEWER_REPO_PUBLISHED && GITHUB_VIEWER_URL ? (
            <a href={GITHUB_VIEWER_URL} target="_blank" rel="noopener noreferrer">
              GitHub ({GITHUB_VIEWER_REPO})
            </a>
          ) : (
            <>GitHub ({GITHUB_VIEWER_REPO}) — coming soon</>
          )}
          . Features, tech specs, and use cases on this site describe that application.
        </p>

        {GITHUB_VIEWER_RELEASE_PUBLISHED && VIEWER_WINDOWS_SETUP_URL && VIEWER_WINDOWS_PORTABLE_URL ? (
          <div className="download-section">
            <h4 className="download-title">Windows Standalone (v{VIEWER_APP_VERSION})</h4>
            <p className="download-desc">
              Pre-built installers from{' '}
              <a href={GITHUB_VIEWER_RELEASE_URL!} target="_blank" rel="noopener noreferrer">
                GitHub Releases
              </a>
              {' '}— no Node.js required. Run the Setup or Portable .exe to start the viewer.
            </p>
            <div className="download-buttons">
              <a
                href={VIEWER_WINDOWS_SETUP_URL}
                className="download-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Setup (.exe)
              </a>
              <a
                href={VIEWER_WINDOWS_PORTABLE_URL}
                className="download-button download-button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Portable (.exe)
              </a>
            </div>
          </div>
        ) : (
          <div className="download-section download-section-pending">
            <h4 className="download-title">Windows Standalone (v{VIEWER_APP_VERSION})</h4>
            <p className="download-desc">
              Pre-built installers will appear here after the viewer is published to GitHub
              ({GITHUB_VIEWER_REPO}) with a {GITHUB_VIEWER_RELEASE_TAG} release.
            </p>
          </div>
        )}

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
        <h3 className="quick-start-title">Quick Start</h3>
        <div className="quick-start-content">
          {GITHUB_VIEWER_RELEASE_PUBLISHED && VIEWER_WINDOWS_SETUP_URL && VIEWER_WINDOWS_PORTABLE_URL ? (
            <div className="quick-start-item">
              <span className="quick-start-icon">🖥️</span>
              <div>
                <h4>Windows Desktop</h4>
                <p>
                  <a href={VIEWER_WINDOWS_SETUP_URL} target="_blank" rel="noopener noreferrer">
                    Download installer
                  </a>
                  {' '}or{' '}
                  <a href={VIEWER_WINDOWS_PORTABLE_URL} target="_blank" rel="noopener noreferrer">
                    portable build
                  </a>
                  {' '}from GitHub Releases — fastest way to start
                </p>
              </div>
            </div>
          ) : null}
          <div className="quick-start-item">
            <span className="quick-start-icon">🎮</span>
            <div>
              <h4>Run from Source</h4>
              <p>
                {GITHUB_VIEWER_REPO_PUBLISHED && GITHUB_VIEWER_URL ? (
                  <>
                    <code>git clone {GITHUB_VIEWER_URL}.git</code> then <code>npm run dev</code> →{' '}
                  </>
                ) : (
                  <>Clone the viewer repo, then <code>npm run dev</code> →{' '}</>
                )}
                <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer">
                  localhost:3000
                </a>
              </p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">📦</span>
            <div>
              <h4>Viewer on GitHub</h4>
              <p>
                {GITHUB_VIEWER_REPO_PUBLISHED && GITHUB_VIEWER_URL ? (
                  <a href={GITHUB_VIEWER_URL} target="_blank" rel="noopener noreferrer">
                    basic-user-iom/{GITHUB_VIEWER_REPO}
                  </a>
                ) : (
                  <>Viewer repo ({GITHUB_VIEWER_REPO}) — coming soon</>
                )}
                {GITHUB_VIEWER_RELEASE_PUBLISHED && GITHUB_VIEWER_RELEASE_URL ? (
                  <>
                    {' · '}
                    <a href={GITHUB_VIEWER_RELEASE_URL} target="_blank" rel="noopener noreferrer">
                      Releases
                    </a>
                  </>
                ) : null}
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
        </div>
      </div>

      <details className="developers-section">
        <summary className="developers-section-summary">For Developers: This Marketing Website</summary>
        <p className="developers-section-desc">
          This page at 3dbviewer.com is a static marketing site ({GITHUB_WEBSITE_REPO}). It is separate from
          the 3D Viewer application — users do not need to clone or build this repo to use the viewer.
        </p>
        <div className="developers-commands">
          <div className="command-card">
            <code className="command-code">git clone {GITHUB_WEBSITE_URL}.git</code>
            <p className="command-desc">Clone this marketing website repository</p>
          </div>
          <div className="command-card">
            <code className="command-code">npm install && npm run dev</code>
            <p className="command-desc">Local dev server at http://localhost:5000</p>
          </div>
          <div className="command-card">
            <code className="command-code">npm run build</code>
            <p className="command-desc">Production build (output: dist/)</p>
          </div>
        </div>
        <p className="developers-footnote">
          <a href={GITHUB_WEBSITE_URL} target="_blank" rel="noopener noreferrer">
            Website source on GitHub
          </a>
          {' · '}
          Production:{' '}
          <a href="https://3dbviewer.com" target="_blank" rel="noopener noreferrer">
            3dbviewer.com
          </a>
        </p>
      </details>
    </section>
  )
}

export default GettingStarted

import './GettingStarted.css'

const GettingStarted = () => {
  const steps = [
    {
      number: '1',
      title: 'Install Dependencies',
      description: 'Clone the repository and install all required packages',
      code: 'npm install'
    },
    {
      number: '2',
      title: 'Start Development Server',
      description: 'Launch the viewer with hot-reload enabled',
      code: 'npm run dev'
    },
    {
      number: '3',
      title: 'Load Your Models',
      description: 'Use drag & drop, file picker, or URL loading to import 3D models',
      code: '// Drag & drop or use file picker'
    },
    {
      number: '4',
      title: 'Explore Features',
      description: 'Try path tracing, post-processing, lighting, and material editing',
      code: '// Open panels from the UI'
    }
  ]

  const commands = [
    { cmd: 'npm run dev', desc: 'Starts viewer + Streets GL server' },
    { cmd: 'npm run dev:full', desc: 'Starts bug server + Streets GL + viewer' },
    { cmd: 'npm run build', desc: 'Production build' },
    { cmd: 'npm run preview', desc: 'Preview production build' }
  ]

  const servers = [
    { name: 'Viewer', url: 'http://localhost:3000', desc: 'Main 3D viewer application' },
    { name: 'Bug Server', url: 'http://localhost:3001', desc: 'Bug tracking server' },
    { name: 'Streets GL', url: 'http://localhost:8081', desc: 'Streets GL map integration' }
  ]

  return (
    <section id="getting-started" className="getting-started">
      <div className="section-header">
        <h2 className="section-title">Getting Started</h2>
        <p className="section-subtitle">
          Get up and running in minutes with our simple setup process
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step, idx) => (
          <div key={idx} className="step-card">
            <div className="step-number">{step.number}</div>
            <div className="step-content">
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-code">
                <code>{step.code}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="commands-section">
        <h3 className="commands-title">Available Commands</h3>
        <div className="commands-grid">
          {commands.map((command, idx) => (
            <div key={idx} className="command-card">
              <code className="command-code">{command.cmd}</code>
              <p className="command-desc">{command.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="servers-section">
        <h3 className="servers-title">Server Endpoints</h3>
        <div className="servers-grid">
          {servers.map((server, idx) => (
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

      <div className="quick-start">
        <h3 className="quick-start-title">Quick Start Guide</h3>
        <div className="quick-start-content">
          <div className="quick-start-item">
            <span className="quick-start-icon">📖</span>
            <div>
              <h4>Viewer Basics</h4>
              <p>Learn the fundamentals of using the 3D viewer</p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">🎯</span>
            <div>
              <h4>Selection & Gizmos</h4>
              <p>Master object selection and transformation tools</p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">✨</span>
            <div>
              <h4>Path Tracer</h4>
              <p>Explore GPU path tracing controls and settings</p>
            </div>
          </div>
          <div className="quick-start-item">
            <span className="quick-start-icon">💡</span>
            <div>
              <h4>Lighting & HDR</h4>
              <p>Configure lighting and HDR environment maps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GettingStarted


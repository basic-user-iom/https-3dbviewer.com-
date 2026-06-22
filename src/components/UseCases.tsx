import './UseCases.css'

const UseCases = () => {
  const useCases = [
    {
      title: '3D Model Inspection',
      icon: '🔍',
      description: 'View and analyze 3D models with advanced inspection tools, material editing, and geometry analysis.',
      features: ['Object selection', 'Material editor', 'Geometry tools', 'Texture management']
    },
    {
      title: 'Architectural Visualization',
      icon: '🏗️',
      description: 'Render architectural scenes with realistic lighting, shadows, and HDR environments for professional presentations.',
      features: ['HDR environments', 'Dynamic lighting', 'Shadow systems', 'Post-processing']
    },
    {
      title: 'Product Visualization',
      icon: '📦',
      description: 'Showcase products with path-traced rendering, material enhancement, and professional lighting setups.',
      features: ['Path tracing', 'Material enhancement', 'Lighting presets', 'Export options']
    },
    {
      title: 'Educational',
      icon: '📚',
      description: 'Learn 3D graphics, rendering techniques, and shader programming with built-in tools and examples.',
      features: ['Shader editor', 'Debug tools', 'Documentation', 'Examples']
    },
    {
      title: 'Prototyping',
      icon: '🧪',
      description: 'Test 3D assets, materials, and lighting before production with real-time preview and optimization tools.',
      features: ['Real-time preview', 'Performance metrics', 'Optimization tools', 'Format testing']
    },
    {
      title: 'Web Integration',
      icon: '🌐',
      description: 'Embed 3D viewers in web applications with Streets GL integration and coordinate synchronization.',
      features: ['Web export', 'Streets GL sync', '360° panoramas', 'Hotspot presentations']
    }
  ]

  return (
    <section id="use-cases" className="use-cases">
      <div className="section-header">
        <h2 className="section-title">Use Cases</h2>
        <p className="section-subtitle">
          Real-world scenarios for the 3D Viewer application — run locally from the cursor-3d-software repo
        </p>
      </div>
      <div className="use-cases-grid">
        {useCases.map((useCase, idx) => (
          <div key={idx} className="use-case-card">
            <div className="use-case-icon">{useCase.icon}</div>
            <h3 className="use-case-title">{useCase.title}</h3>
            <p className="use-case-description">{useCase.description}</p>
            <ul className="use-case-features">
              {useCase.features.map((feature, fIdx) => (
                <li key={fIdx} className="use-case-feature">
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UseCases


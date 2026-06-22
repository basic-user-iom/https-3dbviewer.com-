import './TechSpecs.css'

const TechSpecs = () => {
  const specs = [
    {
      category: 'Core Technologies',
      items: [
        { name: 'React', version: '19.2.0', desc: 'Modern UI framework' },
        { name: 'Vite', version: '7.2.2', desc: 'Next-gen build tool' },
        { name: 'Three.js', version: '0.181.1', desc: '3D graphics library' },
        { name: 'TypeScript', version: '5.2.2', desc: 'Type-safe development' },
        { name: 'Zustand', version: '5.0.8', desc: 'State management' }
      ]
    },
    {
      category: 'Rendering Libraries',
      items: [
        { name: 'three-gpu-pathtracer', version: '0.0.23', desc: 'GPU path tracing' },
        { name: 'three-mesh-bvh', version: '0.9.2', desc: 'Bounding volume hierarchy' },
        { name: 'three-csm', version: '4.2.1', desc: 'Cascaded shadow maps' },
        { name: 'three-stdlib', version: '2.36.1', desc: 'Three.js utilities' },
        { name: '3d-tiles-renderer', version: '0.4.18', desc: '3D Tiles support' }
      ]
    },
    {
      category: 'Processing Tools',
      items: [
        { name: 'gltf-pipeline', version: '4.3.0', desc: 'GLTF processing' },
        { name: 'meshoptimizer', version: '0.25.0', desc: 'Mesh optimization' },
        { name: 'jszip', version: '3.10.1', desc: 'ZIP archives for web export' }
      ]
    }
  ]

  const formats = [
    { name: 'glTF / GLB', type: '3D Model', status: 'Full Support' },
    { name: 'FBX', type: '3D Model', status: 'Full Support' },
    { name: 'OBJ / MTL', type: '3D Model', status: 'Full Support' },
    { name: 'STL', type: '3D Model', status: 'Full Support' },
    { name: 'PLY', type: '3D Model', status: 'Full Support' },
    { name: '3MF', type: '3D Model', status: 'Full Support' },
    { name: 'Collada (DAE)', type: '3D Model', status: 'Full Support' },
    { name: '3DS', type: '3D Model', status: 'Full Support' },
    { name: '3DM', type: '3D Model (Rhino)', status: 'Full Support' },
    { name: 'DXF', type: 'Polylines (e.g. Revit)', status: 'Full Support' },
    { name: 'IFC', type: 'BIM (Industry Foundation)', status: 'Full Support' },
    { name: 'ZIP', type: 'Archives (GLB + textures)', status: 'Full Support' },
    { name: 'HDR / EXR', type: 'Environment', status: 'Full Support' },
    { name: 'KTX2 / Basis', type: 'Texture', status: 'Full Support' }
  ]

  return (
    <section id="tech" className="tech-specs">
      <div className="section-header">
        <h2 className="section-title">Technical Specifications</h2>
        <p className="section-subtitle">
          Stack for the 3D Viewer application (v2.2.0) — this marketing site uses React 19 and Vite 7 only.
        </p>
      </div>
      
      <div className="specs-grid">
        {specs.map((spec, idx) => (
          <div key={idx} className="spec-card">
            <h3 className="spec-category">{spec.category}</h3>
            <div className="spec-list">
              {spec.items.map((item, iIdx) => (
                <div key={iIdx} className="spec-item">
                  <div className="spec-header">
                    <span className="spec-name">{item.name}</span>
                    <span className="spec-version">v{item.version}</span>
                  </div>
                  <p className="spec-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="formats-section">
        <h3 className="formats-title">Supported Formats</h3>
        <p className="formats-note">DWG is not supported; DXF export from Revit is recommended.</p>
        <div className="formats-grid">
          {formats.map((format, idx) => (
            <div key={idx} className="format-card">
              <div className="format-header">
                <span className="format-name">{format.name}</span>
                <span className="format-status">{format.status}</span>
              </div>
              <span className="format-type">{format.type}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="architecture-section">
        <h3 className="architecture-title">System Architecture</h3>
        <div className="architecture-grid">
          <div className="arch-item">
            <div className="arch-icon">⚛️</div>
            <h4>React Hooks-Based</h4>
            <p>Modern React patterns with modular hooks</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon">🧩</div>
            <h4>Modular Systems</h4>
            <p>Separated effect and rendering systems</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon">🗄️</div>
            <h4>Resource Management</h4>
            <p>Automatic cleanup and disposal</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon">📊</div>
            <h4>State Management</h4>
            <p>Zustand for global state</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon">🔒</div>
            <h4>Type Safety</h4>
            <p>Full TypeScript implementation</p>
          </div>
          <div className="arch-item">
            <div className="arch-icon">⚡</div>
            <h4>Performance</h4>
            <p>Optimized rendering and memory management</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSpecs


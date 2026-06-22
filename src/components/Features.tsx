import './Features.css'

const Features = () => {
  const featureCategories = [
    {
      title: 'Files & Loading',
      icon: '📂',
      features: [
        { name: 'Open files', desc: 'Load one or more 3D files via file picker.' },
        { name: 'Open folder', desc: 'Load a folder (model + textures); paths resolved for relative assets.' },
        { name: 'Load from URL', desc: 'Load a model from a URL with timeout and basic error handling.' },
        { name: 'Save / Load project', desc: 'Save scene, camera views, hotspots, and settings; restore saved projects.' },
        { name: 'Drag & drop', desc: 'Drop model files or folders onto the viewer to load.' }
      ]
    },
    {
      title: 'Modeling & Scene',
      icon: '🗂️',
      features: [
        { name: 'Objects panel', desc: 'Scene hierarchy (tree/table), visibility, selection, rename, frame in view, sort.' },
        { name: 'Transform panel', desc: 'Position, rotation, scale; move/rotate/scale modes; pivot; bounding box.' },
        { name: 'Rooms panel', desc: 'List and color rooms/spaces from DXF/IFC; frame room; room metadata.' },
        { name: 'Primitives & polygon drawing', desc: 'Add box, sphere, plane, etc.; draw polygons on surfaces with snap and spline.' },
        { name: 'Material & texture management', desc: 'Per-material controls; texture slots; merge/extract/assign; optimization (mesh simplification).' },
        { name: 'Edge enhancement & smoothing', desc: 'Sub-object selection; edge smoothing; smoothing panel; OSM 3D ground (Streets GL).' }
      ]
    },
    {
      title: 'Lighting & Environment',
      icon: '💡',
      features: [
        { name: 'Lighting panel', desc: 'Ambient; directional/sun lights; shadows (on/off, intensity, bias, map size); shadow plane; HDR.' },
        { name: 'HDR environment', desc: 'Load HDR for reflections and background; intensity; ground projection for correct shadows.' },
        { name: 'Shadow options', desc: 'Cascaded shadow maps (CSM), radius, adaptive settings; shadow map viewer (debug).' },
        { name: 'Weather / time', desc: 'Time of day; north offset; optional sync with Streets GL sun; standalone weather when map is off.' }
      ]
    },
    {
      title: 'Rendering & Quality',
      icon: '✨',
      features: [
        { name: 'Rendering quality panel', desc: 'Pixel ratio, anisotropy, logarithmic depth, high-performance GPU, vsync, max FPS, upscaling.' },
        { name: 'Post-processing', desc: 'Bloom, LUT, anamorphic, SSS, SSR, tone mapping, color grading (exposure, contrast, etc.).' },
        { name: 'Rendering effects', desc: 'Fog, fire, particles, atmospheric, lens flare, bloom, motion blur (UI toggles).' },
        { name: 'Path tracer', desc: 'GPU/CPU path tracing; bounces, samples, resolution presets (1080p–8K); denoise; HDR/ground projection.' },
        { name: 'Dynamic sky & atmosphere', desc: 'Procedural sky with sun/moon; LUT-based atmosphere and haze.' }
      ]
    },
    {
      title: 'Presentation & Camera',
      icon: '📷',
      features: [
        { name: 'Camera views panel', desc: 'Save/load camera positions; name and thumbnail; static view, video, or panorama type.' },
        { name: 'Camera actions', desc: 'Fit view to selection or scene; reset scene; quick camera menu.' },
        { name: 'View export', desc: 'Export as image (720p–4K); export as video; export 360° panorama (2K–8K equirectangular).' },
        { name: 'Scene snapshot & screenshot', desc: 'Export/import scene snapshot; capture current view as image; fullscreen; shortcuts overlay; stats.' }
      ]
    },
    {
      title: 'Hotspots & Web Export',
      icon: '📍',
      features: [
        { name: 'Hotspots panel', desc: 'Add 3D hotspots; connect line to object or custom endpoint; icon (emoji, symbol, custom image).' },
        { name: 'Hotspot content', desc: 'Text, image, YouTube, video, HTML; panel open/closed; formatting (font, size, color, alignment).' },
        { name: 'Web export panel', desc: 'Export standalone web presentation: model, HDR, camera views, animations; presentation mode; quality; texture compression; ZIP or separate files.' }
      ]
    },
    {
      title: 'Integration & External',
      icon: '🔗',
      features: [
        { name: 'Revit connection', desc: 'Connect to Revit sync server (HTTP + WebSocket); list sessions; load model from Revit; live updates.' },
        { name: 'Streets GL', desc: 'Optional map overlay; 3D buildings; sun direction sync; lat/lon/zoom for ground; toggle UI and interactivity.' },
        { name: 'Places panel', desc: 'Experimental places/locations (under consideration).' }
      ]
    },
    {
      title: 'Viewer & UX',
      icon: '🎮',
      features: [
        { name: 'Orbit controls', desc: 'Rotate, pan, zoom around scene or selection.' },
        { name: 'Selection & transform gizmo', desc: 'Click to select; marquee selection; on-screen move/rotate/scale handles.' },
        { name: 'Floating panels', desc: 'Draggable, stackable panels; minimize; anchor left/right.' },
        { name: 'Keyboard shortcuts, toasts, project persistence', desc: 'Fit view, reset, undo/redo, camera views; missing texture dialog; save/load project.' }
      ]
    }
  ]

  return (
    <section id="features" className="features">
      <div className="section-header">
        <h2 className="section-title">Features</h2>
        <p className="section-subtitle">
          Grouped by: Files & formats, Modeling, Lighting & rendering, Presentation & export, Integrations
        </p>
      </div>
      <div className="features-grid">
        {featureCategories.map((category, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{category.icon}</div>
            <h3 className="feature-title">{category.title}</h3>
            <ul className="feature-list">
              {category.features.map((feature, fIdx) => (
                <li key={fIdx} className="feature-item">
                  <span className="feature-name">{feature.name}</span>
                  <span className="feature-desc">{feature.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

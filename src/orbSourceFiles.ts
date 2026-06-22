import heroOrbTsx from './components/HeroOrb.tsx?raw'
import heroOrbCss from './components/HeroOrb.css?raw'
import orbInteriorShader from './components/orbInteriorShader.ts?raw'
import orbInteriorCanvas from './components/OrbInteriorCanvas.tsx?raw'

export interface OrbSourceFile {
  name: string
  path: string
  content: string
}

export const ORB_SOURCE_FILES: OrbSourceFile[] = [
  { name: 'HeroOrb.tsx', path: 'src/components/HeroOrb.tsx', content: heroOrbTsx },
  { name: 'HeroOrb.css', path: 'src/components/HeroOrb.css', content: heroOrbCss },
  {
    name: 'orbInteriorShader.ts',
    path: 'src/components/orbInteriorShader.ts',
    content: orbInteriorShader,
  },
  {
    name: 'OrbInteriorCanvas.tsx',
    path: 'src/components/OrbInteriorCanvas.tsx',
    content: orbInteriorCanvas,
  },
]

export function getOrbSourceBundle(): string {
  return ORB_SOURCE_FILES.map(
    (file) => `// ─── ${file.path} ───\n\n${file.content.trim()}\n`,
  ).join('\n')
}

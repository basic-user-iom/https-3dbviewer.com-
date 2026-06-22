import { useEffect, useRef } from 'react'
import {
  orbInteriorVertex,
  orbInteriorFragment,
  orbInteriorVertexES100,
  orbInteriorFragmentES100,
} from './orbInteriorShader'

interface OrbInteriorCanvasProps {
  width: number
  height: number
}

export default function OrbInteriorCanvas({ width, height }: OrbInteriorCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // WebGL context options per MDN/WebGL2Fundamentals: non-premultiplied alpha so
    // fragment output composites correctly; preserveDrawingBuffer so canvas isn't cleared
    const contextOptions = {
      alpha: true,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    }
    const gl2 = canvas.getContext('webgl2', contextOptions) as WebGL2RenderingContext | null
    const gl =
      gl2 ?? (canvas.getContext('webgl', contextOptions) as WebGLRenderingContext | null)
    if (!gl) return

    const isWebGL2 = gl2 != null

    const compileShader = (source: string, type: number): WebGLShader | null => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Orb interior shader compile:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = compileShader(
      isWebGL2 ? orbInteriorVertex : orbInteriorVertexES100,
      gl.VERTEX_SHADER,
    )
    const fs = compileShader(
      isWebGL2 ? orbInteriorFragment : orbInteriorFragmentES100,
      gl.FRAGMENT_SHADER,
    )
    if (!vs || !fs) return

    const program = gl.createProgram()
    if (!program) return
    // MDN: "Always enable vertex attrib 0 as an array" — on macOS nothing draws if attrib 0 isn't enabled
    gl.bindAttribLocation(program, 0, 'position')
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Orb interior program link:', gl.getProgramInfoLog(program))
      return
    }

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1])
    const vbo = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW)

    let raf = 0
    const startTime = performance.now() / 1000

    const render = () => {
      if (!canvas.parentElement) return
      gl.useProgram(program)

      gl.bindBuffer(gl.ARRAY_BUFFER, vbo)
      gl.enableVertexAttribArray(0)
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)

      const iResolutionLoc = gl.getUniformLocation(program, 'iResolution')
      const iTimeLoc = gl.getUniformLocation(program, 'iTime')
      gl.uniform3f(iResolutionLoc, width, height, 1)
      gl.uniform1f(iTimeLoc, performance.now() / 1000 - startTime)

      gl.viewport(0, 0, width, height)
      gl.clearColor(0, 0, 0, 0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.enable(gl.BLEND)
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      gl.flush()

      raf = requestAnimationFrame(render)
    }

    render()
    return () => cancelAnimationFrame(raf)
  }, [width, height])

  return (
    <canvas
      ref={canvasRef}
      className="hero-orb-interior"
      width={width}
      height={height}
      aria-hidden
    />
  )
}

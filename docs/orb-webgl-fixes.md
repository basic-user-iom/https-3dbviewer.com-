# Orb WebGL Interior — Analysis & Fixes

Analysis used **Perplexity** and **MDN / WebGL2Fundamentals** to fix the orb interior shader not showing. Below are the issues and the code examples from the internet that were applied.

---

## 1. Vertex attrib 0 must be enabled (macOS / desktop OpenGL)

**Source:** [MDN WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)

> "Always enable vertex attrib 0 as an array. If you draw without vertex attrib 0 enabled as an array, you will force the browser to do complicated emulation when running on desktop OpenGL (such as on macOS). **Nothing gets drawn if vertex attrib 0 is not array-enabled.**"

**Fix:** Bind `position` to location 0 and enable attrib 0:

```javascript
// Before linkProgram
gl.bindAttribLocation(program, 0, 'position');
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);

// In render loop — use location 0 explicitly
gl.enableVertexAttribArray(0);
gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
```

---

## 2. WebGL context options (alpha / compositing)

**Source:** [WebGL2Fundamentals – WebGL and Alpha](https://webgl2fundamentals.org/webgl/lessons/webgl-and-alpha.html)

> "Tell WebGL you want it composited with **non-premultiplied alpha** … The default is true [for premultipliedAlpha]."

**Source:** Web search (context options)

> "**preserveDrawingBuffer** (default: false) — By default, the browser clears the WebGL canvas after compositing. Set to **true** to preserve the drawing buffer between frames."

**Fix:** Use non-premultiplied alpha and preserve buffer:

```javascript
gl = canvas.getContext("webgl2", {
  alpha: true,
  premultipliedAlpha: false,
  preserveDrawingBuffer: true
});
```

---

## 3. Flush after drawing

**Source:** [MDN WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)

> "Call **flush()** when expecting results such as queries, or at completion of a rendering frame. … When not using RAF, use webgl.flush(). Because RAF is directly followed by the frame boundary, an explicit webgl.flush() isn't really needed with RAF."

**Fix:** Call `gl.flush()` after `drawArrays` so the frame is submitted (helps on some drivers):

```javascript
gl.drawArrays(gl.TRIANGLES, 0, 6);
gl.flush();
```

---

## 4. WebGL 1 fragment precision

**Source:** [MDN WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices)

> "In WebGL 1, **highp float support is optional in fragment shaders**. Using highp precision unconditionally … will prevent your content from working on some older mobile hardware."

**Fix:** Use conditional precision in the ES 100 fragment shader:

```glsl
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
```

---

## Files changed

- **`src/components/OrbInteriorCanvas.tsx`** — Context options, `bindAttribLocation(0, 'position')`, use attrib 0 in the loop, `gl.flush()`.
- **`src/components/orbInteriorShader.ts`** — ES 100 fragment shader: `#ifdef GL_FRAGMENT_PRECISION_HIGH` block.

---

## References

| Topic | URL |
|-------|-----|
| WebGL best practices | https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices |
| WebGL and Alpha | https://webgl2fundamentals.org/webgl/lessons/webgl-and-alpha.html |
| getContext options | https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext |

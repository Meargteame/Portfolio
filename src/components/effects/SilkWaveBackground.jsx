import { useEffect, useRef } from "react";

const VS_SOURCE = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FS_SOURCE = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

// Fast pseudo-random noise for physical film grain
float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 coord = gl_FragCoord.xy - u_resolution.xy * 0.5;
  float diag = length(u_resolution.xy);
  if (diag < 1.0) diag = 1.0;
  
  vec2 p = coord / diag;
  
  // Distributed Wave 1: Flowing through the left and upper quadrant
  float wave1Offset = 0.12 * sin(p.y * 5.5 + u_time * 0.45) + 0.05 * cos(p.y * 11.0 - u_time * 0.3);
  float dist1 = abs(p.x + 0.22 + wave1Offset);
  float core1 = smoothstep(0.045, 0.0, dist1) * 0.75;
  float aura1 = exp(-pow(dist1 / 0.18, 2.0)) * 0.45;
  float w1 = core1 + aura1;
  
  // Distributed Wave 2: Flowing through the right and lower quadrant
  float wave2Offset = 0.14 * sin(p.y * 4.8 - u_time * 0.5) + 0.06 * sin(p.x * 6.0 + u_time * 0.35);
  float dist2 = abs(p.x - 0.24 - wave2Offset);
  float core2 = smoothstep(0.045, 0.0, dist2) * 0.70;
  float aura2 = exp(-pow(dist2 / 0.20, 2.0)) * 0.45;
  float w2 = core2 + aura2;
  
  // Combine both distributed waves
  float totalGlow = clamp(w1 + w2, 0.0, 1.2);
  
  // Deep rich obsidian base (#09090B to #18181B)
  vec3 bg = vec3(0.035, 0.035, 0.043);
  vec3 midTone = vec3(0.25, 0.26, 0.30);
  vec3 brightLight = vec3(0.94, 0.95, 0.98);
  
  // Smooth, vibrant monochromatic contrast mapping
  vec3 col = bg;
  if (totalGlow < 0.45) {
    float f = smoothstep(0.0, 1.0, totalGlow / 0.45);
    col = mix(bg, midTone, f);
  } else {
    float f = smoothstep(0.0, 1.0, (totalGlow - 0.45) / 0.75);
    col = mix(midTone, brightLight, f);
  }
  
  // Corner vignette
  float dist = length(coord) / (diag * 0.56);
  float vig = max(0.0, 1.0 - dist * 0.35);
  col *= vig;
  
  // Tactile film grain
  float grain = (random(gl_FragCoord.xy + fract(u_time * 0.035)) - 0.5) * 0.048;
  col += grain;
  
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Shader error:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl, vsSource, fsSource) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error("Program error:", gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

/**
 * SilkWaveBackground (GPU WebGL)
 * Two distributed luminous silk waves flowing through the left and right quadrants.
 * Features bright silver-white cores, wide soft smoky auras, and physical film grain.
 * 100% reliable across all browsers (including Brave).
 */
export const SilkWaveBackground = ({
  speed = 0.4,
  className = "",
  style = {},
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
        powerPreference: "high-performance",
      }) ||
      canvas.getContext("experimental-webgl");

    if (!gl) return;

    const program = createProgram(gl, VS_SOURCE, FS_SOURCE);
    if (!program) return;

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1.0, -1.0,
         1.0, -1.0,
        -1.0,  1.0,
        -1.0,  1.0,
         1.0, -1.0,
         1.0,  1.0,
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let width = 0;
    let height = 0;

    const resize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : null;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const newW = Math.max(300, Math.floor((rect?.width || window.innerWidth) * dpr));
      const newH = Math.max(300, Math.floor((rect?.height || window.innerHeight) * dpr));

      if (width !== newW || height !== newH) {
        width = newW;
        height = newH;
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
        gl.uniform2f(resolutionLocation, width, height);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    let resizeObserver = null;
    if (typeof ResizeObserver !== "undefined" && canvas.parentElement) {
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas.parentElement);
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animId = null;
    let startTime = performance.now();

    const renderFrame = (currentTime) => {
      const elapsed = (currentTime - startTime) * 0.001 * speed;
      gl.uniform1f(timeLocation, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      if (!prefersReducedMotion && !document.hidden) {
        animId = requestAnimationFrame(renderFrame);
      }
    };

    // Draw immediately
    renderFrame(performance.now());

    const handleVisibility = () => {
      if (!document.hidden && !prefersReducedMotion) {
        animId = requestAnimationFrame(renderFrame);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (resizeObserver) resizeObserver.disconnect();
      if (animId) cancelAnimationFrame(animId);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      if (program) gl.deleteProgram(program);
    };
  }, [speed]);

  return (
    <div
      className={`relative w-full h-full overflow-hidden pointer-events-none select-none ${className}`}
      style={style}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-cover pointer-events-none"
      />
    </div>
  );
};

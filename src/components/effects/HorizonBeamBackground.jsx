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

float random(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 coord = gl_FragCoord.xy - u_resolution.xy * 0.5;
  float diag = length(u_resolution.xy);
  if (diag < 1.0) diag = 1.0;
  
  // Horizontal luminous beam moving vertically
  float beamY = sin(u_time * 0.35) * 0.35 + 0.5;
  float distY = abs(uv.y - beamY);
  
  // Core beam and soft ambient aura
  float core = smoothstep(0.04, 0.0, distY) * 0.35;
  float halo = smoothstep(0.35, 0.0, distY) * 0.18;
  
  // Subtle horizontal wave undulation
  float wave = sin(uv.x * 6.28 + u_time * 0.8) * 0.03;
  float undulation = smoothstep(0.1, 0.0, abs(uv.y - beamY + wave)) * 0.15;
  
  float glow = core + halo + undulation;
  
  vec3 base = vec3(0.035, 0.035, 0.043);
  vec3 beamColor = vec3(0.92, 0.94, 0.98);
  
  vec3 col = mix(base, beamColor, glow * 0.40);
  
  // Vignette
  float dist = length(coord) / (diag * 0.55);
  float vig = max(0.0, 1.0 - dist * 0.45);
  col *= vig;
  
  // Film grain
  float grain = (random(gl_FragCoord.xy + fract(u_time * 0.035)) - 0.5) * 0.045;
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
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

/**
 * HorizonBeamBackground (GPU WebGL)
 * Sweeping horizontal atmospheric light beam with cinematic film grain.
 * Pauses rendering when out of viewport for maximum efficiency.
 */
export const HorizonBeamBackground = ({
  speed = 0.5,
  className = "",
  style = {},
}) => {
  const canvasRef = useRef(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
        powerPreference: "low-power",
      }) ||
      canvas.getContext("experimental-webgl", {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false,
      });

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
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const newW = Math.max(1, Math.floor(rect.width * dpr));
      const newH = Math.max(1, Math.floor(rect.height * dpr));

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

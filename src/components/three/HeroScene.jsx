import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function generateParticlePositions(count) {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = (i * 137.5) % (Math.PI * 2);
    const phi = Math.acos(2 * ((i * 0.618033988749895) % 1) - 1);
    const r = 2 + ((i * 0.1) % 3);
    pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pos[i * 3 + 2] = r * Math.cos(phi);
  }
  return pos;
}

function Particles({ count = 200 }) {
  const mesh = useRef();
  const positions = useMemo(() => generateParticlePositions(count), [count]);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.02;
      mesh.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function MainShape({ mouse }) {
  const mesh = useRef();
  const material = useRef();

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.06;
      mesh.current.rotation.y += delta * 0.1;

      if (mouse.current) {
        mesh.current.rotation.x += (mouse.current.y * 0.3 - mesh.current.rotation.x) * 0.015;
        mesh.current.rotation.y += (mouse.current.x * 0.3 - mesh.current.rotation.y) * 0.015;
      }

      if (material.current) {
        material.current.emissiveIntensity = 0.05 + Math.sin(Date.now() * 0.001) * 0.02;
      }
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[1, 0.35, 200, 32]} />
        <meshPhysicalMaterial
          ref={material}
          color="#ffffff"
          metalness={0.95}
          roughness={0.1}
          clearcoat={0.4}
          clearcoatRoughness={0.15}
          envMapIntensity={2}
          emissive="#444444"
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

function Scene({ mouse }) {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-4, -3, -2]} intensity={0.3} color="#888888" />
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#ffffff" />
      <MainShape mouse={mouse} />
      <Particles count={200} />
      <ContactShadows position={[0, -1.8, 0]} opacity={0.3} scale={6} blur={3} far={4} />
      <Environment preset="studio" />
    </>
  );
}

export function HeroScene() {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  return (
    <div className="w-full h-full" onPointerMove={handlePointerMove}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}

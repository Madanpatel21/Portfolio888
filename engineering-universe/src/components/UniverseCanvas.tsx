import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles, Trail } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { domains } from "../data";

function createSurfaceTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");
  if (!ctx) return new THREE.CanvasTexture(canvas);
  const gradient = ctx.createLinearGradient(0, 0, 1024, 512);
  gradient.addColorStop(0, "#071a36");
  gradient.addColorStop(0.48, "#123b61");
  gradient.addColorStop(1, "#071326");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1024, 512);
  ctx.globalAlpha = 0.72;
  for (let i = 0; i < 95; i++) {
    const x = (i * 137.5) % 1024;
    const y = (i * 71.7) % 512;
    const rx = 12 + (i % 7) * 7;
    const ry = 5 + (i % 5) * 4;
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, (i % 9) * 0.22, 0, Math.PI * 2);
    ctx.fillStyle = i % 3 === 0 ? "#55c7c2" : "#2d7890";
    ctx.fill();
  }
  ctx.globalAlpha = 0.2;
  ctx.strokeStyle = "#a7e6f5";
  ctx.lineWidth = 1;
  for (let x = 0; x < 1024; x += 32) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 512); ctx.stroke();
  }
  for (let y = 0; y < 512; y += 32) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(1024, y); ctx.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function PlanetSurface() {
  const group = useRef<THREE.Group>(null);
  const texture = useMemo(createSurfaceTexture, []);
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.055;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.12) * 0.025;
    }
  });
  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.02, 96, 96]} />
        <meshPhysicalMaterial map={texture} roughness={0.42} metalness={0.28} clearcoat={0.8} clearcoatRoughness={0.2} />
      </mesh>
      <mesh scale={1.035}>
        <sphereGeometry args={[1.02, 96, 96]} />
        <meshBasicMaterial color="#5bd8f2" side={THREE.BackSide} transparent opacity={0.12} />
      </mesh>
      <mesh scale={1.075}>
        <sphereGeometry args={[1.02, 96, 96]} />
        <meshBasicMaterial color="#5b8dff" side={THREE.BackSide} transparent opacity={0.055} />
      </mesh>
      <mesh rotation={[0.9, 0.15, 0.18]}>
        <torusGeometry args={[1.43, 0.012, 12, 220]} />
        <meshPhysicalMaterial color="#b7d8ff" metalness={0.82} roughness={0.24} emissive="#274b91" emissiveIntensity={0.25} />
      </mesh>
      <mesh rotation={[1.13, -0.5, 0.35]}>
        <torusGeometry args={[1.58, 0.006, 8, 220]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[0.25, 0.7, 0.2]}>
        <torusGeometry args={[1.18, 0.004, 8, 180]} />
        <meshBasicMaterial color="#75d9e8" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Satellite({ index, color }: { index: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const angle = (index / domains.length) * Math.PI * 2;
  const radius = index % 2 ? 2.55 : 2.12;
  const position = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle * 1.65) * 0.72, Math.sin(angle) * radius);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 0.55 + index) * 0.075;
      ref.current.rotation.y += 0.002 + index * 0.00012;
    }
  });
  return (
    <Float speed={0.45 + index * 0.035} rotationIntensity={0.12} floatIntensity={0.12}>
      <group ref={ref} position={position}>
        <mesh>
          <icosahedronGeometry args={[0.16 + (index % 3) * 0.035, 2]} />
          <meshPhysicalMaterial color={color} metalness={0.82} roughness={0.2} clearcoat={1} emissive={color} emissiveIntensity={0.18} />
        </mesh>
        <mesh scale={1.34}>
          <icosahedronGeometry args={[0.16 + (index % 3) * 0.035, 1]} />
          <meshBasicMaterial color={color} wireframe transparent opacity={0.32} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.29, 0.006, 6, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.65} />
        </mesh>
        <pointLight color={color} intensity={0.55} distance={1.6} />
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050914"]} />
      <fog attach="fog" args={["#050914", 8, 18]} />
      <ambientLight intensity={0.62} />
      <hemisphereLight args={["#b9d9ff", "#071020", 1.1]} />
      <directionalLight position={[4, 5, 6]} intensity={3.2} color="#d8e8ff" />
      <pointLight position={[-4, 2, -3]} intensity={26} color="#587dff" />
      <pointLight position={[3, -3, 2]} intensity={14} color="#9c70ff" />
      <Stars radius={70} depth={45} count={2600} factor={2.4} saturation={0.35} fade speed={0.22} />
      <Sparkles count={150} scale={10} size={2} speed={0.16} opacity={0.5} color="#b8d9ff" />
      <group position={[0, 0, 0]}>
        <PlanetSurface />
        {domains.map((domain, index) => <Satellite key={domain.id} index={index} color={domain.color} />)}
      </group>
      <mesh rotation={[Math.PI / 2.4, 0.1, 0.3]}>
        <torusGeometry args={[3.2, 0.003, 6, 240]} />
        <meshBasicMaterial color="#7197df" transparent opacity={0.25} />
      </mesh>
    </>
  );
}

export default function UniverseCanvas() {
  return (
    <div className="universe-canvas" aria-label="Detailed animated 3D engineering multiverse with a luminous planetary core and ten orbiting technology nodes" role="img">
      <Canvas camera={{ position: [0, 0.25, 8.2], fov: 39 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <Scene />
      </Canvas>
    </div>
  );
}

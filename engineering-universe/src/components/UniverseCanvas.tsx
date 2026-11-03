import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sparkles, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { domains } from "../data";

function Planet({ index, color }: { index: number; color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  const angle = (index / domains.length) * Math.PI * 2;
  const radius = index % 2 === 0 ? 2.05 : 2.75;
  const position: [number, number, number] = [
    Math.cos(angle) * radius,
    Math.sin(angle * 1.7) * 0.55,
    Math.sin(angle) * radius,
  ];

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * (0.16 + index * 0.008);
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.07;
    }
  });

  return (
    <Float speed={1.1 + index * 0.06} rotationIntensity={0.35} floatIntensity={0.35}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[0.19 + (index % 3) * 0.045, 2]} />
        <meshStandardMaterial color={color} roughness={0.24} metalness={0.68} emissive={color} emissiveIntensity={0.42} />
      </mesh>
    </Float>
  );
}

function Core() {
  const core = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (core.current) {
      core.current.rotation.x += delta * 0.12;
      core.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <group>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.82, 2]} />
        <meshStandardMaterial color="#17264a" metalness={0.8} roughness={0.2} wireframe />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.48, 32, 32]} />
        <meshBasicMaterial color="#7896ff" transparent opacity={0.12} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <torusGeometry args={[1.13, 0.008, 8, 160]} />
        <meshBasicMaterial color="#7896ff" transparent opacity={0.65} />
      </mesh>
      <mesh rotation={[0.8, 0.4, 0.2]}>
        <torusGeometry args={[1.38, 0.006, 8, 160]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.45} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[4, 3, 4]} intensity={28} color="#7896ff" />
      <pointLight position={[-4, -2, -3]} intensity={18} color="#a78bfa" />
      <Stars radius={55} depth={35} count={1800} factor={2.2} saturation={0} fade speed={0.35} />
      <Sparkles count={90} scale={9} size={1.7} speed={0.25} opacity={0.55} color="#8da8ff" />
      <Core />
      {domains.map((domain, index) => <Planet key={domain.id} index={index} color={domain.color} />)}
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.22} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 1.8} />
    </>
  );
}

export default function UniverseCanvas() {
  return (
    <div className="universe-canvas" aria-label="Animated 3D visualization of the technology universe" role="img">
      <Canvas camera={{ position: [0, 0.4, 7.8], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}

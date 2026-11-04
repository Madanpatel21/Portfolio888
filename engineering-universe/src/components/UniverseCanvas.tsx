import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { domains } from "../data";

const planetVertex = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vPosition = position;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const planetFragment = `
  precision highp float;
  uniform float uTime;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise(vec3 x) {
    vec3 i = floor(x), f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                   mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                   mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float value = 0.0;
    float amplitude = 0.52;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.03;
      amplitude *= 0.49;
    }
    return value;
  }
  void main() {
    vec3 n = normalize(vPosition);
    float landShape = fbm(n * 5.2 + vec3(0.0, uTime * 0.006, 0.0));
    float detail = fbm(n * 19.0);
    float ridges = fbm(n * 42.0);
    float oceanDepth = smoothstep(0.18, 0.76, detail);
    vec3 deepOcean = vec3(0.008, 0.035, 0.105);
    vec3 blueOcean = vec3(0.015, 0.13, 0.31);
    vec3 shelf = vec3(0.025, 0.28, 0.48);
    vec3 land = vec3(0.13, 0.36, 0.53);
    vec3 highland = vec3(0.48, 0.69, 0.79);
    float coast = smoothstep(0.49, 0.54, landShape + (detail - 0.5) * 0.17);
    vec3 ocean = mix(deepOcean, blueOcean, oceanDepth);
    ocean = mix(ocean, shelf, smoothstep(0.52, 0.78, landShape) * 0.45);
    vec3 continent = mix(land, highland, smoothstep(0.48, 0.78, ridges) * 0.62);
    continent *= 0.78 + detail * 0.45;
    vec3 color = mix(ocean, continent, coast);
    float cityGlow = smoothstep(0.72, 0.9, fbm(n * 86.0 + vec3(3.0, 0.0, 1.0))) * coast;
    color += vec3(0.12, 0.48, 0.95) * cityGlow * 0.34;
    float cloudField = fbm(n * 12.0 + vec3(uTime * 0.012, 2.0, 0.0));
    float clouds = smoothstep(0.57, 0.73, cloudField) * 0.48;
    color = mix(color, vec3(0.72, 0.86, 0.98), clouds);
    vec3 lightDir = normalize(vec3(-0.72, 0.38, 0.58));
    float diffuse = max(dot(normalize(vNormal), lightDir), 0.0);
    float terminator = smoothstep(-0.18, 0.42, dot(normalize(vNormal), lightDir));
    float fresnel = pow(1.0 - max(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 0.0), 2.4);
    color *= 0.12 + diffuse * 1.22;
    color += vec3(0.035, 0.22, 0.55) * fresnel * 1.4;
    color *= mix(0.34, 1.0, terminator);
    gl_FragColor = vec4(color, 1.0);
  }
`;

function Planet() {
  const group = useRef<THREE.Group>(null);
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 } },
    vertexShader: planetVertex,
    fragmentShader: planetFragment,
  }), []);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.045;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.09) * 0.018;
    }
    material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.18, 160, 160]} />
        <primitive object={material} attach="material" />
      </mesh>
      <mesh scale={1.035}>
        <sphereGeometry args={[1.18, 128, 128]} />
        <meshBasicMaterial color="#4ba9ff" side={THREE.BackSide} transparent opacity={0.14} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh scale={1.09}>
        <sphereGeometry args={[1.18, 96, 96]} />
        <meshBasicMaterial color="#1267d8" side={THREE.BackSide} transparent opacity={0.075} blending={THREE.AdditiveBlending} />
      </mesh>
      <mesh scale={1.012}>
        <sphereGeometry args={[1.18, 128, 128]} />
        <meshPhysicalMaterial color="#a8d7ff" roughness={0.22} metalness={0.1} transparent opacity={0.08} clearcoat={1} />
      </mesh>
      <mesh rotation={[0.92, 0.18, 0.22]}>
        <torusGeometry args={[1.68, 0.012, 12, 280]} />
        <meshPhysicalMaterial color="#b9e2ff" metalness={0.9} roughness={0.18} emissive="#1b65c7" emissiveIntensity={0.55} />
      </mesh>
      <mesh rotation={[1.12, -0.48, 0.32]}>
        <torusGeometry args={[1.83, 0.004, 8, 280]} />
        <meshBasicMaterial color="#4e9cff" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[0.2, 0.72, 0.12]}>
        <torusGeometry args={[1.38, 0.003, 8, 240]} />
        <meshBasicMaterial color="#9bd7ff" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function Satellite({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);
  const angle = (index / domains.length) * Math.PI * 2;
  const radius = index % 2 ? 2.72 : 2.28;
  const position = new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle * 1.65) * 0.78, Math.sin(angle) * radius);
  const color = index % 3 === 0 ? "#d8efff" : index % 3 === 1 ? "#4c9cff" : "#1764c7";
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 0.48 + index) * 0.09;
    ref.current.rotation.y += 0.002 + index * 0.0001;
  });
  return (
    <Float speed={0.38 + index * 0.025} rotationIntensity={0.14} floatIntensity={0.1}>
      <group ref={ref} position={position}>
        <mesh>
          <icosahedronGeometry args={[0.13 + (index % 3) * 0.025, 2]} />
          <meshPhysicalMaterial color={color} metalness={0.88} roughness={0.16} clearcoat={1} emissive={color} emissiveIntensity={0.22} />
        </mesh>
        <mesh scale={1.42}>
          <icosahedronGeometry args={[0.13 + (index % 3) * 0.025, 1]} />
          <meshBasicMaterial color="#9ed4ff" wireframe transparent opacity={0.26} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.24, 0.004, 6, 64]} />
          <meshBasicMaterial color="#70baff" transparent opacity={0.7} />
        </mesh>
        <pointLight color="#398cff" intensity={0.42} distance={1.25} />
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#020817"]} />
      <fog attach="fog" args={["#020817", 9, 20]} />
      <ambientLight intensity={0.42} />
      <hemisphereLight args={["#d9edff", "#030b1d", 1.15]} />
      <directionalLight position={[-4, 3, 5]} intensity={3.5} color="#e1f2ff" />
      <pointLight position={[-4, 1, -3]} intensity={24} color="#1675e8" />
      <pointLight position={[3, -3, 2]} intensity={11} color="#2d9bff" />
      <Stars radius={80} depth={55} count={3600} factor={2.6} saturation={0.08} fade speed={0.18} />
      <Sparkles count={190} scale={11} size={1.8} speed={0.13} opacity={0.46} color="#b9ddff" />
      <group>
        <Planet />
        {domains.map((domain, index) => <Satellite key={domain.id} index={index} />)}
      </group>
      <mesh rotation={[Math.PI / 2.35, 0.12, 0.28]}>
        <torusGeometry args={[3.48, 0.0025, 6, 280]} />
        <meshBasicMaterial color="#4e9cff" transparent opacity={0.26} />
      </mesh>
    </>
  );
}

export default function UniverseCanvas() {
  return (
    <div className="universe-canvas" aria-label="Animated blue multiverse: procedural ocean planet with atmospheric scattering, cloud formations, orbital rings and ten technology satellites" role="img">
      <Canvas camera={{ position: [0, 0.22, 8.1], fov: 38 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <Scene />
      </Canvas>
    </div>
  );
}

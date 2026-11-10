import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import {
  createGrassTexture,
  createBasaltSoilTexture,
  createRockTexture,
  createLateriteTexture,
  createRoofTileTexture,
  createWoodBarkTexture,
  createWaterNormalMap,
} from '../../utils/proceduralTextures';

interface SceneProps {
  activeLandmarkIndex: number;
  onSelectLandmark: (index: number) => void;
  language: 'vi' | 'en';
}

export const MINI_LANDMARKS = [
  {
    id: 'van-mieu',
    name: { vi: 'Văn Miếu Trấn Biên', en: 'Tran Bien Temple' },
    pos: [-2.2, 0.55, 1.3] as [number, number, number],
    color: '#D4AF37',
    type: 'temple',
  },
  {
    id: 'thanh-co',
    name: { vi: 'Thành Cổ Biên Hòa', en: 'Bien Hoa Citadel' },
    pos: [-1.5, 0.45, -0.7] as [number, number, number],
    color: '#B85B38',
    type: 'citadel',
  },
  {
    id: 'buu-long',
    name: { vi: 'KDL Bửu Long', en: 'Buu Long Scenic Area' },
    pos: [-0.6, 0.6, 2.1] as [number, number, number],
    color: '#2D8A68',
    type: 'karst',
  },
  {
    id: 'giang-dien',
    name: { vi: 'Thác Giang Điền', en: 'Giang Dien Falls' },
    pos: [1.6, 0.45, 0.6] as [number, number, number],
    color: '#3B82F6',
    type: 'waterfall',
  },
  {
    id: 'cat-tien',
    name: { vi: 'VQG Cát Tiên', en: 'Cat Tien Forest' },
    pos: [2.5, 0.8, -1.8] as [number, number, number],
    color: '#10B981',
    type: 'forest',
  },
];

// 1. VAN MIEU TRAN BIEN - Photorealistic Vietnamese Temple Model
function RealisticMiniVanMieu({ pos, roofTex }: { pos: [number, number, number]; roofTex: THREE.Texture }) {
  return (
    <group position={pos} scale={0.42}>
      {/* Stone Courtyard Terrace */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[2.2, 0.2, 2.2]} />
        <meshStandardMaterial color="#64748B" roughness={0.85} />
      </mesh>
      {/* Courtyard Red Paving Brick */}
      <mesh position={[0, 0.21, 0]} receiveShadow>
        <boxGeometry args={[2.0, 0.02, 2.0]} />
        <meshStandardMaterial color="#7F1D1D" roughness={0.7} />
      </mesh>

      {/* Main Dai Thanh Sanctuary (Chính Điện) */}
      <group position={[0, 0.2, -0.4]}>
        {/* Vermilion Lacquered Wood Pillars */}
        {[-0.7, -0.25, 0.25, 0.7].map((x) =>
          [-0.35, 0.35].map((z) => (
            <mesh key={`p-${x}-${z}`} position={[x, 0.5, z]} castShadow>
              <cylinderGeometry args={[0.045, 0.05, 0.9, 12]} />
              <meshStandardMaterial color="#7C2D12" roughness={0.4} />
            </mesh>
          ))
        )}

        {/* Lower curved roof with authentic eaves */}
        <mesh position={[0, 0.95, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[1.5, 0.4, 4]} />
          <meshStandardMaterial map={roofTex} roughness={0.4} />
        </mesh>

        {/* Upper pavilion tier */}
        <mesh position={[0, 1.25, 0]}>
          <boxGeometry args={[0.8, 0.45, 0.8]} />
          <meshStandardMaterial color="#991B1B" roughness={0.5} />
        </mesh>

        {/* Upper curved roof */}
        <mesh position={[0, 1.55, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[1.15, 0.45, 4]} />
          <meshStandardMaterial map={roofTex} roughness={0.35} />
        </mesh>

        {/* Golden Dragon Ridge Crest & Inscribed Plaque */}
        <mesh position={[0, 1.82, 0]}>
          <boxGeometry args={[0.6, 0.08, 0.08]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 1.25, 0.41]}>
          <boxGeometry args={[0.4, 0.15, 0.02]} />
          <meshStandardMaterial color="#D97706" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>

      {/* Tam Quan Gate (Cổng Tam Quan) */}
      <group position={[0, 0.2, 0.8]}>
        <mesh position={[-0.45, 0.35, 0]}>
          <boxGeometry args={[0.25, 0.7, 0.12]} />
          <meshStandardMaterial color="#7F1D1D" />
        </mesh>
        <mesh position={[0.45, 0.35, 0]}>
          <boxGeometry args={[0.25, 0.7, 0.12]} />
          <meshStandardMaterial color="#7F1D1D" />
        </mesh>
        {/* Gate roof */}
        <mesh position={[0, 0.75, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1.1, 0.25, 4]} />
          <meshStandardMaterial map={roofTex} />
        </mesh>
      </group>

      {/* Stone turtle carrying stele (Rùa đội bia đá) */}
      <group position={[-0.7, 0.25, 0.3]} scale={0.6}>
        <mesh position={[0, 0.05, 0]}>
          <boxGeometry args={[0.3, 0.1, 0.4]} />
          <meshStandardMaterial color="#475569" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.22, 0]}>
          <boxGeometry args={[0.16, 0.28, 0.05]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>
      </group>
    </group>
  );
}

// 2. THANH CO BIEN HOA - Realistic Laterite Citadel Model
function RealisticMiniCitadel({ pos, lateriteTex }: { pos: [number, number, number]; lateriteTex: THREE.Texture }) {
  return (
    <group position={pos} scale={0.4}>
      {/* Octagonal Laterite Citadel Wall (Thành đá ong) */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.4, 1.7, 0.7, 8]} />
        <meshStandardMaterial map={lateriteTex} roughness={0.9} />
      </mesh>

      {/* Rampart Walkway on top of wall */}
      <mesh position={[0, 0.71, 0]} receiveShadow>
        <cylinderGeometry args={[1.15, 1.15, 0.04, 8]} />
        <meshStandardMaterial color="#451A03" roughness={0.9} />
      </mesh>

      {/* Bastion Corner Turrets with embrasures */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const a = (i * Math.PI) / 4;
        return (
          <mesh key={i} position={[Math.cos(a) * 1.35, 0.8, Math.sin(a) * 1.35]} castShadow>
            <boxGeometry args={[0.3, 0.22, 0.3]} />
            <meshStandardMaterial map={lateriteTex} />
          </mesh>
        );
      })}

      {/* Arched front gate */}
      <mesh position={[0, 0.4, 1.45]}>
        <boxGeometry args={[0.4, 0.6, 0.3]} />
        <meshStandardMaterial color="#1F1510" />
      </mesh>

      {/* Historic bronze cannon on rampart */}
      <group position={[0.7, 0.78, 0.7]} rotation={[0, -Math.PI / 4, 0]} scale={0.5}>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.6]} />
          <meshStandardMaterial color="#57381F" />
        </mesh>
        <mesh position={[0, 0.25, 0]} rotation={[0.1, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.8, 12]} />
          <meshStandardMaterial color="#B45309" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>

      {/* Flagpole & Royal Southern Flag */}
      <mesh position={[0, 1.25, 0]}>
        <cylinderGeometry args={[0.02, 0.025, 1.2]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.9} />
      </mesh>
      <mesh position={[0.22, 1.65, 0]}>
        <boxGeometry args={[0.38, 0.22, 0.015]} />
        <meshStandardMaterial color="#DC2626" roughness={0.6} />
      </mesh>
    </group>
  );
}

// 3. BUU LONG - Realistic Karst Monoliths & Lake
function RealisticMiniBuuLong({ pos, rockTex }: { pos: [number, number, number]; rockTex: THREE.Texture }) {
  return (
    <group position={pos} scale={0.44}>
      {/* Long An Lake Basin with deep reflection */}
      <mesh position={[0, 0.06, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[1.65, 32]} />
        <meshStandardMaterial color="#0369A1" roughness={0.08} metalness={0.85} transparent opacity={0.88} />
      </mesh>

      {/* Main Karst Peak (Núi Long Ẩn) with layered rock strata */}
      <group position={[-0.35, 0, -0.2]}>
        <mesh position={[0, 0.85, 0]} castShadow receiveShadow>
          <coneGeometry args={[0.7, 1.7, 8]} />
          <meshStandardMaterial map={rockTex} roughness={0.95} />
        </mesh>
        {/* Subsidiary jagged granite shelves */}
        <mesh position={[0.35, 0.5, 0.25]} castShadow>
          <coneGeometry args={[0.45, 1.0, 7]} />
          <meshStandardMaterial map={rockTex} roughness={0.95} />
        </mesh>

        {/* Buu Phong Pagoda perched high on the cliff */}
        <group position={[0, 1.72, 0]} scale={0.7}>
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.35, 0.3, 0.35]} />
            <meshStandardMaterial color="#D97706" />
          </mesh>
          <mesh position={[0, 0.38, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[0.45, 0.25, 4]} />
            <meshStandardMaterial color="#DC2626" />
          </mesh>
        </group>
      </group>

      {/* Secondary Karst Island Rock */}
      <mesh position={[0.55, 0.55, 0.4]} castShadow receiveShadow>
        <coneGeometry args={[0.45, 1.1, 7]} />
        <meshStandardMaterial map={rockTex} roughness={0.95} />
      </mesh>

      {/* Arched Stone Bridge across the lake */}
      <mesh position={[0.1, 0.18, 0.9]} rotation={[0, 0.35, 0]}>
        <boxGeometry args={[1.0, 0.06, 0.2]} />
        <meshStandardMaterial color="#CBD5E1" roughness={0.8} />
      </mesh>

      {/* Water Lilies on lake surface */}
      {[-0.5, 0.4, 0.8].map((lx, i) => (
        <mesh key={i} position={[lx, 0.08, (i - 1) * 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.08, 8]} />
          <meshStandardMaterial color="#15803D" roughness={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// 4. CAT TIEN - Authentic Giant 500-Year-Old Tung Tree & Rainforest
function RealisticMiniCatTien({ pos, barkTex }: { pos: [number, number, number]; barkTex: THREE.Texture }) {
  return (
    <group position={pos} scale={0.46}>
      {/* Massive Buttress Roots (Rễ bạnh vè) sprawling out */}
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (i * Math.PI * 2) / 5;
        return (
          <group key={i} position={[Math.cos(a) * 0.4, 0.35, Math.sin(a) * 0.4]} rotation={[0, a, 0]}>
            <mesh castShadow>
              <boxGeometry args={[0.45, 0.7, 0.09]} />
              <meshStandardMaterial map={barkTex} roughness={0.95} />
            </mesh>
          </group>
        );
      })}

      {/* Towering massive trunk */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.42, 1.6, 12]} />
        <meshStandardMaterial map={barkTex} roughness={0.9} />
      </mesh>

      {/* 5-tiered lush rainforest canopy with varying organic tones */}
      <mesh position={[0, 1.85, 0]} castShadow>
        <sphereGeometry args={[0.85, 12, 12]} />
        <meshStandardMaterial color="#064E3B" roughness={0.85} />
      </mesh>
      <mesh position={[-0.45, 1.55, 0.35]} castShadow>
        <sphereGeometry args={[0.55, 10, 10]} />
        <meshStandardMaterial color="#047857" roughness={0.85} />
      </mesh>
      <mesh position={[0.45, 1.6, -0.3]} castShadow>
        <sphereGeometry args={[0.6, 10, 10]} />
        <meshStandardMaterial color="#059669" roughness={0.85} />
      </mesh>
      <mesh position={[0.1, 2.25, 0.1]} castShadow>
        <sphereGeometry args={[0.5, 10, 10]} />
        <meshStandardMaterial color="#10B981" roughness={0.85} />
      </mesh>

      {/* Hanging vines / lianas */}
      {[-0.3, 0.3].map((vx, i) => (
        <mesh key={i} position={[vx, 1.2, (i - 0.5) * 0.4]}>
          <cylinderGeometry args={[0.012, 0.012, 0.8]} />
          <meshStandardMaterial color="#14532D" />
        </mesh>
      ))}

      {/* Understory tropical ferns & palms */}
      {[-0.8, 0.8].map((fx, i) => (
        <group key={i} position={[fx, 0.2, (i - 0.5) * 0.7]} scale={0.4}>
          <mesh position={[0, 0.3, 0]}>
            <coneGeometry args={[0.4, 0.6, 6]} />
            <meshStandardMaterial color="#166534" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// 5. GIANG DIEN - Realistic Cascading Basalt Waterfall
function RealisticMiniGiangDien({ pos }: { pos: [number, number, number] }) {
  const waterRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (waterRef.current) {
      // Flowing water shimmer
      const mat = waterRef.current.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.85 + Math.sin(clock.getElapsedTime() * 8) * 0.08;
    }
  });

  return (
    <group position={pos} scale={0.42}>
      {/* Wet black volcanic basalt rock shelves */}
      <mesh position={[0, 0.25, -0.5]} castShadow receiveShadow>
        <boxGeometry args={[1.7, 0.5, 0.9]} />
        <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, 0.6, -0.9]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.6, 0.7]} />
        <meshStandardMaterial color="#0F172A" roughness={0.3} metalness={0.4} />
      </mesh>
      <mesh position={[0, 1.0, -1.2]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.7, 0.6]} />
        <meshStandardMaterial color="#090D16" roughness={0.3} metalness={0.4} />
      </mesh>

      {/* Cascading Twin Waterfall Water Streams */}
      <mesh ref={waterRef} position={[0, 0.68, -0.75]} rotation={[0.55, 0, 0]}>
        <planeGeometry args={[1.1, 1.2]} />
        <meshStandardMaterial
          color="#E0F2FE"
          roughness={0.05}
          metalness={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>

      {/* White foam splash at base */}
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.95, 24]} />
        <meshStandardMaterial color="#38BDF8" roughness={0.2} transparent opacity={0.85} />
      </mesh>
      <mesh position={[0, 0.09, -0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.5, 16]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.4} transparent opacity={0.7} />
      </mesh>

      {/* Wooden suspension bridge */}
      <mesh position={[0, 0.9, 0.2]}>
        <boxGeometry args={[1.6, 0.04, 0.2]} />
        <meshStandardMaterial color="#78350F" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Realistic Dong Nai River with animated ripples and depth gradient
function AnimatedDongNaiRiver({ normalMap }: { normalMap: THREE.Texture }) {
  const riverRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (normalMap) {
      normalMap.offset.x += delta * 0.06;
      normalMap.offset.y += delta * 0.04;
    }
  });

  return (
    <group position={[-0.3, 0.18, 0.15]}>
      {/* River surface with animated normal map */}
      <mesh ref={riverRef} rotation={[-Math.PI / 2, 0, -0.42]} receiveShadow>
        <planeGeometry args={[1.5, 9.2, 48, 48]} />
        <meshStandardMaterial
          color="#0284C7"
          roughness={0.08}
          metalness={0.85}
          normalMap={normalMap}
          normalScale={new THREE.Vector2(0.35, 0.35)}
          transparent
          opacity={0.92}
        />
      </mesh>
      {/* Riverbed pebbles and silt */}
      <mesh position={[0, -0.06, 0]} rotation={[-Math.PI / 2, 0, -0.42]}>
        <planeGeometry args={[1.7, 9.4]} />
        <meshStandardMaterial color="#1E293B" roughness={0.95} />
      </mesh>
    </group>
  );
}

// Atmospheric golden dust particles
function AtmosphericSparks() {
  const points = useMemo(() => {
    const coords = [];
    for (let i = 0; i < 110; i++) {
      const x = (Math.random() - 0.5) * 12;
      const y = Math.random() * 4.5 + 0.2;
      const z = (Math.random() - 0.5) * 12;
      coords.push(x, y, z);
    }
    return new Float32Array(coords);
  }, []);

  const ref = useRef<THREE.Points>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#FDE047"
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export const DongNaiMiniatureScene: React.FC<SceneProps> = ({
  activeLandmarkIndex,
  onSelectLandmark,
  language,
}) => {
  const groupRef = useRef<THREE.Group>(null!);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Generate procedural textures with memoization
  const textures = useMemo(() => {
    return {
      grass: createGrassTexture(),
      basalt: createBasaltSoilTexture(),
      rock: createRockTexture(),
      laterite: createLateriteTexture(),
      roof: createRoofTileTexture(),
      bark: createWoodBarkTexture(),
      waterNormal: createWaterNormalMap(),
    };
  }, []);

  // Gentle idle diorama floating
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.05 - 0.2;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.035;
    }
  });

  return (
    <>
      {/* Lighting for Natural Depth & Warm Sunlight */}
      <ambientLight intensity={0.65} color="#E0F2FE" />
      <directionalLight
        position={[9, 14, 7]}
        intensity={2.1}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
        color="#FFF6E0"
      />
      {/* Secondary fill light for shadows */}
      <directionalLight position={[-8, 6, -6]} intensity={0.5} color="#38BDF8" />
      {/* Warm golden ground bounce light */}
      <pointLight position={[0, -0.5, 0]} intensity={0.8} color="#C5A059" distance={10} />

      <AtmosphericSparks />

      <group ref={groupRef} position={[0, -0.2, 0]}>
        {/* Sculpted Geological Base: Layered Basalt & Bedrock */}
        <mesh position={[0, -0.75, 0]} receiveShadow>
          <cylinderGeometry args={[5.3, 3.8, 1.4, 48]} />
          <meshStandardMaterial
            map={textures.basalt}
            roughness={0.95}
            color="#3D1A10"
          />
        </mesh>

        {/* Top Organic Terrain Surface: Fertile Forest Grass */}
        <mesh position={[0, 0.08, 0]} receiveShadow>
          <cylinderGeometry args={[5.3, 5.3, 0.28, 48]} />
          <meshStandardMaterial
            map={textures.grass}
            roughness={0.85}
          />
        </mesh>

        {/* Natural Undulating Mountain Ridges & Forest Hills */}
        <mesh position={[-2.9, 0.75, -1.4]} castShadow receiveShadow>
          <coneGeometry args={[2.0, 1.6, 9]} />
          <meshStandardMaterial map={textures.grass} roughness={0.88} />
        </mesh>
        <mesh position={[2.9, 0.95, -1.9]} castShadow receiveShadow>
          <coneGeometry args={[2.3, 2.0, 9]} />
          <meshStandardMaterial map={textures.grass} roughness={0.88} />
        </mesh>
        <mesh position={[3.1, 0.65, 1.5]} castShadow receiveShadow>
          <coneGeometry args={[1.7, 1.3, 8]} />
          <meshStandardMaterial map={textures.grass} roughness={0.88} />
        </mesh>

        {/* Animated Meandering Dong Nai River with Normal Waves */}
        <AnimatedDongNaiRiver normalMap={textures.waterNormal} />

        {/* Realistic Scattered Tropical Trees & Palms */}
        {[
          [-3.3, 0.35, 0.6],
          [-2.7, 0.35, 2.7],
          [-1.1, 0.35, 3.5],
          [0.8, 0.35, 2.9],
          [2.5, 0.35, 2.3],
          [3.6, 0.35, -0.1],
          [1.6, 0.35, -2.9],
          [-0.6, 0.35, -3.3],
          [-2.4, 0.35, -2.6],
        ].map((tPos, idx) => (
          <group key={idx} position={tPos as [number, number, number]} scale={0.32}>
            {/* Trunk */}
            <mesh position={[0, 0.7, 0]} castShadow>
              <cylinderGeometry args={[0.08, 0.14, 1.4, 8]} />
              <meshStandardMaterial map={textures.bark} roughness={0.9} />
            </mesh>
            {/* Multi-tier green crown */}
            <mesh position={[0, 1.5, 0]} castShadow>
              <sphereGeometry args={[0.65, 8, 8]} />
              <meshStandardMaterial color={idx % 2 === 0 ? '#15803D' : '#166534'} roughness={0.8} />
            </mesh>
            <mesh position={[0, 1.85, 0]} castShadow>
              <sphereGeometry args={[0.45, 8, 8]} />
              <meshStandardMaterial color={idx % 2 === 0 ? '#16A34A' : '#15803D'} roughness={0.8} />
            </mesh>
          </group>
        ))}

        {/* 5 Photorealistic Miniature Landmarks */}
        <RealisticMiniVanMieu pos={MINI_LANDMARKS[0].pos} roofTex={textures.roof} />
        <RealisticMiniCitadel pos={MINI_LANDMARKS[1].pos} lateriteTex={textures.laterite} />
        <RealisticMiniBuuLong pos={MINI_LANDMARKS[2].pos} rockTex={textures.rock} />
        <RealisticMiniGiangDien pos={MINI_LANDMARKS[3].pos} />
        <RealisticMiniCatTien pos={MINI_LANDMARKS[4].pos} barkTex={textures.bark} />

        {/* Interactive Floating 3D Badges */}
        {MINI_LANDMARKS.map((lm, index) => {
          const isActive = activeLandmarkIndex === index;
          const isHovered = hoveredIndex === index;

          return (
            <group key={lm.id} position={[lm.pos[0], lm.pos[1] + 1.25, lm.pos[2]]}>
              <Float speed={2.5} rotationIntensity={0.15} floatIntensity={0.35}>
                <Html
                  position={[0, 0, 0]}
                  center
                  distanceFactor={10}
                  zIndexRange={[100, 0]}
                >
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectLandmark(index);
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`cursor-pointer transition-all duration-300 transform select-none ${
                      isActive || isHovered ? 'scale-110 -translate-y-1' : 'scale-95 hover:scale-105'
                    }`}
                  >
                    <div
                      className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border shadow-2xl transition-all ${
                        isActive
                          ? 'bg-heritage-gold text-heritage-emerald-dark border-white font-bold ring-2 ring-white/70 shadow-glow-gold'
                          : 'bg-black/80 text-heritage-ivory border-heritage-gold/50 hover:border-heritage-gold'
                      }`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full animate-ping inline-block"
                        style={{ backgroundColor: lm.color }}
                      />
                      <span className="text-xs whitespace-nowrap font-semibold tracking-wide drop-shadow">
                        {language === 'vi' ? lm.name.vi : lm.name.en}
                      </span>
                    </div>
                  </div>
                </Html>
              </Float>
            </group>
          );
        })}
      </group>
    </>
  );
};

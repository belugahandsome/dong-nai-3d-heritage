import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { Landmark, Hotspot3D } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Sun, Moon, Maximize2, Minimize2, RotateCcw, Info, Box } from 'lucide-react';
import {
  createRoofTileTexture,
  createLateriteTexture,
  createRockTexture,
  createWoodBarkTexture,
} from '../../utils/proceduralTextures';

interface Landmark3DViewerProps {
  landmark: Landmark;
  onClose: () => void;
}

// 1. VAN MIEU TRAN BIEN 3D SCENE
function VanMieuModel({ wireframe, onSelectHotspot, hotspots, roofTex }: { wireframe: boolean; onSelectHotspot: (h: Hotspot3D) => void; hotspots: Hotspot3D[]; roofTex?: THREE.Texture }) {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Stone terrace base */}
      <mesh position={[0, 0.2, 0]} receiveShadow>
        <boxGeometry args={[7, 0.4, 7]} />
        <meshStandardMaterial color="#78716C" roughness={0.9} wireframe={wireframe} />
      </mesh>
      {/* Red brick courtyard paving */}
      <mesh position={[0, 0.41, 0]} receiveShadow>
        <boxGeometry args={[6.6, 0.04, 6.6]} />
        <meshStandardMaterial color="#991B1B" roughness={0.7} wireframe={wireframe} />
      </mesh>

      {/* Main Dai Thanh Dien Sanctuary (Back) */}
      <group position={[0, 0.4, -1.8]}>
        {/* Foundation */}
        <mesh position={[0, 0.25, 0]}>
          <boxGeometry args={[4.2, 0.5, 2.4]} />
          <meshStandardMaterial color="#E5E7EB" roughness={0.8} wireframe={wireframe} />
        </mesh>
        {/* Red wooden pillars */}
        {[-1.8, -0.9, 0, 0.9, 1.8].map((x) =>
          [-0.9, 0.9].map((z) => (
            <mesh key={`p-${x}-${z}`} position={[x, 1.2, z]} castShadow>
              <cylinderGeometry args={[0.08, 0.09, 1.5, 16]} />
              <meshStandardMaterial color="#78350F" roughness={0.4} wireframe={wireframe} />
            </mesh>
          ))
        )}
        {/* Main curved terracotta roof */}
        <mesh position={[0, 2.3, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
          <coneGeometry args={[3.2, 1.1, 4]} />
          <meshStandardMaterial map={wireframe ? undefined : roofTex} color={roofTex ? '#E2E8F0' : '#B91C1C'} roughness={0.35} wireframe={wireframe} />
        </mesh>
        {/* Golden Dragon Ridge ornament */}
        <mesh position={[0, 2.9, 0]}>
          <boxGeometry args={[2.2, 0.18, 0.15]} />
          <meshStandardMaterial color="#FBBF24" metalness={0.8} roughness={0.2} wireframe={wireframe} />
        </mesh>
      </group>

      {/* Khue Van Cac Central Pavilion */}
      <group position={[0, 0.4, 0.5]}>
        {[-0.8, 0.8].map((x) =>
          [-0.8, 0.8].map((z) => (
            <mesh key={`k-${x}-${z}`} position={[x, 0.9, z]}>
              <cylinderGeometry args={[0.07, 0.08, 1.8, 16]} />
              <meshStandardMaterial color="#92400E" roughness={0.4} wireframe={wireframe} />
            </mesh>
          ))
        )}
        {/* Mid terrace floor */}
        <mesh position={[0, 1.8, 0]}>
          <boxGeometry args={[2.0, 0.15, 2.0]} />
          <meshStandardMaterial color="#78350F" wireframe={wireframe} />
        </mesh>
        {/* Upper pavilion chamber */}
        <mesh position={[0, 2.3, 0]}>
          <boxGeometry args={[1.4, 0.9, 1.4]} />
          <meshStandardMaterial color="#B45309" wireframe={wireframe} />
        </mesh>
        {/* Upper double roof tier */}
        <mesh position={[0, 2.9, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1.7, 0.6, 4]} />
          <meshStandardMaterial color="#DC2626" roughness={0.3} wireframe={wireframe} />
        </mesh>
        <mesh position={[0, 3.4, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[1.2, 0.5, 4]} />
          <meshStandardMaterial color="#EF4444" roughness={0.3} wireframe={wireframe} />
        </mesh>
        {/* Gold pearl on apex */}
        <mesh position={[0, 3.75, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} wireframe={wireframe} />
        </mesh>
      </group>

      {/* Tam Quan Gate (Front) */}
      <group position={[0, 0.4, 2.8]}>
        {/* Gate wall with 3 arch openings */}
        <mesh position={[-1.2, 0.9, 0]}>
          <boxGeometry args={[0.9, 1.8, 0.3]} />
          <meshStandardMaterial color="#991B1B" wireframe={wireframe} />
        </mesh>
        <mesh position={[1.2, 0.9, 0]}>
          <boxGeometry args={[0.9, 1.8, 0.3]} />
          <meshStandardMaterial color="#991B1B" wireframe={wireframe} />
        </mesh>
        {/* Arch roof */}
        <mesh position={[0, 2.0, 0]}>
          <boxGeometry args={[3.8, 0.3, 0.6]} />
          <meshStandardMaterial color="#78350F" wireframe={wireframe} />
        </mesh>
        <mesh position={[0, 2.3, 0]} rotation={[0, Math.PI / 4, 0]}>
          <coneGeometry args={[2.4, 0.5, 4]} />
          <meshStandardMaterial color="#B91C1C" wireframe={wireframe} />
        </mesh>
      </group>

      {/* Lotus Pond (Hồ Tịnh Quang) */}
      <group position={[-2.4, 0.42, 1.2]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.9, 24]} />
          <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.8} transparent opacity={0.9} wireframe={wireframe} />
        </mesh>
        {/* Lotus leaves */}
        {[-0.3, 0.2, 0].map((lx, i) => (
          <mesh key={i} position={[lx, 0.02, (i - 1) * 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.15, 12]} />
            <meshStandardMaterial color="#15803D" wireframe={wireframe} />
          </mesh>
        ))}
      </group>

      {/* Interactive 3D Hotspot Pins */}
      {hotspots.map((h) => (
        <group key={h.id} position={h.position}>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
            <Html center distanceFactor={8}>
              <button
                onClick={() => onSelectHotspot(h)}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs shadow-glow-gold hover:scale-125 transition-transform ring-2 ring-white"
                title={h.title.vi}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-heritage-emerald-dark animate-pulse" />
              </button>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

// 2. THANH CO BIEN HOA (CITADEL) 3D SCENE
function ThanhCoModel({ wireframe, onSelectHotspot, hotspots, lateriteTex }: { wireframe: boolean; onSelectHotspot: (h: Hotspot3D) => void; hotspots: Hotspot3D[]; lateriteTex?: THREE.Texture }) {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Grassy ground */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[8, 0.2, 8]} />
        <meshStandardMaterial color="#2E5C38" roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Octagonal Laterite Citadel Walls */}
      <mesh position={[0, 0.9, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[2.8, 3.2, 1.6, 8]} />
        <meshStandardMaterial map={wireframe ? undefined : lateriteTex} color={lateriteTex ? '#FFFFFF' : '#78350F'} roughness={0.95} wireframe={wireframe} />
      </mesh>
      {/* Interior Courtyard cut */}
      <mesh position={[0, 1.72, 0]} receiveShadow>
        <cylinderGeometry args={[2.3, 2.3, 0.05, 8]} />
        <meshStandardMaterial color="#92400E" roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Historical Bastion Corner Turrets */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i * Math.PI) / 4;
        const x = Math.cos(angle) * 3.0;
        const z = Math.sin(angle) * 3.0;
        return (
          <group key={i} position={[x, 1.8, z]}>
            <mesh castShadow>
              <boxGeometry args={[0.7, 0.5, 0.7]} />
              <meshStandardMaterial color="#854D0E" wireframe={wireframe} />
            </mesh>
          </group>
        );
      })}

      {/* Historic Cannon Model on Artillery Rampart */}
      <group position={[1.8, 1.9, 1.8]} rotation={[0, -Math.PI / 4, 0]} scale={0.7}>
        {/* Wooden carriage */}
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.5, 0.3, 1.0]} />
          <meshStandardMaterial color="#451A03" wireframe={wireframe} />
        </mesh>
        {/* Wheels */}
        {[-0.32, 0.32].map((wx) => (
          <mesh key={wx} position={[wx, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.25, 0.25, 0.08, 16]} />
            <meshStandardMaterial color="#78350F" wireframe={wireframe} />
          </mesh>
        ))}
        {/* Bronze cannon barrel */}
        <mesh position={[0, 0.45, 0.1]} rotation={[0.1, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.14, 1.4, 16]} />
          <meshStandardMaterial color="#B45309" metalness={0.8} roughness={0.3} wireframe={wireframe} />
        </mesh>
      </group>

      {/* Front Arched Entrance Gate */}
      <group position={[0, 1.2, 3.1]}>
        <mesh position={[-0.7, 0.5, 0]}>
          <boxGeometry args={[0.6, 1.8, 0.6]} />
          <meshStandardMaterial color="#78350F" wireframe={wireframe} />
        </mesh>
        <mesh position={[0.7, 0.5, 0]}>
          <boxGeometry args={[0.6, 1.8, 0.6]} />
          <meshStandardMaterial color="#78350F" wireframe={wireframe} />
        </mesh>
        <mesh position={[0, 1.6, 0]}>
          <boxGeometry args={[2.0, 0.4, 0.6]} />
          <meshStandardMaterial color="#9A3412" wireframe={wireframe} />
        </mesh>
      </group>

      {/* Central Command Mast / Historical Flag */}
      <mesh position={[0, 2.7, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 2.2]} />
        <meshStandardMaterial color="#E5E7EB" metalness={0.9} wireframe={wireframe} />
      </mesh>
      <mesh position={[0.45, 3.4, 0]}>
        <boxGeometry args={[0.8, 0.45, 0.02]} />
        <meshStandardMaterial color="#DC2626" wireframe={wireframe} />
      </mesh>

      {/* Interactive 3D Hotspot Pins */}
      {hotspots.map((h) => (
        <group key={h.id} position={h.position}>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
            <Html center distanceFactor={8}>
              <button
                onClick={() => onSelectHotspot(h)}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs shadow-glow-gold hover:scale-125 transition-transform ring-2 ring-white"
                title={h.title.vi}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-heritage-emerald-dark animate-pulse" />
              </button>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

// 3. BUU LONG SCENIC AREA 3D SCENE
function BuuLongModel({ wireframe, onSelectHotspot, hotspots, rockTex }: { wireframe: boolean; onSelectHotspot: (h: Hotspot3D) => void; hotspots: Hotspot3D[]; rockTex?: THREE.Texture }) {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Long An Lake Water Basin */}
      <mesh position={[0, 0.3, 0]} receiveShadow>
        <cylinderGeometry args={[4.2, 4.4, 0.4, 36]} />
        <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.8} transparent opacity={0.85} wireframe={wireframe} />
      </mesh>

      {/* Primary Karst Mountain (Long An Mountain) */}
      <group position={[-1.2, 0.4, -0.6]}>
        <mesh castShadow receiveShadow>
          <coneGeometry args={[1.5, 3.2, 9]} />
          <meshStandardMaterial map={wireframe ? undefined : rockTex} color={rockTex ? '#FFFFFF' : '#4B5563'} roughness={0.9} wireframe={wireframe} />
        </mesh>
        {/* Subsidiary jagged granite shelves */}
        <mesh position={[0.6, 0.4, 0.4]}>
          <coneGeometry args={[0.9, 2.0, 7]} />
          <meshStandardMaterial color="#374151" roughness={0.9} wireframe={wireframe} />
        </mesh>
        {/* Buu Phong Pagoda on cliff edge */}
        <group position={[0, 2.1, 0]}>
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.7, 0.4, 0.7]} />
            <meshStandardMaterial color="#D97706" wireframe={wireframe} />
          </mesh>
          <mesh position={[0, 0.6, 0]} rotation={[0, Math.PI / 4, 0]}>
            <coneGeometry args={[0.7, 0.4, 4]} />
            <meshStandardMaterial color="#DC2626" wireframe={wireframe} />
          </mesh>
        </group>
      </group>

      {/* Secondary Karst Monolith Peak */}
      <mesh position={[1.6, 0.4, 0.8]} castShadow receiveShadow>
        <coneGeometry args={[1.1, 2.4, 8]} />
        <meshStandardMaterial color="#475569" roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Curved Romantic Footbridge spanning the lake */}
      <mesh position={[0.4, 0.6, 1.8]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[2.2, 0.1, 0.4]} />
        <meshStandardMaterial color="#E5E7EB" wireframe={wireframe} />
      </mesh>

      {/* Little boat on reflection lake */}
      <mesh position={[-0.8, 0.4, 1.2]} rotation={[0, 0.8, 0]}>
        <boxGeometry args={[0.4, 0.15, 0.8]} />
        <meshStandardMaterial color="#92400E" wireframe={wireframe} />
      </mesh>

      {/* Pine trees on shores */}
      {[
        [-2.8, 0.5, 1.5],
        [2.8, 0.5, -1.2],
        [-2.4, 0.5, -2.2],
      ].map((tp, idx) => (
        <group key={idx} position={tp as [number, number, number]}>
          <mesh position={[0, 0.4, 0]}>
            <cylinderGeometry args={[0.08, 0.12, 0.8]} />
            <meshStandardMaterial color="#78350F" wireframe={wireframe} />
          </mesh>
          <mesh position={[0, 1.1, 0]}>
            <coneGeometry args={[0.6, 1.2, 8]} />
            <meshStandardMaterial color="#14532D" wireframe={wireframe} />
          </mesh>
        </group>
      ))}

      {/* Hotspots */}
      {hotspots.map((h) => (
        <group key={h.id} position={h.position}>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
            <Html center distanceFactor={8}>
              <button
                onClick={() => onSelectHotspot(h)}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs shadow-glow-gold hover:scale-125 transition-transform ring-2 ring-white"
                title={h.title.vi}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-heritage-emerald-dark animate-pulse" />
              </button>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

// 4. CAT TIEN NATIONAL PARK 3D SCENE
function CatTienModel({ wireframe, onSelectHotspot, hotspots, barkTex }: { wireframe: boolean; onSelectHotspot: (h: Hotspot3D) => void; hotspots: Hotspot3D[]; barkTex?: THREE.Texture }) {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Forest floor terrain */}
      <mesh position={[0, 0.2, 0]} receiveShadow>
        <boxGeometry args={[8, 0.4, 8]} />
        <meshStandardMaterial color="#1C3825" roughness={0.95} wireframe={wireframe} />
      </mesh>

      {/* Upper Dong Nai River bend */}
      <mesh position={[1.8, 0.42, 0]} rotation={[-Math.PI / 2, 0, 0.2]}>
        <planeGeometry args={[1.6, 7.8]} />
        <meshStandardMaterial color="#0284C7" roughness={0.15} metalness={0.7} transparent opacity={0.88} wireframe={wireframe} />
      </mesh>

      {/* Famous 500-Year-Old Giant Tung Tree (Cây Tung đại thụ) */}
      <group position={[-1.2, 0.4, -0.6]}>
        {/* Massive Trunk */}
        <mesh position={[0, 1.6, 0]} castShadow>
          <cylinderGeometry args={[0.45, 0.85, 3.2, 12]} />
          <meshStandardMaterial map={wireframe ? undefined : barkTex} color={barkTex ? '#FFFFFF' : '#57381F'} roughness={0.9} wireframe={wireframe} />
        </mesh>
        {/* Monumental Buttress Roots */}
        {[0, 1, 2, 3, 4].map((i) => {
          const a = (i * Math.PI * 2) / 5;
          return (
            <mesh key={i} position={[Math.cos(a) * 0.9, 0.7, Math.sin(a) * 0.9]} rotation={[0, a, 0]}>
              <boxGeometry args={[0.9, 1.4, 0.16]} />
              <meshStandardMaterial color="#45270F" roughness={0.9} wireframe={wireframe} />
            </mesh>
          );
        })}
        {/* Colossal 5-tier canopy */}
        <mesh position={[0, 3.4, 0]}>
          <sphereGeometry args={[1.7, 14, 14]} />
          <meshStandardMaterial color="#064E3B" roughness={0.8} wireframe={wireframe} />
        </mesh>
        <mesh position={[-0.8, 3.0, 0.6]}>
          <sphereGeometry args={[1.1, 10, 10]} />
          <meshStandardMaterial color="#047857" roughness={0.8} wireframe={wireframe} />
        </mesh>
        <mesh position={[0.7, 3.1, -0.5]}>
          <sphereGeometry args={[1.2, 10, 10]} />
          <meshStandardMaterial color="#059669" roughness={0.8} wireframe={wireframe} />
        </mesh>
      </group>

      {/* Bau Sau Wetland Reeds & Lotus */}
      <group position={[1.4, 0.42, 1.2]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.2, 24]} />
          <meshStandardMaterial color="#0369A1" roughness={0.2} transparent opacity={0.85} wireframe={wireframe} />
        </mesh>
        {/* Wild Siamese Crocodile silhouette basking */}
        <mesh position={[0.2, 0.05, 0]} rotation={[0, 0.4, 0]}>
          <boxGeometry args={[0.7, 0.08, 0.18]} />
          <meshStandardMaterial color="#1E293B" wireframe={wireframe} />
        </mesh>
      </group>

      {/* Surrounding dense tropical rainforest trees */}
      {[
        [-3.0, 0.4, 1.8],
        [-2.5, 0.4, -2.6],
        [0.2, 0.4, -2.8],
        [2.6, 0.4, -2.4],
        [2.8, 0.4, 2.2],
      ].map((pos, idx) => (
        <group key={idx} position={pos as [number, number, number]} scale={0.75}>
          <mesh position={[0, 0.9, 0]}>
            <cylinderGeometry args={[0.15, 0.22, 1.8]} />
            <meshStandardMaterial color="#4A2E18" wireframe={wireframe} />
          </mesh>
          <mesh position={[0, 2.0, 0]}>
            <sphereGeometry args={[0.9, 8, 8]} />
            <meshStandardMaterial color="#065F46" wireframe={wireframe} />
          </mesh>
        </group>
      ))}

      {/* Hotspots */}
      {hotspots.map((h) => (
        <group key={h.id} position={h.position}>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
            <Html center distanceFactor={8}>
              <button
                onClick={() => onSelectHotspot(h)}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs shadow-glow-gold hover:scale-125 transition-transform ring-2 ring-white"
                title={h.title.vi}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-heritage-emerald-dark animate-pulse" />
              </button>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

// 5. GIANG DIEN WATERFALL 3D SCENE
function GiangDienModel({ wireframe, onSelectHotspot, hotspots }: { wireframe: boolean; onSelectHotspot: (h: Hotspot3D) => void; hotspots: Hotspot3D[] }) {
  return (
    <group position={[0, -0.6, 0]}>
      {/* Basalt Rock Terraces */}
      <mesh position={[0, 0.3, -1.8]} receiveShadow>
        <boxGeometry args={[6.5, 1.6, 2.5]} />
        <meshStandardMaterial color="#1F2937" roughness={0.9} wireframe={wireframe} />
      </mesh>
      <mesh position={[0, 0.1, -0.4]} receiveShadow>
        <boxGeometry args={[7.0, 1.0, 2.2]} />
        <meshStandardMaterial color="#111827" roughness={0.9} wireframe={wireframe} />
      </mesh>

      {/* Plunge Pool at base */}
      <mesh position={[0, 0.2, 1.5]} receiveShadow>
        <boxGeometry args={[7.5, 0.4, 2.8]} />
        <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.7} transparent opacity={0.88} wireframe={wireframe} />
      </mesh>

      {/* Cascading Water Streams (Chang & Nang Fall) */}
      <mesh position={[-1.4, 0.8, -0.6]} rotation={[0.5, 0, 0]}>
        <planeGeometry args={[1.6, 1.8]} />
        <meshStandardMaterial color="#E0F2FE" roughness={0.1} metalness={0.4} transparent opacity={0.92} wireframe={wireframe} />
      </mesh>
      <mesh position={[1.4, 0.8, -0.6]} rotation={[0.5, 0, 0]}>
        <planeGeometry args={[1.6, 1.8]} />
        <meshStandardMaterial color="#E0F2FE" roughness={0.1} metalness={0.4} transparent opacity={0.92} wireframe={wireframe} />
      </mesh>
      {/* Central main curtain cascade */}
      <mesh position={[0, 1.3, -1.5]} rotation={[0.6, 0, 0]}>
        <planeGeometry args={[2.0, 1.8]} />
        <meshStandardMaterial color="#BAE6FD" roughness={0.05} metalness={0.5} transparent opacity={0.95} wireframe={wireframe} />
      </mesh>

      {/* Suspension Wooden Footbridge above the stream */}
      <group position={[0, 1.6, 0.8]}>
        <mesh>
          <boxGeometry args={[5.2, 0.08, 0.5]} />
          <meshStandardMaterial color="#78350F" wireframe={wireframe} />
        </mesh>
        {/* Support Cables */}
        <mesh position={[-2.4, 0.6, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.2]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.9} wireframe={wireframe} />
        </mesh>
        <mesh position={[2.4, 0.6, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 1.2]} />
          <meshStandardMaterial color="#D1D5DB" metalness={0.9} wireframe={wireframe} />
        </mesh>
      </group>

      {/* Riverbank Bamboo & Trees */}
      {[-3.2, 3.2].map((x, i) => (
        <group key={i} position={[x, 0.6, 0]}>
          <mesh position={[0, 1.0, 0]}>
            <cylinderGeometry args={[0.12, 0.16, 2.0]} />
            <meshStandardMaterial color="#15803D" wireframe={wireframe} />
          </mesh>
          <mesh position={[0, 2.2, 0]}>
            <sphereGeometry args={[0.8, 8, 8]} />
            <meshStandardMaterial color="#16A34A" wireframe={wireframe} />
          </mesh>
        </group>
      ))}

      {/* Hotspots */}
      {hotspots.map((h) => (
        <group key={h.id} position={h.position}>
          <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5}>
            <Html center distanceFactor={8}>
              <button
                onClick={() => onSelectHotspot(h)}
                className="group relative flex items-center justify-center w-7 h-7 rounded-full bg-heritage-gold text-heritage-emerald-dark font-bold text-xs shadow-glow-gold hover:scale-125 transition-transform ring-2 ring-white"
                title={h.title.vi}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-heritage-emerald-dark animate-pulse" />
              </button>
            </Html>
          </Float>
        </group>
      ))}
    </group>
  );
}

export const Landmark3DViewer: React.FC<Landmark3DViewerProps> = ({ landmark, onClose }) => {
  const { language, t } = useLanguage();
  const [isNight, setIsNight] = useState<boolean>(false);
  const [isWireframe, setIsWireframe] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot3D | null>(null);
  const controlsRef = useRef<any>(null);

  const textures = useMemo(() => {
    return {
      roof: createRoofTileTexture(),
      laterite: createLateriteTexture(),
      rock: createRockTexture(),
      bark: createWoodBarkTexture(),
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleResetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-2 md:p-6 select-none animate-fadeIn">
      {/* Main Container */}
      <div className="relative w-full h-full max-w-7xl max-h-[92vh] bg-gradient-to-b from-[#061810] to-[#0A261A] rounded-2xl border border-heritage-gold/40 shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-heritage-gold/20 bg-heritage-emerald-dark/80 backdrop-blur-md z-20">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-heritage-gold/20 text-heritage-gold font-bold text-[10px] tracking-wider uppercase border border-heritage-gold/40">
                {t('MÔ HÌNH 3D TƯƠNG TÁC', 'INTERACTIVE 3D MODEL')}
              </span>
              <span className="text-xs text-heritage-ivory/60">
                {landmark.established}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-serif font-bold text-heritage-ivory mt-0.5">
              {language === 'vi' ? landmark.name.vi : landmark.name.en}
            </h2>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2">
            {/* Day / Night lighting toggle */}
            <button
              onClick={() => setIsNight(!isNight)}
              className={`p-2.5 rounded-xl border transition-all ${
                isNight
                  ? 'bg-indigo-950 text-yellow-300 border-indigo-500'
                  : 'bg-amber-900/40 text-amber-300 border-amber-600/40 hover:border-amber-400'
              }`}
              title={isNight ? t('Chuyển sang ban ngày', 'Switch to Day') : t('Chuyển sang ban đêm', 'Switch to Night')}
            >
              {isNight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Wireframe Toggle */}
            <button
              onClick={() => setIsWireframe(!isWireframe)}
              className={`p-2.5 rounded-xl border transition-all ${
                isWireframe
                  ? 'bg-emerald-600 text-white border-white'
                  : 'bg-black/30 text-heritage-ivory/80 border-heritage-gold/30 hover:border-heritage-gold'
              }`}
              title={t('Chế độ lưới kết cấu Wireframe', 'Toggle Wireframe Mode')}
            >
              <Box className="w-4 h-4" />
            </button>

            {/* Reset Camera */}
            <button
              onClick={handleResetCamera}
              className="p-2.5 rounded-xl border border-heritage-gold/30 bg-black/30 text-heritage-ivory/80 hover:text-white hover:border-heritage-gold transition-all"
              title={t('Đặt lại góc nhìn camera', 'Reset Camera')}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={toggleFullscreen}
              className="p-2.5 rounded-xl border border-heritage-gold/30 bg-black/30 text-heritage-ivory/80 hover:text-white hover:border-heritage-gold transition-all hidden sm:block"
              title={t('Toàn màn hình', 'Toggle Fullscreen')}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="ml-2 px-4 py-2 rounded-xl bg-heritage-ruby text-white font-semibold text-xs hover:bg-red-700 transition-all shadow-md"
            >
              {t('Đóng', 'Close')} ✕
            </button>
          </div>
        </div>

        {/* 3D Canvas Viewport */}
        <div className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing bg-radial from-slate-900 to-black">
          <Canvas shadows camera={{ position: [0, 4, 8], fov: 45 }}>
            {/* Dynamic Environment Lighting */}
            <ambientLight intensity={isNight ? 0.35 : 0.85} color={isNight ? '#818CF8' : '#FFFFFF'} />
            <directionalLight
              position={[8, 12, 6]}
              intensity={isNight ? 0.4 : 1.7}
              castShadow
              color={isNight ? '#93C5FD' : '#FFF9E6'}
            />
            {isNight && (
              <pointLight position={[0, 2.5, 0]} intensity={2.5} color="#FBBF24" distance={8} />
            )}

            <Suspense fallback={null}>
              {landmark.modelType === 'van-mieu' && (
                <VanMieuModel
                  wireframe={isWireframe}
                  onSelectHotspot={(h) => setActiveHotspot(h)}
                  hotspots={landmark.hotspots}
                  roofTex={textures.roof}
                />
              )}
              {landmark.modelType === 'thanh-co' && (
                <ThanhCoModel
                  wireframe={isWireframe}
                  onSelectHotspot={(h) => setActiveHotspot(h)}
                  hotspots={landmark.hotspots}
                  lateriteTex={textures.laterite}
                />
              )}
              {landmark.modelType === 'buu-long' && (
                <BuuLongModel
                  wireframe={isWireframe}
                  onSelectHotspot={(h) => setActiveHotspot(h)}
                  hotspots={landmark.hotspots}
                  rockTex={textures.rock}
                />
              )}
              {landmark.modelType === 'cat-tien' && (
                <CatTienModel
                  wireframe={isWireframe}
                  onSelectHotspot={(h) => setActiveHotspot(h)}
                  hotspots={landmark.hotspots}
                  barkTex={textures.bark}
                />
              )}
              {landmark.modelType === 'giang-dien' && (
                <GiangDienModel
                  wireframe={isWireframe}
                  onSelectHotspot={(h) => setActiveHotspot(h)}
                  hotspots={landmark.hotspots}
                />
              )}
            </Suspense>

            <OrbitControls
              ref={controlsRef}
              enablePan={true}
              maxPolarAngle={Math.PI / 2.05}
              minDistance={3}
              maxDistance={14}
            />
          </Canvas>

          {/* Quick Hotspot Legend List on the bottom-left */}
          <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1.5 max-w-xs">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-heritage-gold flex items-center gap-1.5 drop-shadow">
              <Info className="w-3.5 h-3.5" />
              {t('Điểm tương tác 3D (Bấm để xem)', 'Interactive Hotspots (Click to view)')}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {landmark.hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h)}
                  className={`text-[11px] px-2.5 py-1 rounded-lg border backdrop-blur-md transition-all ${
                    activeHotspot?.id === h.id
                      ? 'bg-heritage-gold text-heritage-emerald-dark font-bold border-white'
                      : 'bg-black/50 text-heritage-ivory/80 border-heritage-gold/30 hover:border-heritage-gold'
                  }`}
                >
                  {language === 'vi' ? h.title.vi : h.title.en}
                </button>
              ))}
            </div>
          </div>

          {/* Active Hotspot Info Card Flyout */}
          {activeHotspot && (
            <div className="absolute top-4 right-4 z-30 max-w-sm p-5 rounded-2xl bg-heritage-emerald-dark/95 border border-heritage-gold/60 backdrop-blur-xl shadow-2xl text-heritage-ivory animate-scaleUp">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h4 className="text-base font-serif font-bold text-heritage-gold">
                  {language === 'vi' ? activeHotspot.title.vi : activeHotspot.title.en}
                </h4>
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs text-heritage-ivory/70 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-heritage-ivory/90 leading-relaxed">
                {language === 'vi' ? activeHotspot.description.vi : activeHotspot.description.en}
              </p>
            </div>
          )}

          {/* Helper instructions badge */}
          <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-[11px] text-heritage-ivory/70">
            <span>🖱️ {t('Kéo chuột: Xoay', 'Drag: Rotate')}</span>
            <span>•</span>
            <span>🔍 {t('Cuộn: Thu phóng', 'Scroll: Zoom')}</span>
            <span>•</span>
            <span>🖐️ {t('Chuột phải: Di chuyển', 'Right-click: Pan')}</span>
          </div>
        </div>

        {/* Bottom Educational Drawer Strip */}
        <div className="p-4 px-6 bg-heritage-emerald-dark/90 border-t border-heritage-gold/20 flex flex-col md:flex-row md:items-center justify-between gap-4 z-20">
          <div className="flex-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-heritage-gold mb-1">
              {t('ĐẶC TRƯNG KIẾN TRÚC & HỆ SINH THÁI', 'ARCHITECTURE & ECOSYSTEM')}
            </h3>
            <p className="text-xs text-heritage-ivory/80 line-clamp-2">
              {language === 'vi' ? landmark.architectureOrEcosystem.vi : landmark.architectureOrEcosystem.en}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-heritage-ivory/70 border-t md:border-t-0 md:border-l border-white/10 pt-2 md:pt-0 md:pl-4">
            <div>
              <span className="text-heritage-gold block font-semibold">{t('Giờ mở cửa', 'Hours')}:</span>
              <span>{landmark.visitorInfo.openingHours}</span>
            </div>
            <div>
              <span className="text-heritage-gold block font-semibold">{t('Vé tham quan', 'Tickets')}:</span>
              <span>{language === 'vi' ? landmark.visitorInfo.ticketPrice.vi : landmark.visitorInfo.ticketPrice.en}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

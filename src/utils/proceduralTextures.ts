import * as THREE from 'three';

// Helper to create HTML5 canvas and get 2D context
function createOffscreenCanvas(width: number, height: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  return { canvas, ctx };
}

// 1. Lush Vietnamese Forest Grass & Moss Texture
export function createGrassTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(512, 512);

  // Base emerald soil
  ctx.fillStyle = '#183822';
  ctx.fillRect(0, 0, 512, 512);

  // Noise layering
  for (let i = 0; i < 45000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const radius = Math.random() * 2.5 + 0.5;
    const rand = Math.random();

    if (rand < 0.4) {
      ctx.fillStyle = '#225430'; // vibrant forest green
    } else if (rand < 0.7) {
      ctx.fillStyle = '#132C1B'; // deep forest shade
    } else if (rand < 0.9) {
      ctx.fillStyle = '#316B3E'; // bright moss green
    } else {
      ctx.fillStyle = '#423321'; // rich soil humus
    }

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

// 2. Basalt Red Soil Texture (Đất đỏ bazan đặc trưng miền Đông Nam Bộ)
export function createBasaltSoilTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(512, 512);

  ctx.fillStyle = '#5A2518'; // Deep red basalt
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 35000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 2 + 0.5;
    const rand = Math.random();

    if (rand < 0.4) {
      ctx.fillStyle = '#6E2E1D';
    } else if (rand < 0.7) {
      ctx.fillStyle = '#451B11';
    } else if (rand < 0.9) {
      ctx.fillStyle = '#823824';
    } else {
      ctx.fillStyle = '#2D140C'; // volcanic dark pebble
    }

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(3, 3);
  return texture;
}

// 3. Karst Limestone & Weathered Rock Texture (Đá vôi / granite Bửu Long)
export function createRockTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(512, 512);

  ctx.fillStyle = '#374151'; // Dark slate
  ctx.fillRect(0, 0, 512, 512);

  // Horizontal strata fissures
  for (let y = 0; y < 512; y += 8) {
    const shade = 45 + Math.sin(y * 0.15) * 15 + (Math.random() * 20 - 10);
    ctx.fillStyle = `rgb(${shade}, ${shade + 4}, ${shade + 8})`;
    ctx.fillRect(0, y, 512, 6 + Math.random() * 4);
  }

  // Cracks and specks
  for (let i = 0; i < 20000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const color = Math.random() > 0.5 ? '#1F2937' : '#4B5563';
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Math.random() * 3 + 1, Math.random() * 2 + 1);
  }

  // Patches of cliff lichen / green moss
  for (let i = 0; i < 80; i++) {
    const cx = Math.random() * 512;
    const cy = Math.random() * 512;
    const rad = Math.random() * 18 + 6;
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad);
    grad.addColorStop(0, 'rgba(40, 75, 45, 0.6)');
    grad.addColorStop(1, 'rgba(40, 75, 45, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 4. Porous Laterite Stone Texture (Đá ong Thành cổ Biên Hòa)
export function createLateriteTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(512, 512);

  ctx.fillStyle = '#733718'; // Warm reddish brown
  ctx.fillRect(0, 0, 512, 512);

  // Stone block grid lines
  ctx.strokeStyle = '#3E1C0B';
  ctx.lineWidth = 3;
  const blockH = 48;
  const blockW = 96;

  for (let y = 0; y < 512; y += blockH) {
    const row = Math.floor(y / blockH);
    const offsetX = (row % 2) * (blockW / 2);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();

    for (let x = offsetX; x < 512 + blockW; x += blockW) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + blockH);
      ctx.stroke();
    }
  }

  // Porous holes characteristic of laterite (đá ong)
  for (let i = 0; i < 12000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    const r = Math.random() * 2.5 + 0.8;
    ctx.fillStyle = Math.random() > 0.4 ? '#2D1408' : '#8C4620';
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}

// 5. Authentic Vietnamese Yin-Yang Terracotta Roof Tile Texture (Ngói âm dương cổ)
export function createRoofTileTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(512, 512);

  ctx.fillStyle = '#8B2516'; // Deep terracotta
  ctx.fillRect(0, 0, 512, 512);

  // Vertical ribbed tile grooves
  const tileWidth = 16;
  for (let x = 0; x < 512; x += tileWidth) {
    const grad = ctx.createLinearGradient(x, 0, x + tileWidth, 0);
    grad.addColorStop(0, '#5C160B');
    grad.addColorStop(0.3, '#A8321D');
    grad.addColorStop(0.7, '#BD3E25');
    grad.addColorStop(1, '#4A1108');

    ctx.fillStyle = grad;
    ctx.fillRect(x, 0, tileWidth, 512);

    // Subtle horizontal joint marks
    for (let y = 0; y < 512; y += 32) {
      ctx.fillStyle = 'rgba(40, 10, 5, 0.4)';
      ctx.fillRect(x, y, tileWidth, 2);
    }
  }

  // Ancient weathered moss patina
  for (let i = 0; i < 3000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    ctx.fillStyle = Math.random() > 0.6 ? 'rgba(30, 60, 35, 0.4)' : 'rgba(230, 180, 80, 0.15)';
    ctx.fillRect(x, y, 2, 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(4, 4);
  return texture;
}

// 6. Ancient Wood Bark Texture (Vỏ cây Tung đại thụ)
export function createWoodBarkTexture(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(512, 512);

  ctx.fillStyle = '#422817'; // Rich dark brown
  ctx.fillRect(0, 0, 512, 512);

  // Deep vertical furrows
  for (let x = 0; x < 512; x += 12) {
    const width = 6 + Math.random() * 8;
    const shade = 35 + Math.random() * 30;
    ctx.fillStyle = `rgb(${shade + 10}, ${shade}, ${shade - 10})`;
    ctx.fillRect(x, 0, width, 512);

    ctx.fillStyle = '#1E120A';
    ctx.fillRect(x + width - 2, 0, 2, 512);
  }

  // Lichen & moss spots
  for (let i = 0; i < 8000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 512;
    ctx.fillStyle = Math.random() > 0.7 ? '#2D452B' : '#5E3821';
    ctx.fillRect(x, y, 2, 3);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

// 7. Water Normal Map for realistic river waves & reflections
export function createWaterNormalMap(): THREE.CanvasTexture {
  const { canvas, ctx } = createOffscreenCanvas(256, 256);
  const imgData = ctx.createImageData(256, 256);
  const data = imgData.data;

  for (let y = 0; y < 256; y++) {
    for (let x = 0; x < 256; x++) {
      const idx = (y * 256 + x) * 4;

      // Synthesize wavy normal vector (R = X normal, G = Y normal, B = Z up normal)
      const nx = Math.sin(x * 0.15) * Math.cos(y * 0.1) * 0.35 + Math.sin(x * 0.35 + y * 0.25) * 0.15;
      const ny = Math.cos(x * 0.1) * Math.sin(y * 0.15) * 0.35 + Math.cos(x * 0.25 - y * 0.35) * 0.15;

      data[idx] = Math.floor((nx + 1) * 0.5 * 255);
      data[idx + 1] = Math.floor((ny + 1) * 0.5 * 255);
      data[idx + 2] = 230; // Z upward vector
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  return texture;
}

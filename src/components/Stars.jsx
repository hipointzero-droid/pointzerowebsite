import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField({ count = 1500 }) {
  const ref = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, [count]);

  // Very slow rotation - barely noticeable
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 80;
      ref.current.rotation.y -= delta / 100;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <StarField count={1200} />
      </Canvas>
    </div>
  );
}

// Lighter version for other sections
export function StarsCanvasLight() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <StarField count={800} />
      </Canvas>
    </div>
  );
}

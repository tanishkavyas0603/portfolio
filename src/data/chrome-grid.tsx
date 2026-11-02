'use client'

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ExtrudeGeometry, Shape } from 'three'
import * as THREE from 'three'

interface BoxProps {
  position: [number, number, number];
  gridPosition: [number, number];
  hoveredBoxRef: React.RefObject<[number, number] | null>;
  rippleScale?: number;
  rippleRadius?: number;
  geometry: ExtrudeGeometry;
}

const Box = ({ 
    position, 
    gridPosition,
    hoveredBoxRef,
    rippleScale = 1.8,
    rippleRadius = 2,
    geometry
}: BoxProps) => {
    const meshRef = useRef<THREE.Mesh>(null);
    const currentScaleRef = useRef(1);

    useFrame(() => {
        if (!meshRef.current) return;
        
        let targetScale = 1;
        const hoveredBox = hoveredBoxRef.current;
        
        const isThisBoxHovered = hoveredBox && 
            gridPosition[0] === hoveredBox[0] && 
            gridPosition[1] === hoveredBox[1];
        
        if (isThisBoxHovered) {
            targetScale = 3.5;
        } else if (hoveredBox) {
            const dx = gridPosition[0] - hoveredBox[0];
            const dz = gridPosition[1] - hoveredBox[1];
            const distance = Math.sqrt(dx * dx + dz * dz);
            
            if (distance <= rippleRadius && distance > 0) {
                const falloff = Math.max(0, 1 - (distance / rippleRadius));
                const rippleEffect = falloff * rippleScale;
                targetScale = 1 + (rippleEffect * 1.5);
            }
        }
        
        const lerpFactor = 0.15;
        const newScale = currentScaleRef.current + (targetScale - currentScaleRef.current) * lerpFactor;
        currentScaleRef.current = newScale;
        
        meshRef.current.scale.z = newScale;
    });

    return (
        <mesh
            ref={meshRef}
            geometry={geometry}
            position={position}
            rotation={[Math.PI / 2, 0, 0]}
            onPointerOver={(e) => {
                e.stopPropagation();
                hoveredBoxRef.current = gridPosition;
            }}
            onPointerOut={() => {
                if (hoveredBoxRef.current === gridPosition) {
                    hoveredBoxRef.current = null;
                }
            }}
        >
            <meshStandardMaterial 
                color="#222222"
                roughness={0.4} 
                metalness={0.8}
            />
        </mesh>
    );
};

function GridOfBoxes() {
  const gridSize = 10;
  const boxWidth = 4;
  const boxLength = 4;
  const gap = 0.05;
  const spacingX = boxWidth + gap;
  const spacingZ = boxLength + gap;
  
  const hoveredBoxRef = useRef<[number, number] | null>(null);
  const rippleScale = 2.5;
  const rippleRadius = 2;
  
  const geometry = useMemo(() => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 0.8;
    
    const halfWidth = boxWidth / 2;
    const halfLength = boxLength / 2;

    shape.absarc(halfWidth - radius, halfLength - radius, radius, 0, angleStep * 1);
    shape.absarc(-halfWidth + radius, halfLength - radius, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-halfWidth + radius, -halfLength + radius, radius, angleStep * 2, angleStep * 3);
    shape.absarc(halfWidth - radius, -halfLength + radius, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 8,
      curveSegments: 8
    };

    const geom = new ExtrudeGeometry(shape, extrudeSettings);
    geom.center();
    return geom;
  }, [boxWidth, boxLength]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  const boxes = [];

  for (let x = 0; x < gridSize; x++) {
    for (let z = 0; z < gridSize; z++) {
      const posX = (x - (gridSize - 1) / 2) * spacingX;
      const posZ = (z - (gridSize - 1) / 2) * spacingZ;
      
      boxes.push(
        <Box 
          key={`${x}-${z}`} 
          position={[posX, -0.85, posZ]}
          gridPosition={[x, z]}
          hoveredBoxRef={hoveredBoxRef}
          rippleScale={rippleScale}
          rippleRadius={rippleRadius}
          geometry={geometry}
        />
      );
    }
  }

  return <>{boxes}</>;
}

export function ChromeGrid() {
  return (
    <div className="h-full w-full bg-black relative z-0">
      <Canvas camera={{ 
        position: [-9.31, 12, 24.72], 
        rotation: [-0.65, -0.2, -0.13],
        fov: 35 
      }}>
        <ambientLight intensity={1} />
        
        <directionalLight 
          position={[10, 15, 10]} 
          intensity={10}
        />
        
        <directionalLight 
          position={[-10, 10, -5]} 
          intensity={10}
        />
        
        <directionalLight 
          position={[5, -10, 15]} 
          intensity={5}
        />
        
        <pointLight 
          position={[0, 20, 3]} 
          intensity={2}
          distance={50}
        />
        
        <pointLight 
           position={[15, 5, 15]} 
           intensity={1.5}
           distance={40}
         />
                  
         <GridOfBoxes />        
      </Canvas>
    </div>
  )
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import MapOne from '@/componentsforThree/MapOne';
import MapTwo from '@/componentsforThree/MapTwo';
import React, { useEffect, useRef } from 'react';
import { BackSide } from 'three';
import { Cloud, MapControls, Sparkles, useTexture } from '@react-three/drei';

export default function Assets() {
  const texture = useTexture('/img/space.jpg');
  const mapControlRef = useRef<any>(!null);

  useEffect(() => {
    mapControlRef.current.addEventListener('change', function () {
      if (mapControlRef.current.target.z < -0.4) {
        mapControlRef.current.target.z = -0.4;
      } else if (mapControlRef.current.target.z > 0.4) {
        mapControlRef.current.target.z = 0.4;
      }
      if (mapControlRef.current.target.x < -0.4) {
        mapControlRef.current.target.x = -0.4;
      } else if (mapControlRef.current.target.x > 0.4) {
        mapControlRef.current.target.x = 0.4;
      }
    });
  });
  return (
    <group>
      <ambientLight intensity={0.7} />
      <pointLight
        position={[10, 10, 10]}
        intensity={2}
        decay={0}
      />
      <MapControls
        ref={mapControlRef}
        minDistance={6}
        maxDistance={19}
        maxPolarAngle={0.9}
      />
      <Sparkles
        scale={10}
        size={10}
        noise={2}
        color={'#60C4FD'}
      />
      <Cloud
        scale={0.07}
        position={[1, 1, -0.5]}
      />
      <Cloud
        scale={0.03}
        seed={2}
        position={[2, 1, -1]}
      />
      <Cloud
        scale={0.08}
        seed={2}
        rotation={[0, -0.8, 0]}
        position={[-1.2, 1, -1]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -1.6, 0]}
        position={[-1, 1, -0.2]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -2.2, 0]}
        position={[-1, 1, 0.4]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -2.9, 0]}
        position={[-1.5, 1, 1]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, 0.1, 0]}
        position={[-2, 1, 1.2]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -0.7, 0]}
        position={[-2.6, 1, 1.2]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -0.9, 0]}
        position={[-3, 1, 1]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -1.2, 0]}
        position={[-3.4, 1, 0]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -2.3, 0]}
        position={[-3, 1, -1]}
      />
      <Cloud
        scale={0.1}
        rotation={[0, -3, 0]}
        position={[-2.4, 1, -1.3]}
      />
      <Cloud
        scale={0.03}
        seed={4}
        position={[-2, 1, -1]}
      />
      <Cloud
        scale={0.03}
        seed={5}
        position={[-1.2, 0.9, 0]}
      />
      <Cloud
        scale={[0.13, 0.13, 0.08]}
        seed={3}
        opacity={0.2}
        rotation={[0, Math.PI / 2, 0]}
        position={[-2, 1, 0]}
      />
      <group
        position={[2.2, 0.32, -0.04]}
        rotation={[0, Math.PI, 0.04]}
        scale={[1.78, 1.78, 1.8]}
      >
        <MapOne />
      </group>
      <group
        position={[-2.3, 0.4, 1.37]}
        scale={[0.85, 1, 0.85]}
        rotation={[0, 0, 0.05]}
      >
        <MapTwo />
      </group>
      <mesh>
        <sphereGeometry args={[30, 100, 100]} />
        <meshBasicMaterial
          map={texture}
          side={BackSide}
        />
      </mesh>
    </group>
  );
}

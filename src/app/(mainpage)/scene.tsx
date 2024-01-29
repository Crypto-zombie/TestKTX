'use client';
import Assets from './assets';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Layers } from 'three';
import { Preload } from '@react-three/drei';

export default function Scene() {
  const layers = new Layers();
  layers.enable(1);
  return (
    <Canvas
      camera={{
        // position: [-1.92, 2.3, -0.3],
        position: [0, 8, -16],
        rotation: [-1.3, -1.37, -1.32],
        near: 0.01,
        layers: layers,
        fov: 30,
      }}
      gl={{
        powerPreference: 'high-performance',
        alpha: true,
        antialias: true,
      }}
      className="h-screen w-screen "
    >
      <Preload all />
      <Assets />
    </Canvas>
  );
}

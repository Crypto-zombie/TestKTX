import Background from './background';
import React from 'react';
import Scene from './scene';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spore`s Journey Map',
  description: 'Developed by Evgenii',
};
export default function Page() {
  return (
    <div className="h-screen">
      <Scene />
      <Background />
    </div>
  );
}

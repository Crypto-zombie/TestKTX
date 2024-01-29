'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { AiOutlineFullscreen } from '@react-icons/all-files/ai/AiOutlineFullscreen';
import { AiOutlineFullscreenExit } from '@react-icons/all-files/ai/AiOutlineFullscreenExit';
import { useProgress } from '@react-three/drei';

export default function Background() {
  const { progress } = useProgress();
  const [full, setFull] = useState(false);
  const content = useRef<HTMLImageElement>(null);
  const bg = useRef<HTMLImageElement>(null);

  const fadeOut = () => {
    gsap.to(content.current, {
      overwrite: true,
      duration: 3,
      ease: 'power1.out',
      opacity: 0,
    });
  };
  const ZoomOut = () => {
    gsap.to(bg.current, {
      duration: 2,
      overwrite: true,
      ease: 'power1.out',
      opacity: 0,
    });
  };
  const ZoomIn = () => {
    gsap.to(bg.current, {
      duration: 2,
      overwrite: true,
      ease: 'power1.out',
      opacity: 1,
    });
  };
  useEffect(() => {
    if (progress === 100) fadeOut();
  }, [progress]);

  return (
    <div>
      <Image
        ref={bg}
        src={'/jpg/journey_map.png'}
        loading="eager"
        alt={'Spore is lost road'}
        className="pointer-events-none object-cover"
        fill
      />
      <Image
        ref={content}
        src={'/jpg/journey_origin_map.jpg'}
        priority
        alt={'Spore is lost road'}
        className="pointer-events-none object-cover"
        fill
      />
      {full ? (
        <button
          title="ZoomOut Map"
          className={`absolute bottom-5 right-5 z-20 rounded-full bg-teal-900 p-2 text-white ${
            progress !== 100 && 'hidden'
          }`}
          onClick={() => {
            ZoomIn();
            setFull(false);
          }}
        >
          <AiOutlineFullscreenExit className="h-6 w-6" />
        </button>
      ) : (
        <button
          title="ZoomIn Map"
          className={`absolute bottom-5 right-5 z-20 rounded-full bg-teal-900 p-2 text-white ${
            progress !== 100 && 'hidden'
          }`}
          onClick={() => {
            ZoomOut();
            setFull(true);
          }}
        >
          <AiOutlineFullscreen className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}

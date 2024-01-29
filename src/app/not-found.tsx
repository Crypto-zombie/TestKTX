'use client';
import Image from 'next/image';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

export default function NotFound() {
  const app = useRef<HTMLImageElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(app.current, {
        opacity: 1,
        ease: 'power1.inOut',
        duration: 3,
        yoyo: true,
        repeat: -1,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <Image
        src={'/jpg/404.jpg'}
        priority
        alt={'Spore is lost road'}
        className="object-cover"
        fill
      />
      <Image
        ref={app}
        src={'/jpg/404-blur.jpg'}
        priority
        alt={'Spore is lost road'}
        className="object-cover opacity-0"
        fill
      />
      <a
        className="hover:transi absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-900  bg-transparent bg-opacity-40 p-4 text-center text-lg text-white shadow-2xl hover:bg-opacity-50"
        href="/"
      >
        <p className="border-b">CAN`T FIND PAGE</p>
        <p className="text-xs">Click to dashboard</p>
      </a>
    </>
  );
}

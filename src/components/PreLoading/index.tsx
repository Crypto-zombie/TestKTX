import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

type Props = {
  url: string;
  className?: string;
};

export default function PreLoading({
  url = '#',
  className = 'bg-zinc-800',
}: Props) {
  const route = useRouter();
  const bg = useRef<HTMLDivElement>(null);
  // const [hide, setHide] = useState(false);
  const fadeOut = () => {
    gsap.to(bg.current, {
      duration: 2,
      ease: 'power1.out',
      opacity: 1,
      onComplete: () => {
        route.push(url);
      },
    });
  };
  useEffect(() => {
    fadeOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={bg}
      className={classNames(
        className,
        'absolute left-0 top-0  z-[99999999] h-screen w-screen opacity-0 xl:left-32 xl:top-20 ',
      )}
    />
  );
}

import Image from 'next/image';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function AvatarCarrouselUI() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(container.current, {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }, []);

  return(
    <div ref={container} className="w-fit h-[428px] bg-ctz-gray-medium flex relative">
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-09.png'} alt='Avatar shibi 09' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-01.png'} alt='Avatar shibi 01' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-02.png'} alt='Avatar shibi 02' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-03.png'} alt='Avatar shibi 03' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-04.png'} alt='Avatar shibi 04' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-05.png'} alt='Avatar shibi 05' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-06.png'} alt='Avatar shibi 06' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-07.png'} alt='Avatar shibi 07' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[428px] h-[428px] relative'>
        <Image src={'/images/shibi/shibi-08.png'} alt='Avatar shibi 08' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
    </div>
  )
}
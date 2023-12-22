import IconButtonUI from "../common/iconButton.ui";
import ColorsBarUI from "../common/colorsBar.ui";
import Image from 'next/image';
import { ButtonBorderColor, ButtonIcon } from "@/enum/ui.enum";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PageLocation } from "@/enum/urls.enum";

gsap.registerPlugin(ScrollTrigger);

export default function VrmUI() {
  const avatar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(avatar.current, {
      xPercent: 30,
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: avatar.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })
  }, []);
  return (
    <>
      <ColorsBarUI />
      <div className="bg-ctz-yellow-medium flex flex-col lg:flex-row lg:items-center ctz-padding">
        <div className='w-full lg:w-[35%] h-[300px] absolute hidden lg:block'>
          <Image src={'/images/bg-environment.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
        </div>
        <div ref={avatar} className='w-full lg:w-[35%] h-[900px] absolute hidden lg:block translate-x-1/4'>
          <Image src={'/images/bg-avatar.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: "contain" }} />
        </div>
        <div className="w-full flex flex-col justify-between items-center lg:items-end pb-10 lg:pb-20">
          <div className="text-center lg:text-end pt-20 lg:pt-40">
            <h1 className="text-ctz-gray-dark text-[10vw] lg:text-[6.61vw] leading-[80%]"><span className="text-ctz-pink-light">003.</span>VRM <br />INTEGRATION</h1>
            <h2 className="text-ctz-pink-light text-[6vw] lg:text-[2.87vw] leading-[80%] uppercase pt-5 lg:pt-0">Focus on Interoperability:</h2>
            <p className="font-work text-ctz-gray-semi_dark text-[3.5vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light py-10">Our VRM integration <br className="hidden lg:inline-block" />allows your creations to <br className="hidden lg:inline-block" />be compatible with over <br className="hidden lg:inline-block" />200 platforms.</p>
          </div>
          <IconButtonUI iconColor={'fill-ctz-pink-medium'} icon={ButtonIcon.arrow} borderColor={ButtonBorderColor.White} iconLink={PageLocation.Resources}>
            <p className='text-[4vw] lg:text-[2vw] leading-[80%] uppercase text-ctz-light px-4 lg:px-12 text-center'>Learn more</p>
          </IconButtonUI>
        </div>
      </div>
    </>
  )
}
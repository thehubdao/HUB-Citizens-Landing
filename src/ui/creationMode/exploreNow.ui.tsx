import Image from 'next/image';
import IconButtonUI from '../common/iconButton.ui';
import { ButtonIcon } from '@/enum/ui.enum';
import { PageLocation } from '@/enum/urls.enum';

export default function ExploreNowUI() {
  return (
    <div className='relative w-full flex flex-col justify-center items-center gap-y-14 py-20 overflow-x-hidden ctz-padding bg-ctz-gray-aultra_light'>
      <p className='font-work text-ctz-gray-dark text-[3.5vw] lg:text-[1.3vw] leading-[100%] font-light text-center tracking-[5px]'>Your creative process deserves a <br className="hidden lg:inline-block"/> dedicated space. Our Creator HUB is the <br className="hidden lg:inline-block"/>epicenter of innovation, where you can <br className="hidden lg:inline-block"/>	design and modify avatars, creatures <br className="hidden lg:inline-block"/>and accessories in a seamless way. </p>
      <IconButtonUI iconColor={'fill-ctz-yellow-medium'} icon={ButtonIcon.arrow} iconLink={PageLocation.Portal}>
        <p className='text-2xl lg:text-[2.5vw] leading-[80%] uppercase text-ctz-pink-light px-6 lg:px-12 text-center'>Explore it now!</p>
      </IconButtonUI>
      <div className='hidden lg:flex absolute -left-0 -translate-x-[16%]'>
        <div className='w-[180px] h-[180px] relative'>
          <Image src={'/icons/horizontal-arrow.png'} alt='Horizontal arrow icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className='w-[180px] h-[180px] relative'>
          <Image src={'/icons/horizontal-arrow.png'} alt='Horizontal arrow icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className='w-[180px] h-[180px] relative'>
          <Image src={'/icons/horizontal-arrow.png'} alt='Horizontal arrow icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </div>
      <div className='hidden lg:flex absolute right-0 rotate-180 translate-x-[16%]'>
        <div className='w-[180px] h-[180px] relative'>
          <Image src={'/icons/horizontal-arrow.png'} alt='Horizontal arrow icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className='w-[180px] h-[180px] relative'>
          <Image src={'/icons/horizontal-arrow.png'} alt='Horizontal arrow icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className='w-[180px] h-[180px] relative'>
          <Image src={'/icons/horizontal-arrow.png'} alt='Horizontal arrow icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
      </div>
    </div>
  )
}
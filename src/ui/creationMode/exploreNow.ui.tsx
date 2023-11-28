import Image from 'next/image';
import IconButtonUI from '../common/iconButton.ui';
import { BorderColor, ButtonSize, TextColor } from '@/enum/common.enum';
import { ButtonIcon, ButtonIconSize } from '@/enum/ui.enum';

const icons = [
  {
    icon: ButtonIcon.arrow,
    url: 't<pa'
  },
  {
    icon: ButtonIcon.play,
    url: 'aaa'
  },
]

export default function ExploreNowUI() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-14 py-20 overflow-x-hidden ctz-padding'>
      <p className='font-work text-ctz-gray-dark text-[25px] leading-[100%] font-light text-center tracking-[5px]'>Your creative process deserves a <br className="hidden lg:inline-block"/> dedicated space. Our Creator HUB is the <br className="hidden lg:inline-block"/>epicenter of innovation, where you can <br className="hidden lg:inline-block"/>	design and modify avatars, creatures <br className="hidden lg:inline-block"/>and accessories in a seamless way. </p>
      <IconButtonUI iconColor={'fill-ctz-yellow-medium'} iconsList={icons}>
        <p className='text-lg xl:text-3xl uppercase text-ctz-pink-light px-12 leading-none text-center'>Explore it now!</p>
      </IconButtonUI>
      <div className='lg:flex absolute -left-0 -translate-x-[16%]'>
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
      <div className='lg:flex absolute right-0 rotate-180 translate-x-[16%]'>
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
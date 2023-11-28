import Image from 'next/image';
import ArrowButtonUI from '../common/arrowButton.ui';
import { BorderColor, ButtonSize, TextColor } from '@/enum/common.enum';

export default function ExploreNowUI() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-14 py-20 overflow-x-hidden ctz-padding'>
      <p className='font-work text-ctz-gray-dark text-[25px] leading-[100%] font-light text-center tracking-[5px]'>Your creative process deserves a <br className="hidden lg:inline-block"/> dedicated space. Our Creator HUB is the <br className="hidden lg:inline-block"/>epicenter of innovation, where you can <br className="hidden lg:inline-block"/>	design and modify avatars, creatures <br className="hidden lg:inline-block"/>and accessories in a seamless way. </p>
      <ArrowButtonUI arrow={'/icons/yellow-arrow.png'} text={'Explore it now!'} borderColor={BorderColor.Black} buttonSize={ButtonSize.Large} textColor={TextColor.orange} />
      <div className='hidden lg:flex absolute left-0 '>
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
      <div className='hidden lg:flex absolute right-0 rotate-180 '>
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
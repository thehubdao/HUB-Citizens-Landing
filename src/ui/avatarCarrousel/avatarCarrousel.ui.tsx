import Image from 'next/image';

export default function AvatarCarrouselUI() {
  return(
    <div className="w-full bg-ctz-gray-medium flex relative">
      <div className='w-[427px] h-[428px] relative'>
        <Image src={'/images/avatar.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[427px] h-[428px] relative'>
        <Image src={'/images/avatar.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[427px] h-[428px] relative'>
        <Image src={'/images/avatar.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[427px] h-[428px] relative'>
        <Image src={'/images/avatar.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className='w-[427px] h-[428px] relative'>
        <Image src={'/images/avatar.png'} alt='Avatar images' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
    </div>
  )
}
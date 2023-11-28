import { ExternalLink } from '@/enum/urls.enum';
import Image from 'next/image';
import Link from 'next/link';

export default function ButtonsBarUI() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between pt-8 lg:pt-[76px]">
      <button className="w-[288px] h-[45px] border-[2px] border-ctz-light flex cursor-pointer">
        <div className="w-1/4 h-full border-r-[2px] border-ctz-light flex justify-center items-center">
          <Image src={'/icons/play.svg'} alt='Play video icon' width={19} height={21} />
        </div>
        <div className='w-3/4 h-full flex justify-center items-center'>
          <p className='text-ctz-light text-lg leading-[80%]'>WATCH TRAILER</p>
        </div>
      </button>
      <div className="w-full sm:w-[481px] min-w-[288px] h-[45px] border-[2px] border-ctz-light my-6 lg:my-0 flex">
        <div className='w-1/2 lg:w-[63%] h-full flex justify-center items-center border-r-[2px] border-ctz-light'>
          <p className='text-ctz-light text-lg leading-[80%]'>THE HUB DAO</p>
        </div>
        <div className="w-1/2 lg:w-[37%] flex justify-around items-center">
          <Link href={ExternalLink.TheHubDAO} className='cursor-pointer w-1/4 h-full flex justify-around items-center border-r-[2px] border-ctz-light'>
            <Image src={'/icons/thehub.png'} alt='The hub icon' width={22} height={22} />
          </Link>
          <Link href={ExternalLink.Instagram} className='cursor-pointer w-1/4 h-full flex justify-around items-center border-r-[2px] border-ctz-light'>
            <Image src={'/icons/instagram.png'} alt='Instagram icon' width={22} height={22} />
          </Link>
          <Link href={ExternalLink.Instagram} className='cursor-pointer w-1/4 h-full flex justify-around items-center border-r-[2px] border-ctz-light'>
            <Image src={'/icons/twitter.png'} alt='Twitter icon' width={22} height={22} />
          </Link>
          <Link href={ExternalLink.LinkedIn} className='cursor-pointer w-1/4 h-full flex justify-around items-center'>
            <Image src={'/icons/linkedin.png'} alt='LinkedIn icon' width={22} height={22} />
          </Link>
        </div>
      </div>
    </div>
  )
}
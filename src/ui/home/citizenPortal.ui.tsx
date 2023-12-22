import ColorsBarUI from "../common/colorsBar.ui";
import Image from 'next/image';

export default function CitizenPortalUI() {
  return (
    <>
      <div className="border-[2px] border-ctz-light flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-1/2 pt-10 px-6 lg:px-12 text-start flex flex-col justify-center lg:justify-start items-center lg:items-start">
          <p className="text-ctz-pink-light text-[40px] leading-[80%]">001.</p>
          <h1 className="text-ctz-gray-dark text-[8vw] lg:text-[4.1vw] leading-[80%] mt-[17px] text-center lg:text-start">WELCOME <br />TO THE  <br />CITIZENS <br />PORTAL!</h1>
          <p className="font-work text-ctz-gray-semi_dark text-[3.5vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light mt-[17px] text-center lg:text-start pb-16">Create unique interoperable  <br className="hidden lg:inline-block"/>game assets and unleash  <br className="hidden lg:inline-block"/>your creativity.</p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center p-6 lg:p-12">
          <div className="relative w-[756px] h-[345px] rounded-3xl overflow-hidden">
            <Image src={'/images/avatar-img.png'} alt='The hub icon' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: 'cover'}}/>
          </div>
        </div>
      </div>
      <div className="border-x-[2px] border-b-[2px] border-ctz-light h-[73px] flex justify-center items-center ctz-padding">
        <ColorsBarUI />
      </div>
    </>
  )
}
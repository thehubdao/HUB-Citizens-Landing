import { BorderColor, ButtonSize, TextColor } from "@/enum/common.enum";
import IconButtonUI from "../common/iconButton.ui";
import ColorsBarUI from "../common/colorsBar.ui";
import Image from 'next/image';

export default function VrmUI() {
  return (
    <>
      <ColorsBarUI />
      <div className="bg-ctz-yellow-medium h-[770px] flex flex-col lg:flex-row px-10 lg:px-20 py-10 lg:py-20 ">
        {/* <div className='w-full lg:w-[35%] h-full relative'>
          <Image src={'/images/avatar2.png'} alt='Avatar images' fill style={{ maxWidth: '1046px', maxHeight: '566px' }} />
        </div> */}
        <div className="w-full lg:w-[65%] flex flex-col justify-between items-center lg:items-end text-center lg:text-end">
          <div className="flex flex-col flex-1 items-center lg:items-end">
            <h1 className="text-ctz-gray-dark text-[10vw] lg:text-[6.61vw] leading-[80%]"><span className="text-ctz-pink-light">003.</span>VRM <br />INTEGRATION</h1>
            <h2 className="text-ctz-pink-light text-[6vw] lg:text-[2.87vw] leading-[80%] uppercase pt-5 lg:pt-0">Focus on Interoperability:</h2>
            <p className="font-work text-ctz-gray-semi_dark text-[3.5vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light py-10">Our VRM integration <br className="hidden lg:inline-block"/>allows your creations to <br className="hidden lg:inline-block"/>be compatible with over <br className="hidden lg:inline-block"/>200 platforms.</p>
          </div>
          <IconButtonUI arrow={'/icons/pink-arrow.svg'} children={'Explore it now!'} borderColor={BorderColor.White} buttonSize={ButtonSize.Small} textColor={TextColor.light} />
        </div>
      </div>
    </>
  )
}
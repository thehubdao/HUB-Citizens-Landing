import { BorderColor, ButtonSize, TextColor } from "@/enum/common.enum";
import IconButtonUI from "../common/iconButton.ui";
import ExploreNowUI from "./exploreNow.ui";

export default function CreationModeUI() {
  return (
    <div className="bg-ctz-gray-aultra_light ctz-padding relative">
      <div className="h-full lg:min-h-screen w-full flex flex-col lg:flex-row pb-20 lg:pb-0">
        <div className="w-full lg:w-[37%] h-full lg:h-[756px] border-[2px] border-ctz-gray-dark flex flex-col justify-between">
          <div className="px-10 flex flex-col justify-center items-center lg:items-start flex-1 text-center lg:text-start pt-10 lg:pt-0">
            <p className="text-ctz-pink-light text-[40px] leading-[80%]">002.</p>
            <h1 className="text-ctz-gray-dark text-[8vw] lg:text-[4.1vw] leading-[80%] py-5">CREATION MODE</h1>
            <h2 className="text-ctz-pink-light text-[40px] leading-[80%]">MAKE IT YOUR OWN!</h2>
            <p className="font-work text-ctz-gray-semi_dark text-[3.5vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light py-10">Diversity at Your Fingertips: <br className="hidden lg:inline-block"/>Whether you want to upload a <br className="hidden lg:inline-block"/>single asset or a whole <br className="hidden lg:inline-block"/>collection, our platform adapts to your creative flow</p>
          </div>
          <IconButtonUI arrow={'/icons/yellow-arrow.png'} children={'Explore it now!'} borderColor={BorderColor.Black} buttonSize={ButtonSize.Small} textColor={TextColor.orange} />
        </div>
        <div className="w-full lg:w-[63%] hpfull lg:h-[756px] border-y-[2px] border-r-[2px] border-ctz-gray-dark">

        </div>
      </div>
    </div>
  )
}
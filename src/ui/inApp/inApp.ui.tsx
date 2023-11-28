import { BorderColor, ButtonSize, TextColor } from "@/enum/common.enum";
import ArrowButtonUI from "../common/arrowButton.ui";
import ColorsBarUI from "../common/colorsBar.ui";

export default function InAppUI() {
  return (
    <div className="lg:min-h-screen w-full bg-ctz-gray-aultra_light pt-20 px-10 lg:px-20">
      <h1 className="uppercase text-ctz-gray-dark text-[7.8vw] lg:text-[9.1vw] leading-[80%] text-center">In-App Iframe <br /><span className="uppercase text-ctz-gray-dark text-[9.2vw] lg:text-[10.7vw] leading-[80%]">Integration</span></h1>
      <div className="py-10">
        <ColorsBarUI />
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-[60%] h-full pb-20 text-center lg:text-start ">
          <h2 className="text-ctz-pink-light text-[6vw] lg:text-[2.9vw] leading-[80%] uppercase">EASILY INCLUDE AVATARS SYSTEMS IN YOUR OWN APP</h2>
          <h1 className="text-ctz-pink-light text-[10vw] lg:text-[6.61vw] leading-[80%] uppercase py-9">004.</h1>
          <p className="font-work text-ctz-gray-semi_dark text-[3.5vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light pb-10">Our innovative in-app iframe <br className="hidden lg:inline-block"/>integration allows you to <br className="hidden lg:inline-block"/>incorporate our editable <br className="hidden lg:inline-block"/>avatars and other assets <br className="hidden lg:inline-block"/>directly into your interface. <br className="hidden lg:inline-block"/>Integrate now</p>
          <ArrowButtonUI arrow={'/icons/pink-arrow.svg'} text={'Explore it now!'} borderColor={BorderColor.Black} buttonSize={ButtonSize.Large} textColor={TextColor.dark} />
        </div>
        <div className="w-full lg:w-[40%] min-h-full">

        </div>
      </div>
    </div>
  )
}
import IconButtonUI from "../common/iconButton.ui";
import ColorsBarUI from "../common/colorsBar.ui";
import { ButtonBorderColor, ButtonIcon } from "@/enum/ui.enum";
import { PageLocation } from "@/enum/urls.enum";

export default function InAppUI() {
  return (
    <div className="lg:min-h-screen bg-ctz-gray-aultra_light pt-20 lg:pt-40 ctz-padding">
      <h1 className="uppercase text-ctz-gray-dark text-[7.3vw] sm:text-[7.8vw] lg:text-[8.3vw] xl:text-[8.6vw] 2xl:text-[8.8vw] leading-[80%] text-center">In-App Iframe <br /><span className="uppercase text-ctz-gray-dark text-[8.7vw] sm:text-[9.2vw] lg:text-[9.8vw] xl:text-[10.2vw] 2xl:text-[10.5vw] leading-[80%]">Integration</span></h1>
      <div className="py-10">
        <ColorsBarUI />
      </div>
      <div className="flex flex-col lg:flex-row pb-20">
        <div className="w-full lg:w-[60%] text-center lg:text-start flex flex-col items-center lg:items-start">
          <h2 className="text-ctz-pink-light text-[6vw] lg:text-[2.9vw] leading-[80%] uppercase">EASILY INCLUDE AVATARS SYSTEMS IN YOUR OWN APP</h2>
          <h1 className="text-ctz-pink-light text-[10vw] lg:text-[6.61vw] leading-[80%] uppercase py-9">004.</h1>
          <p className="font-work text-ctz-gray-semi_dark text-[3.5vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light pb-10">Our innovative in-app iframe <br className="hidden lg:inline-block"/>integration allows you to <br className="hidden lg:inline-block"/>incorporate our editable <br className="hidden lg:inline-block"/>avatars and other assets <br className="hidden lg:inline-block"/>directly into your interface.</p>
          <IconButtonUI iconColor={'fill-ctz-pink-medium'} icon={ButtonIcon.arrow} borderColor={ButtonBorderColor.Black} iconLink={PageLocation.Resources}>
            <p className='text-[4vw] lg:text-[2vw] leading-[80%] uppercase text-ctz-gray-dark px-4 lg:px-12 text-center'>Integrate now</p>
          </IconButtonUI>
        </div>
        <div className="w-full lg:w-[40%] min-h-full">

        </div>
      </div>
    </div>
  )
}
import IconButtonUI from "../common/iconButton.ui";
import { ButtonIcon } from "@/enum/ui.enum";

export default function CreationModeUI() {
  return (
    <div className="bg-ctz-gray-aultra_light ctz-padding relative pb-20 lg:pb-32">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center">
          <div className="border-[2px] border-b-0 border-ctz-gray-dark flex flex-col items-center">
            <div className="px-10 text-center lg:text-start">
              <p className="text-ctz-pink-light text-[40px] leading-[80%] pt-20 lg:pt-40">002.</p>
              <h1 className="text-ctz-gray-dark text-[8vw] lg:text-[4.1vw] leading-[80%] py-4">CREATION MODE</h1>
              <h2 className="text-ctz-pink-light text-[40px] leading-[80%]">MAKE IT YOUR OWN!</h2>
              <p className="font-work text-ctz-gray-semi_dark text-[4vw] lg:text-[1.3vw] tracking-[5px] leading-[100%] font-light py-10">Diversity at Your Fingertips: <br className="hidden lg:inline-block" />Whether you want to upload a <br className="hidden lg:inline-block" />single asset or a whole <br className="hidden lg:inline-block" />collection, our platform adapts to your creative flow</p>
            </div>
            <div className="p-4 lg:p-0 w-full flex lg:hidden justify-center">
              <IconButtonUI iconColor={'fill-ctz-yellow-medium'} icon={ButtonIcon.arrow}>
                <p className='text-[4vw] lg:text-[2.3vw] leading-[80%] uppercase text-ctz-pink-light px-4 text-center'>Upload your<br />own creations</p>
              </IconButtonUI>
            </div>
          </div>
          <div className="p-4 lg:p-0 w-full hidden lg:flex">
            <IconButtonUI iconColor={'fill-ctz-yellow-medium'} icon={ButtonIcon.arrow} isFullWidth={true}>
              <p className='text-[4vw] lg:text-[2vw] leading-[80%] uppercase text-ctz-pink-light px-4 lg:px-9 text-center w-full'>Upload your<br />own creations</p>
            </IconButtonUI>
          </div>
        </div>
        <div className="border-[2px] border-ctz-gray-dark border-l-0 w-full">

        </div>
      </div>
    </div>
  )
}
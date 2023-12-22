import { ButtonBorderColor, ButtonIcon, ButtonIconSize } from "@/enum/ui.enum";
import { ExternalLink, PageLocation } from "@/enum/urls.enum";
import ColorsBarUI from "@/ui/common/colorsBar.ui";
import IconButtonUI from "@/ui/common/iconButton.ui";
import Link from "next/link";

const icons = [
  {
    icon: ButtonIcon.theHubDao,
    url: ExternalLink.TheHubDAO
  },
  {
    icon: ButtonIcon.instagram,
    url: ExternalLink.Instagram
  },
  {
    icon: ButtonIcon.twitter,
    url: ExternalLink.Twitter
  },
  {
    icon: ButtonIcon.linkedin,
    url: ExternalLink.LinkedIn
  },
]

export default function Home() {
  return <>
    <main className="w-full h-screen overflow-hidden bg-ctz-yellow-medium flex flex-col justify-between items-center">
      <ColorsBarUI />
      <div className="w-4/5">
        <div className="border-2 border-white border-b-0">
          <div className="flex flex-col items-center text-center text-ctz-dark pt-24 pb-12">
            <h1 className="text-[7vw] leading-none">
              COMING SOON
            </h1>
            <p className="font-work text-base lg:text-[1.75vw] px-6 lg:px-0 pb-4">
              we are still buidling this view in the meantime, PLEASE STAY IN TOUCH  :)
            </p>
            <div className="w-[64vw]">
              <ColorsBarUI />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="border-2 border-white border-r-0 w-1/6"></div>
          <div className="hidden xl:block">
            <IconButtonUI iconColor={'fill-ctz-light'} iconLink={PageLocation.Home} iconsList={icons} iconSize={ButtonIconSize.big} borderColor={ButtonBorderColor.White}>
              <p className='text-ctz-orange-dark text-3xl 2xl:text-5xl leading-[80%] px-5 lg:px-20 text-center whitespace-nowrap cursor-pointer'>THE HUB DAO</p>
            </IconButtonUI>
          </div>
          <div className="xl:hidden">
            <IconButtonUI iconColor={'fill-ctz-light'} iconLink={PageLocation.Home} iconsList={icons} iconSize={ButtonIconSize.small} borderColor={ButtonBorderColor.White}>
              <p className='text-ctz-orange-dark text-sm sm:text-3xl lg:text-4xl leading-[80%] px-2 sm:px-5 md:px-16 lg:px-20 text-center whitespace-nowrap cursor-pointer'>THE HUB <br className="sm:hidden"/>DAO</p>
            </IconButtonUI>
          </div>
          <div className="border-2 border-white border-l-0 w-1/6"></div>
        </div>
      </div>
      <ColorsBarUI />
    </main>
  </>
}
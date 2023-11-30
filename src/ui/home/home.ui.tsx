import { ButtonBorderColor, ButtonIcon, ButtonIconSize } from "@/enum/ui.enum";
import ColorsBarUI from "../common/colorsBar.ui";
import IconButtonUI from "../common/iconButton.ui";
import CitizenPortalUI from "./citizenPortal.ui";
import { ExternalLink } from "@/enum/urls.enum";

export default function HomeUI() {
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

  return (
    <div className="bg-ctz-yellow-medium">
      {/* first section */}
      <div className="pt-[73px] lg:min-h-screen flex flex-col justify-between pb-10">
        <div className="h-[73px] border-b-[2px] border-ctz-light flex justify-center items-center ctz-padding">
          <ColorsBarUI />
        </div>
        <div className="text-center ctz-padding pb-20 pt-10 lg:pt-0">
          <h1 className="text-ctz-yellow-light text-[12vw] sm:text-[13vw] lg:text-[14vw] 2xl:text-[15vw] leading-[80%]">THE HUB <br />CITIZENS</h1>
          <p className="text-ctz-pink-medium text-[3.5vw] sm:text-[5vw] lg:text-[2.8vw] 2xl:text-[3.4vw] leading-[80%] tracking-[7.2px]">WEB 3.0 ORIENTED AVATAR SUITE</p>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-between ctz-padding'>
          <IconButtonUI iconColor={'fill-ctz-gray-dark'} icon={ButtonIcon.play} iconSize={ButtonIconSize.small} borderColor={ButtonBorderColor.White}>
            <p className='text-ctz-light text-lg leading-[80%] px-6 text-center'>WATCH TRAILER</p>
          </IconButtonUI>
          <div className='my-6 lg:my-0'>
            <IconButtonUI iconColor={'fill-ctz-light'} iconsList={icons} iconSize={ButtonIconSize.small} borderColor={ButtonBorderColor.White}>
              <p className='text-ctz-light text-lg leading-[80%] px-5 lg:px-20 text-center'>THE HUB DAO</p>
            </IconButtonUI>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="pb-20 lg:pb-40 ctz-padding lg:pt-52">
        <CitizenPortalUI />
      </div>
    </div>
  )
}
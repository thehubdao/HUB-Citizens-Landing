import ButtonsBarUI from "../common/buttonsBar.ui";
import ColorsBarUI from "../common/colorsBar.ui";
import CitizenPortalUI from "./citizenPortal.ui";

export default function HomeUI() {
  return (
    <div className="bg-ctz-yellow-medium">
      {/* first section */}
      <div className="pt-[156px] sm:pt-[73px] lg:min-h-screen">
        <div className="h-[73px] border-b-[2px] border-ctz-light flex justify-center items-center px-10 lg::px-[70px]">
          <ColorsBarUI />
        </div>
        <div className="text-center w-full h-full px-10 lg:px-16">
          <h1 className="text-ctz-yellow-light text-[13vw] lg:text-[15vw] leading-[80%] pt-[51px]">THE HUB <br />CITIZENS</h1>
          <p className="text-ctz-pink-medium text-[3.75vw] leading-[80%] tracking-[7.2px]">WEB 3.0 ORIENTED AVATAR SUITE</p>
        </div>
        <div className="w-full px-10 lg:px-16 pb-10">
          <ButtonsBarUI />
        </div>
      </div>
      {/* second section */}
      <div className="pb-20 lg:pb-40 px-10 lg:px-16">
       <CitizenPortalUI />
      </div>
    </div>
  )
}
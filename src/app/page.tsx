import AvatarCarrouselUI from "@/ui/avatarCarrousel/avatarCarrousel.ui";
import CreationModeUI from "@/ui/creationMode/creationMode.ui";
import ExploreNowUI from "@/ui/creationMode/exploreNow.ui";
import FooterUI from "@/ui/footer/footer.ui";
import HeaderUI from "@/ui/header/header.ui";
import HomeUI from "@/ui/home/home.ui";
import InAppUI from "@/ui/inApp/inApp.ui";
import VrmUI from "@/ui/vrm/vrm.ui";

export default function Home() {
  return <>
    <HeaderUI backgroundColor="yellow" />
    <main>
      <HomeUI/>
      <AvatarCarrouselUI />
      <ExploreNowUI />
      <CreationModeUI />
      <VrmUI />
      <InAppUI />
    </main>
    <FooterUI/>
  </>
}

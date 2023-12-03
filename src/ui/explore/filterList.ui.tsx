import { CampaignType } from "@/enum/campaigns.enum"
import FilterButtonUI from "./filterButton.ui"

export default function FilterListUI() {
  return (
    <div className="fixed bottom-0 left-0 lg:relative flex justify-between w-full 3xl:w-fit gap-1 md:gap-9 bg-ctz-gray-aaultra_light">
      <FilterButtonUI
        label={CampaignType.avatar}
      />
      <FilterButtonUI
        label={CampaignType.collections}
      />
      <FilterButtonUI
        label={CampaignType.customizable_campaigns}
      />
    </div>
  )
}
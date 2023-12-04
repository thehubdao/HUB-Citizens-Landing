'use client'

import { useAppSelector } from "@/redux/hooks";
import { CampaignCardUI } from "./campaignCard.ui";
import { RootState } from "@/redux/store";

export function CardListUI() {
  const campaigns = useAppSelector((state: RootState) => state.campaigns.data);

  return (
    <div className="w-full flex flex-wrap justify-center lg:justify-between gap-12 my-10">
      {campaigns.map((campaign, index) => <CampaignCardUI asset={campaign} key={index} />)}
    </div>
  )
}
'use client'

import { useState } from "react";
import { CampaignType } from "@/enum/campaigns.enum";
import { CardListUI } from "@/ui/explore/cards/cardlist.ui";
import FilterListUI from "@/ui/explore/filterList.ui";
import HeaderUI from "@/ui/header/header.ui";

export default async function Explore() {
  return <>
    <HeaderUI backgroundColor="gray" />
    <main className="bg-ctz-gray-aaultra_light min-h-screen flex flex-col items-center w-full">
      <div className="max-w-[1920px] w-full pt-[73px] flex flex-col items-center px-10 md:px-36">
        {/* Head */}
        <div className="w-full flex flex-col 3xl:flex-row mt-20 justify-between gap-9">
          <h2 className="flex text-5xl sm:text-8xl text-ctz-light">EXPLORE</h2>
          <FilterListUI />
        </div>

        {/* Card List */}
        <CardListUI />
      </div>
    </main>
  </>
}


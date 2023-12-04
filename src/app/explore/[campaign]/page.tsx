'use client'

import Image from "next/image";
import Link from "next/link";

import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import HeaderUI from "@/ui/header/header.ui";
import ColorsBarUI from "@/ui/common/colorsBar.ui";

export default function Campaign({ params }: { params: { campaign: string } }) {
  const { campaign } = params;
  const campaigns = useAppSelector((state: RootState) => state.campaigns.data);
  const currentCampaign = campaigns.filter(item => item.name.toLowerCase().includes(decodeString(campaign).toLowerCase()))[0];

  function decodeString(encoded: string) {
    try {
      const decoded = decodeURIComponent(encoded);
      return decoded;
    } catch (error) {
      console.error('Error decoding the string:', error);
      return encoded;
    }
  }

  return <>
    <HeaderUI backgroundColor="gray" />
    <main className="bg-ctz-gray-aaultra_light min-h-screen flex flex-col items-center w-full">
      <div className="max-w-[1920px] w-full h-full min-h-screen md:h-screen pt-[73px] flex">
        {(currentCampaign) ? (
          <div className="w-full h-full flex">
            <div className="hidden md:flex w-[600px] h-full relative">
              <Image
                src={currentCampaign.image}
                alt="Asset Card"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-full h-full p-5 md:p-20">
              <div className="w-full h-full border-2 border-ctz-light flex flex-col">
                <div className="border-b-2 border-ctz-light h-full md:h-2/4 flex flex-col-reverse xl:flex-row justify-between p-8">
                  <div className="flex flex-col justify-between">
                    <h3 className="font-extrabold text-lg md:text-2xl">{currentCampaign.type.toUpperCase()}</h3>
                    <h2 className="font-extrabold text-4xl md:text-[80px] text-ctz-light max-w-xl overflow-hidden h-fit md:h-[140px] leading-8 md:leading-[4.7rem] text-start">{currentCampaign.name.toUpperCase()}</h2>
                    <h3 className="font-extrabold text-xl md:text-4xl">{currentCampaign.collection_name.toUpperCase()}</h3>
                  </div>
                  <div className="w-full h-full p-8 flex justify-center">
                    <div className="flex md:hidden w-[249px] h-[388px] relative">
                      <Image
                        src={currentCampaign.image}
                        alt="Asset Card"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row-reverse xl:flex-col justify-between items-end">
                    <Link href={'/explore'} className="w-14 h-14 border-2 border-ctz-light flex justify-center items-center">
                      <Image
                        src={'/icons/pink-close.svg'}
                        width={36}
                        height={36}
                        alt="Close arrow"
                      />
                    </Link>
                    <h3 className="font-extrabold text-2xl md:text-4xl">#{currentCampaign.id}</h3>
                  </div>
                </div>
                <div className="border-b-2 border-ctz-light h-full md:h-[30%] p-8 flex items-center overflow-hidden">
                  <p className="font-work text-ctz-gray-dark font-light max-w-3xl">{currentCampaign.description}</p>
                </div>
                <div className="border-b-2 border-ctz-light h-full md:h-[10%] font-work text-ctz-gray-dark font-light flex-col flex md:flex-row">
                  <p className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-ctz-light flex justify-center items-center gap-1 p-8">
                    <span className="font-medium">
                      {"Owner: "}
                    </span>
                    {currentCampaign.owner}
                  </p>
                  <p className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-ctz-light flex justify-center items-center gap-1 p-8">
                    <span className="font-medium">
                      {"Created: "}
                    </span>
                    {currentCampaign.created}
                  </p>
                  <p className="w-full md:w-1/3 flex justify-center items-center gap-1 p-8">
                    <span className="font-medium">
                      {"Data: "}
                    </span>
                    {currentCampaign.data}
                  </p>
                </div>
                <div className="h-full md:h-[10%] p-8">
                  <ColorsBarUI />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>Campaign not found!</div>
        )}
      </div>
    </main >
  </>
}
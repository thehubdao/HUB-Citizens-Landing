import { CampaignsInterface } from "@/interface/capmaigns.interface";
import Image from "next/image";
import Link from "next/link";

interface CampaignCardUIProps {
  asset: CampaignsInterface
}

export function CampaignCardUI({ asset }: CampaignCardUIProps) {
  return (
    <div className="w-[282px] h-[522px] border-2 border-ctz-light">
      <div className="w-full h-[416px] border-b-2 border-ctz-light p-4 flex justify-center items-center">
        <div className="w-full h-full overflow-hidden relative">
          <Image
            src={asset.image}
            alt="Asset Card"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="w-full h-[49px] flex border-b-2 border-ctz-light">
        <div className="w-[229px] h-full flex items-center justify-center text-xl px-4">
          <p className="truncate">
            {asset.name.toUpperCase()}
          </p>
        </div>
        <Link href={`/explore/${asset.name}`} className="border-l-2 border-ctz-light w-[53px] h-full flex items-center justify-center">
          <Image
            src="/icons/pink-arrow.svg"
            width={21}
            height={19}
            alt="Button to access to the specific asset view"
          />
        </Link>
      </div>
      <div className="w-full h-[57px] flex">
        <p className="border-r-2 border-ctz-light w-[120px] h-full flex items-center justify-center font-extrabold text-2xl text-ctz-pink-light">
          {asset.id}.
        </p>
        <div className="w-full h-full flex items-center justify-center font-light font-work text-xl">
          <p className="text-center leading-5">{asset.type}</p>
        </div>
      </div>
    </div>
  )
}
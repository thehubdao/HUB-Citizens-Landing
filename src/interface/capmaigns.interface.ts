import { CampaignType } from "@/enum/campaigns.enum";

export interface CampaignsInterface {
  id: string,
  name: string,
  image: string,
  type: CampaignType,
  collection_name: string,
  description: string,
  owner: string,
  created: string,
  data: string
}
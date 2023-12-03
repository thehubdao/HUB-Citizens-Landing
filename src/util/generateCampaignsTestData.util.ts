import { CampaignType } from "@/enum/campaigns.enum";
import { CampaignsInterface } from "@/interface/capmaigns.interface";

const formatNumber = (num: number): string => {
  const clampedNumber = Math.max(0, Math.min(num, 999));
  const formattedNumber = clampedNumber.toString().padStart(3, '0');
  return formattedNumber;
};

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = getRandomInt(0, array.length - 1);
  return array[randomIndex];
};

const getRandomImagePath = (): string => {
  const imageNumber = getRandomInt(1, 5);
  return `/images/test${imageNumber}.png`;
};

export const generateRandomCampaign = (name: string): CampaignsInterface => {
  const id = formatNumber(getRandomInt(0, 999));
  const image = getRandomImagePath();
  const type = getRandomElement(Object.values(CampaignType));
  const collection_name = `${name} collection`;
  const description = "I took my love, I took it downI climbed a mountain and I turned aroundAnd I saw my reflection in the snow-covered hills'Til the landslide brought me down Oh, mirror in the skyWhat is love?Can the child within my heart rise above?Can I sail through the changin' ocean tides?Can I handle the seasons of my life?";
  const created = "02/05/2028";
  const data = "000000";

  const ownerOptions = ["bonnie b.", "NaN", "Camilo Echeverry", "Oswald"];
  const owner = getRandomElement(ownerOptions);


  return { id, image, type, description, collection_name, name, created, data, owner }
}
import { CommonUrls, ExternalLink } from '@/enum/urls.enum';
import Link from 'next/link';

export default function FooterUI() {
  return (
    <div className="font-work font-light text-lg text-ctz-gray-light leading-7 w-full flex flex-col xl:flex-row justify-between items-center bg-ctz-gray-semi_dark p-10">
      <div className="py-10 lg:py-24 pl-0 lg:pl-20 2xl:pl-32 flex flex-col items-center">
        <p className="font-monument text-ctz-yellow-light text-[33px] leading-[80%]">
          THE HUB <br />CITIZENS
        </p>
        <p>
          All rights reserved 2023
        </p>
      </div>
      <div className='text-center flex flex-col gap-y-[6px] py-8'>
        <Link href={CommonUrls.InvestorPrivacyNote}>
          <p>Terms & Conditions</p>
        </Link>
        <Link href={CommonUrls.PrivacyPolicy}>
          <p>Privacy Policy</p>
        </Link>
        <Link href={CommonUrls.InvestorPrivacyNote}>
          <p>Investor Privacy Notice</p>
        </Link>
        <Link href={CommonUrls.CookiesPolicy}>
          <p>Cookies Policy</p>
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center pr-0 xl:pr-14 2xl:pr-[110px]'>
        <p className='uppercase text-[17px] leading-5 -tracking-[0.672px]'>Contact us at</p>
        <Link href={'mailto:' + ExternalLink.MailTo}>
          <p className='cursor-pointer hover:text-ctz-yellow-medium'>{ExternalLink.MailTo}</p>
        </Link>
      </div>
    </div>
  )
}
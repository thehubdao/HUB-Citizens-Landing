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
      <div className="flex flex-wrap justify-around xl:items-center gap-y-4">
        <div className='text-center xl:text-end flex flex-col gap-y-[6px]'>
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
        <p className='text-center xl:text-start pl-0 lg:pl-[54px] mr- lg:mr-28 2xl:mr-[280px]'>
          Sed ut perspiciatis unde omnis <br className="hidden lg:inline-block" />iste natus error sit voluptatem <br className="hidden lg:inline-block" />accusantium doloremque <br className="hidden lg:inline-block" />laudantium, totam rem aperiam, <br className="hidden lg:inline-block" />eaque ipsa quae ab illo inventore <br className="hidden lg:inline-block" />veritatis.
        </p>
        <div className='flex flex-col justify-center items-center pr-0 xl:pr-14 2xl:pr-[110px]'>
          <p className='uppercase text-[17px] leading-5 -tracking-[0.672px]'>Contact us at</p>
          <Link href={ExternalLink.MailTo}>
            <p className='cursor-pointer hover:text-ctz-yellow-medium'>Citizens@thehubdao.xzy</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
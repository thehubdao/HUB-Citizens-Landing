import { CommonUrls, ExternalLink } from '@/enum/urls.enum';
import Link from 'next/link';

export default function FooterUI() {
  return (
    <div className="font-work font-light text-lg text-ctz-gray-light leading-7 w-full  xl:h-[347px] flex flex-col xl:flex-row justify-between items-center bg-ctz-gray-semi_dark p-10">
      <div className="w-full xl:w-[730px] flex flex-col items-center pb-10 xl:pb-0 mr-0 2xl:mr-[220px]">
        <p className="font-monument text-ctz-yellow-light text-[33px] leading-[80%]">
          THE HUB <br />CITIZENS
        </p>
        <p>
          All rights reserved 2023
        </p>
      </div>
      <div className="w-full flex flex-wrap justify-around xl:items-center gap-y-4">
        <div className='text-center xl:text-end'>
          <Link href={CommonUrls.InvestorPrivacyNote}>
            <p className='py-[3px]'>Terms & Conditions</p>
          </Link>
          <Link href={CommonUrls.PrivacyPolicy}>
            <p className='py-[3px]'>Privacy Policy</p>
          </Link>
          <Link href={CommonUrls.InvestorPrivacyNote}>
            <p className='py-[3px]'>Investor Privacy Notice</p>
          </Link>
          <Link href={CommonUrls.CookiesPolicy}>
            <p className='py-[3px]'>Cookies Policy</p>
          </Link> 
        </div>
        <div className='w-1/2 xl:w-[283px] text-center xl:text-start mx-6 xl:mx-[54px]'>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p className='uppercase text-[17px] leading-5 -tracking-[0.672px]'>Contact us at</p>
          <Link href={ExternalLink.MailTo}>
            <p className='cursor-pointer hover:text-ctz-yellow-medium'>Citizens@thehubdao.xzy</p>
          </Link> 
        </div>
      </div>
    </div>
  )
}
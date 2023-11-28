import { BorderColor, ButtonSize, TextColor } from "@/enum/common.enum";
import Image from 'next/image';

interface ArrowButtonUIProps {
  arrow: string;
  text: string;
  borderColor: BorderColor;
  buttonSize: ButtonSize;
  textColor: TextColor;
}

export default function ArrowButtonUI({ arrow, text, borderColor, buttonSize, textColor }: ArrowButtonUIProps) {
  return (
    <button className={`border-[2px] ${borderColor === BorderColor.White ? 'border-ctz-light' : 'border-ctz-gray-dark'} cursor-pointer flex w-full ${buttonSize === ButtonSize.Large ? 'lg:w-[37.5vw]' : 'lg:w-[33vw]'} h-[120px]`}>
      <div className={`w-1/4 h-full border-r-[2px]  ${borderColor === BorderColor.White ? 'border-ctz-light' : 'border-ctz-gray-dark'} flex justify-center items-center`}>
        <Image src={arrow} alt='Play video icon' width={66} height={66} className="p-2 lg:p-0"/>
      </div>
      <div className='w-3/4 h-full flex justify-center items-center'>
        <p className={`${textColor === TextColor.light ? 'text-ctz-light' : textColor === TextColor.dark ? 'text-ctz-gray-dark' : 'text-ctz-pink-light' } text-3xl lg:text-[2.5vw] leading-[80%] uppercase`}>{text}</p>
      </div>
    </button>
  )
}
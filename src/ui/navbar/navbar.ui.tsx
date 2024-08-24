import Image from 'next/image';
import Link from 'next/link';

interface NavbarUIProps {
  label: string;
  link: string;
  hasBorder?: boolean;
  closeMenu?: () => void; 
}

export default function NavbarUI({ label, link, hasBorder, closeMenu }: NavbarUIProps) {
  return (
    <Link href={link} target='_blank' className={`cursor-pointer w-full sm:w-1/3 flex items-center justify-center my-4 sm:my-0 ${hasBorder ? 'sm:border-r-[2px] border-ctz-light' : ''} `} onClick={() =>  closeMenu && closeMenu()}>
      <p className="text-xl text-ctz-dark leading-[100%] uppercase pr-2">{label}</p>
      <Image src={'/icons/pink-arrow.png'} alt='Arrow icon' width={15} height={15} />
    </Link>
  )
}
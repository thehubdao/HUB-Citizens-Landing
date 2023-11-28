"use client"

import { BorderColor } from "@/enum/common.enum";
import { ButtonIcon, ButtonIconSize } from "@/enum/ui.enum";
import Link from "next/link";

interface ArrowButtonUIProps {
  children: React.ReactNode;
  borderColor?: BorderColor;
  icon?: ButtonIcon;
  iconLink?: string;
  iconColor?: string;
  iconSize?: ButtonIconSize;
  iconsList?: {icon: ButtonIcon, url: string}[];
}

export default function IconButtonUI({ icon, iconColor, iconSize, iconLink, children, borderColor, iconsList }: ArrowButtonUIProps) {

  console.log(icon)

  function getBorderColor(color: BorderColor | undefined): string {
    switch (color) {
      case BorderColor.Black:
        return 'border-ctz-gray-dark';
        break;
      case BorderColor.White:
        return 'border-ctz-light';
        break;
      default:
        return 'border-ctz-gray-dark';
        break;
    }
  }

  function getIconSize(size: ButtonIconSize | undefined) {
    switch (size) {
      case ButtonIconSize.small:
        return 'w-5 h-5 m-3';
        break;
      case ButtonIconSize.big:
        return 'w-16 h-16 m-7';
        break;
      default:
        return 'w-16 h-16 m-7';
        break;
    }
  }

  function getIcon(icon: ButtonIcon | undefined): React.ReactNode {
    switch (icon) {
      case ButtonIcon.play:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 21" fill="none" className={getIconSize(iconSize)}>
            <path d="M1.92377 0.254628C0.861804 -0.341979 0 0.146154 0 1.33937V19.6606C0 20.8538 0.867364 21.342 1.92377 20.7454L8.12876 17.2525L11.9819 15.083L18.2035 11.5847C19.2655 10.9881 19.2655 10.0119 18.2035 9.41526L11.9985 5.9224L8.14544 3.75292L1.92377 0.254628Z" className={`${iconColor ?? 'fill-ctz-dark'}`} />
          </svg>
        )
        break;
      case ButtonIcon.arrow:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none" className={getIconSize(iconSize)}>
            <path d="M9.75666 0.246401V11.0281H48.0055L0.0615234 58.9719L7.67412 66.5844L55.6181 18.6406V56.8893H66.3999V0.246094L9.75666 0.246401Z" className={`${iconColor ?? 'fill-ctz-dark'}`} />
          </svg>
        );
        break;
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none" className={getIconSize(iconSize)}>
            <path d="M9.75666 0.246401V11.0281H48.0055L0.0615234 58.9719L7.67412 66.5844L55.6181 18.6406V56.8893H66.3999V0.246094L9.75666 0.246401Z" className={`${iconColor ?? 'fill-ctz-dark'}`} />
          </svg>
        );
        break;
    }
  }

  return (
    <div className='flex'>
      <Link href={iconLink ?? '#'} className={`flex ${icon !== undefined ? 'cursor-pointer':'cursor-auto'}`} >
        {
          icon !== undefined &&
          <div className={`border-2 border-r-0 ${getBorderColor(borderColor)}`}>
            {getIcon(icon)}
          </div>
        }
        <div className='flex items-center border-2 border-ctz-dark'>
          {children}
        </div>
      </Link>
      {
        iconsList &&
        iconsList.map((iconItem, index) => {
          return <Link href={iconItem.url} key={index} className={`border-2 border-l-0 ${getBorderColor(borderColor)}`}>
            {getIcon(iconItem.icon)}
          </Link>
        })
      }
    </div>
  )
}
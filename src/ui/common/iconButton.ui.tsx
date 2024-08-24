"use client"

import { ButtonBorderColor, ButtonIcon, ButtonIconSize } from "@/enum/ui.enum";
import Link from "next/link";

interface ArrowButtonUIProps {
  children: React.ReactNode;
  borderColor?: ButtonBorderColor;
  icon?: ButtonIcon;
  iconLink?: string;
  iconColor?: string;
  iconSize?: ButtonIconSize;
  iconsList?: { icon: ButtonIcon, url: string }[];
  isFullWidth?: boolean; 
}

export default function IconButtonUI({ icon, iconColor, iconSize, iconLink, children, borderColor, iconsList, isFullWidth }: ArrowButtonUIProps) {

  function getBorderColor(color: ButtonBorderColor | undefined): string {
    switch (color) {
      case ButtonBorderColor.Black:
        return 'border-ctz-gray-dark';
      case ButtonBorderColor.White:
        return 'border-ctz-light';
      default:
        return 'border-ctz-gray-dark';
    }
  }

  function getIconSize(size: ButtonIconSize | undefined) {
    switch (size) {
      case ButtonIconSize.small:
        return 'w-5 h-5 m-3';
      case ButtonIconSize.big:
        return 'w-10 lg:w-16 h-10 lg:h-16 m-4 md:m-6';
      default:
        return 'w-10 lg:w-16 h-10 lg:h-16 m-4 md:m-6';
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
      case ButtonIcon.arrow:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none" className={getIconSize(iconSize)}>
            <path d="M9.75666 0.246401V11.0281H48.0055L0.0615234 58.9719L7.67412 66.5844L55.6181 18.6406V56.8893H66.3999V0.246094L9.75666 0.246401Z" className={`${iconColor ?? 'fill-ctz-dark'}`} />
          </svg>
        );
      case ButtonIcon.theHubDao:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21" fill="none" className={getIconSize(iconSize)}>
          <path d="M21.0102 10.0921C21.0102 10.0921 18.5612 8.33691 18.0735 7.48467C17.5857 6.63243 17.2956 3.63057 17.2956 3.63057C14.4931 -1.21019 7.49834 -1.21019 4.70728 3.63057C4.70728 3.63057 4.41715 6.63243 3.92938 7.48467C3.44161 8.33691 0.982486 10.0921 0.982486 10.0921C-1.80858 14.943 1.67803 21 7.27156 21C7.27156 21 10.0107 19.7851 10.9976 19.7851C11.9846 19.7851 14.7237 21 14.7237 21C20.3172 21 23.8152 14.943 21.0128 10.0921H21.0102ZM10.9951 17.3222C7.83028 17.3222 5.266 14.7566 5.266 11.5873C5.266 8.41807 7.82901 5.85248 10.9951 5.85248C14.1612 5.85248 16.7242 8.41807 16.7242 11.5873C16.7242 14.7566 14.1612 17.3222 10.9951 17.3222Z" fill="white"/>
          </svg>
        );
      case ButtonIcon.instagram:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className={getIconSize(iconSize)}>
          <path d="M10.5624 5.35948C7.56574 5.35948 5.14866 7.87783 5.14866 11C5.14866 14.1222 7.56574 16.6405 10.5624 16.6405C13.559 16.6405 15.9761 14.1222 15.9761 11C15.9761 7.87783 13.559 5.35948 10.5624 5.35948ZM10.5624 14.6671C8.62587 14.6671 7.04275 13.0225 7.04275 11C7.04275 8.97746 8.62115 7.33292 10.5624 7.33292C12.5036 7.33292 14.082 8.97746 14.082 11C14.082 13.0225 12.4988 14.6671 10.5624 14.6671ZM17.4602 5.12875C17.4602 5.8602 16.8948 6.44438 16.1975 6.44438C15.4955 6.44438 14.9348 5.85529 14.9348 5.12875C14.9348 4.40221 15.5002 3.81312 16.1975 3.81312C16.8948 3.81312 17.4602 4.40221 17.4602 5.12875ZM21.0458 6.46402C20.9657 4.70166 20.5793 3.14058 19.3402 1.8544C18.1057 0.568225 16.6074 0.165681 14.9159 0.0773179C13.1726 -0.0257726 7.94739 -0.0257726 6.20407 0.0773179C4.5173 0.160772 3.01899 0.563316 1.77983 1.84949C0.540663 3.13567 0.159018 4.69675 0.0742086 6.45911C-0.0247362 8.27547 -0.0247362 13.7196 0.0742086 15.536C0.154307 17.2983 0.540663 18.8594 1.77983 20.1456C3.01899 21.4318 4.51259 21.8343 6.20407 21.9227C7.94739 22.0258 13.1726 22.0258 14.9159 21.9227C16.6074 21.8392 18.1057 21.4367 19.3402 20.1456C20.5746 18.8594 20.961 17.2983 21.0458 15.536C21.1447 13.7196 21.1447 8.28037 21.0458 6.46402ZM18.7936 17.4849C18.4261 18.4471 17.7147 19.1883 16.7865 19.5761C15.3965 20.1505 12.0984 20.018 10.5624 20.018C9.02636 20.018 5.72348 20.1456 4.33826 19.5761C3.41477 19.1932 2.70331 18.452 2.33109 17.4849C1.77983 16.0367 1.90704 12.6004 1.90704 11C1.90704 9.39964 1.78454 5.95838 2.33109 4.51512C2.6986 3.55294 3.41006 2.81167 4.33826 2.42385C5.7282 1.84949 9.02636 1.98204 10.5624 1.98204C12.0984 1.98204 15.4012 1.8544 16.7865 2.42385C17.7099 2.80676 18.4214 3.54803 18.7936 4.51512C19.3449 5.96329 19.2177 9.39964 19.2177 11C19.2177 12.6004 19.3449 16.0416 18.7936 17.4849Z" fill="white"/>
          </svg>
        );
      case ButtonIcon.linkedin:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className={getIconSize(iconSize)}>
          <path d="M20.4286 0H1.56652C0.702232 0 0 0.683572 0 1.52271V19.5973C0 20.4364 0.702232 21.12 1.56652 21.12H20.4286C21.2929 21.12 22 20.4364 22 19.5973V1.52271C22 0.683572 21.2929 0 20.4286 0ZM6.64911 18.1029H3.38839V8.02372H6.65402V18.1029H6.64911ZM5.01875 6.64714C3.97277 6.64714 3.12812 5.83157 3.12812 4.83214C3.12812 3.83271 3.97277 3.01714 5.01875 3.01714C6.05982 3.01714 6.90937 3.83271 6.90937 4.83214C6.90937 5.83629 6.06473 6.64714 5.01875 6.64714ZM18.8719 18.1029H15.6112V13.2C15.6112 12.0309 15.5866 10.527 13.917 10.527C12.2179 10.527 11.9576 11.7999 11.9576 13.1151V18.1029H8.69688V8.02372H11.825V9.40029H11.8692C12.3062 8.60829 13.3719 7.77386 14.958 7.77386C18.258 7.77386 18.8719 9.86229 18.8719 12.5777V18.1029Z" fill="white"/>
          </svg>
        );
      case ButtonIcon.twitter:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 19" fill="none" className={getIconSize(iconSize)}>
          <path d="M19.7386 4.69954C19.7526 4.90578 19.7526 5.11206 19.7526 5.3183C19.7526 11.6089 15.2158 18.8571 6.92388 18.8571C4.36929 18.8571 1.99621 18.0763 0 16.721C0.362958 16.7652 0.711909 16.7799 1.08883 16.7799C3.19667 16.7799 5.13706 16.0286 6.68656 14.7469C4.70432 14.7027 3.04314 13.3326 2.4708 11.4469C2.75001 11.491 3.02918 11.5205 3.32236 11.5205C3.72717 11.5205 4.13202 11.4616 4.5089 11.3585C2.44291 10.9165 0.893367 9.00133 0.893367 6.68838V6.62948C1.4936 6.98305 2.19163 7.20403 2.93143 7.23346C1.71695 6.37898 0.921297 4.92051 0.921297 3.2705C0.921297 2.38659 1.14461 1.57632 1.53549 0.869174C3.75505 3.75667 7.09137 5.64235 10.8325 5.84864C10.7627 5.49507 10.7208 5.1268 10.7208 4.75849C10.7208 2.13614 12.731 0 15.2297 0C16.5279 0 17.7005 0.574552 18.5241 1.50268C19.5431 1.29644 20.5203 0.89865 21.3858 0.353574C21.0507 1.45851 20.3388 2.38664 19.4036 2.97588C20.3109 2.87281 21.1904 2.60757 22 2.2393C21.3859 3.18212 20.6181 4.02182 19.7386 4.69954Z" fill="white"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 67" fill="none" className={getIconSize(iconSize)}>
            <path d="M9.75666 0.246401V11.0281H48.0055L0.0615234 58.9719L7.67412 66.5844L55.6181 18.6406V56.8893H66.3999V0.246094L9.75666 0.246401Z" className={`${iconColor ?? 'fill-ctz-dark'}`} />
          </svg>
        );
    }
  }

  return (
    <div className={`flex ${isFullWidth ? 'w-full' : ''}`}>
      <Link href={iconLink ?? '#'} className={`flex ${icon !== undefined ? 'cursor-pointer' : 'cursor-auto'} ${isFullWidth ? 'w-full' : ''}`} target='_blank' >
        {
          icon !== undefined &&
          <div className={`border-2 border-r-0 ${getBorderColor(borderColor)}`}>
            {getIcon(icon)}
          </div>
        }
        <div className={`flex items-center border-2 ${getBorderColor(borderColor)} ${isFullWidth ? 'w-full' : ''}`}>
          {children}
        </div>
      </Link>
      {
        iconsList &&
        iconsList.map((iconItem, index) => {
          return <Link href={iconItem.url} key={index} className={`border-2 border-l-0 ${getBorderColor(borderColor)}`} target='_blank'>
            {getIcon(iconItem.icon)}
          </Link>
        })
      }
    </div>
  )
}
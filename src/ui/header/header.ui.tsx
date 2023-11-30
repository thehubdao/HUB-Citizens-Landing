"use client"

import { Menu } from "@/enum/menu.enum";
import { PageLocation } from "@/enum/urls.enum";
import NavbarUI from "../navbar/navbar.ui";
import Link from "next/link";
import { useState } from "react";

const menuOptions = [
  { label: Menu.Resources, link: PageLocation.Resources },
  { label: Menu.Create, link: PageLocation.Create },
  { label: Menu.Explore, link: PageLocation.Explore }
];

export default function HeaderUI() {
  const [isNavOpen, setIsNavOpen] = useState<Boolean>(false);
  const handleToggleClick = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className="flex w-full sm:h-[73px] border-y-[2px] border-ctz-light bg-ctz-yellow-medium fixed z-10">
      <nav className="hidden md:flex flex-col sm:flex-row justify-between w-full">
        <Link href={PageLocation.Home} className={`cursor-pointer w-[227px] flex items-center justify-center my-4 sm:my-0 sm:border-r-[2px] border-ctz-light`}>
          <p className={`text-xl text-ctz-orange-semi_dark leading-[100%] uppercase pr-2 text-center`}>The hub <br />citizens</p>
        </Link>
        {menuOptions.map((option, index) => (
          <NavbarUI key={index} label={option.label} link={option.link} hasBorder={index < menuOptions.length - 1} />
        ))}
      </nav>
      <nav className="flex md:hidden justify-between w-full">
        <Link href={PageLocation.Home} className={`cursor-pointer w-[227px] flex items-center justify-center my-4 sm:my-0  border-ctz-light`}>
          <p className={`text-xl text-ctz-orange-semi_dark leading-[100%] uppercase pr-2 text-center`}>The hub <br />citizens</p>
        </Link>
        <div className={`font-toogle text-3xl pr-4 cursor-pointer flex items-center ${isNavOpen ? 'hidden' : ''}`} onClick={() => handleToggleClick()}>
          b
        </div>
        {isNavOpen && (
          <div className="fixed h-screen inset-0 z-20 bg-ctz-yellow-medium flex flex-col justify-center items-center gap-y-6">
            <div className="absolute top-0 right-0  pt-5 pr-5 toogle-font text-3xl cursor-pointer" onClick={() => handleToggleClick()}>
              x
            </div>
            <Link href={PageLocation.Home} className={`cursor-pointer flex items-center justify-center my-4 sm:my-0 fixed top-0 pt-10 border-ctz-light`} onClick={() => handleToggleClick()}>
              <p className={`text-xl text-ctz-orange-semi_dark leading-[100%] uppercase pr-2 text-center`}>The hub <br />citizens</p>
            </Link>
            {menuOptions.map((option, index) => (
              <NavbarUI key={index} label={option.label} link={option.link} closeMenu={() => handleToggleClick()} />
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}


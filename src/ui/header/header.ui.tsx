import { Menu } from "@/enum/menu.enum";
import { PageLocation } from "@/enum/urls.enum";
import NavbarUI from "../navbar/navbar.ui";

const menuOptions = [
  { label: Menu.Resources, link: PageLocation.Resources },
  { label: Menu.Create, link: PageLocation.Create },
  { label: Menu.Explore, link: PageLocation.Explore }
];

export default function HeaderUI() {
  return (
    <header className="flex w-full  sm:h-[73px] border-y-[2px] border-ctz-light bg-ctz-yellow-medium fixed z-10">
      <nav className="flex flex-col sm:flex-row justify-between w-full">
        {menuOptions.map((option, index) => (
          <NavbarUI key={index} label={option.label} link={option.link} hasBorder={index < menuOptions.length - 1} />
        ))}
      </nav>
    </header>
  );
}


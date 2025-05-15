"use client";
import useNavbar from "@/lib/constants/navs";
import { usePathname } from "@/lib/utils/i18n/navigation";
import { useState } from "react";
import Aside from "./header/aside";
import HamburgerIcon from "./header/hamburger_icon";
import LogoRender from "./header/logo-render";
import NavBar from "./header/navbar";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const data = useNavbar();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center bg-white shadow-md px-10 py-6">
      <HamburgerIcon isOpen={isOpen} onClick={toggleSidebar} />
      <LogoRender />
      <Aside data={data} isOpen={isOpen} pathname={pathname} />
      <NavBar data={data} pathname={pathname} />
    </header>
  );
};

export default Header;

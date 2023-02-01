import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";
import { useSidebarContext } from "../context/SidebarContext";
import {Link} from "react-router-dom";

const Header: FC<Record<string, never>> = function () {
  const { } =
    useSidebarContext();

  return (
    <header className="sticky top-0 z-20 shadow-lg">
      <Navbar fluid>
        
        <Navbar.Brand href="/">
          <Image
            alt="Stu Talk logo"
            height="50"
            src="/logo.png"
            width="50"
          />
          <span className="self-center whitespace-nowrap px-3 text-2xl font-semibold dark:text-white">
            STU TALK
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="ml-50">
          <Link to="/" >Home</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/blogs">About</Link>
          <Link to="/contact">Contact</Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;

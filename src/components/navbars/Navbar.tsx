import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../others/DarkModeToggle";

type MenuLink = {
  title: string;
  path: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const menu: MenuLink[] = [
    {
      title: "Get Started",
      path: "/get-started",
    },
    {
      title: "Components",
      path: "/components",
    },
  ];
  return (
    <nav className="w-full h-16 fixed bg-white dark:bg-slate-900 transition-all ease-in-out duration-500 backdrop-blur z-30">
      <div className="w-full h-full px-5 flex justify-between items-center relative">
        <Link to={`/`} className="text-lg text-primary">
          React UI Kit
        </Link>
        <ul className="md:flex items-center gap-5 text-sm text-primary hidden">
          {menu.map((item) => (
            <Link to={item.path} key={item.path}>
              {item.title}
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <div
            className={`w-6 h-6 flex flex-col justify-between md:hidden`}
            onClick={toggleMenu}
          >
            <span
              className={`w-full h-0.5 bg-primary transition-all ease-in-out duration-500 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-primary transition-all ease-in-out duration-500 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-primary transition-all ease-in-out duration-500 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`absolute top-16 left-0 w-full backdrop-blur flex flex-col items-center transition-all ease-in-out duration-500 md:hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          {menu.map((item) => (
            <Link
              key={item.path}
              className="text-primary w-full p-5 border-b border-primary/10 text-sm bg-white dark:bg-slate-900 transition-all ease-in-out duration-500"
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

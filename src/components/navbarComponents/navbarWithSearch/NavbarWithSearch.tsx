import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarWithSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };
  const menu = [
    {
      title: "home",
      path: "#",
    },
    {
      title: "blog",
      path: "#",
    },
    {
      title: "discover",
      path: "#",
    },
  ];
  return (
    <nav className="w-full h-16 border border-primary/10 backdrop-blur">
      <div className="w-full h-full px-5 flex justify-between items-center relative">
        <Link to={`#`} className="text-lg text-primary">
          Logo
        </Link>
        <ul className="md:flex items-center gap-5 text-sm text-primary hidden capitalize">
          {menu.map((item) => (
            <Link to={item.path}>{item.title}</Link>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 p-2 rounded border-2 border-primary/40 text-sm text-primary group focus-within:border-primary/80 bg-transparent transition-all ease-in-out duration-500 max-md:hidden">
            <MdSearch className="group-focus-within:scale-125 text-base transition-all ease-in-out duration-500" />
            <input
              type="text"
              placeholder="Search"
              className=" outline-none placeholder:text-primary/20 bg-transparent w-full"
            />
          </div>
          <button className="w-8 h-8 flex items-center justify-center">
            <FaUserCircle
              size={25}
              className="text-primary hover:text-primary/60 transition-all ease-in-out duration-500"
            />
          </button>
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
          <div className="w-full p-5 border-b border-primary/10">
            <div className="w-full flex items-center gap-2 p-2 rounded border-2 border-primary/40 text-sm text-primary group focus-within:border-primary/80 bg-transparent transition-all ease-in-out duration-500">
              <MdSearch className="group-focus-within:scale-125 text-base transition-all ease-in-out duration-500" />
              <input
                type="text"
                placeholder="Search"
                className=" outline-none placeholder:text-primary/20 bg-transparent w-full"
              />
            </div>
          </div>
          {menu.map((item) => (
            <Link
              key={item.path}
              className="text-primary w-full p-5 border-b border-primary/10 text-sm capitalize"
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

export default NavbarWithSearch;

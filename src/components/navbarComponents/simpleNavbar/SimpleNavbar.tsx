import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SimpleNavbar = () => {
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
      title: "about us",
      path: "#",
    },
    {
      title: "services",
      path: "#",
    },
    {
      title: "career",
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
        <div
          className={`absolute top-16 left-0 w-full backdrop-blur flex flex-col items-center transition-all ease-in-out duration-500 md:hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
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

export default SimpleNavbar
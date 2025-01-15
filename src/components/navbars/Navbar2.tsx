import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdPlayArrow, MdWidgets } from "react-icons/md";
import DarkModeToggle from "../others/DarkModeToggle";

export type MenuLink = {
  title: string;
  path: string;
  icons?: React.ReactNode;
};

export const basicComponents: MenuLink[] = [
  { title: "Accordions", path: "/components/accordions" },
  { title: "Avatars", path: "/components/avatars" },
  { title: "Breadcrumbs", path: "/components/breadcrumbs" },
  { title: "Buttons", path: "/components/buttons" },
  { title: "Cards", path: "/components/cards" },
  { title: "Carousels", path: "/components/carousels" },
  { title: "Dropdowns", path: "/components/dropdowns" },
  { title: "Forms", path: "/components/forms" },
  { title: "Inputs", path: "/components/inputs" },
  { title: "Modals", path: "/components/modals" },
  { title: "Navbars", path: "/components/navbars" },
  { title: "Pagination", path: "/components/paginations" },
  { title: "Progress Bars", path: "/components/progress-bars" },
  { title: "Spinners/Loaders", path: "/components/spinners-loaders" },
  { title: "Tabs", path: "/components/tabs" },
  { title: "Tables", path: "/components/tables" },
  { title: "Toggles/Switches", path: "/components/toggles-switches" },
];

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state
  const location = useLocation();
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const menu: MenuLink[] = [
    {
      title: "Get Started",
      path: "/get-started",
      icons: <MdPlayArrow />,
    },
    {
      title: "Components",
      path: "/components",
      icons: <MdWidgets />,
    },
  ];

  const filteredComponents = basicComponents.filter((component) =>
    component.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className="w-full h-16 border-b border-primary/10 fixed backdrop-blur z-30">
      <div className="w-full h-full px-5 flex justify-between items-center relative">
        <Link to={`/`} className="text-lg text-primary">
          React UI Kit
        </Link>
        <div className="flex items-center gap-3">
          <DarkModeToggle />
          <div
            className={`w-6 h-6 flex flex-col justify-between lg:hidden`}
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
          className={`absolute top-16 left-0 h-[calc(100vh-4rem)] p-2 max-lg:border-r border-primary/10 bg-white/95 dark:bg-slate-900/95 w-56 backdrop-blur flex flex-col transition-all ease-in-out duration-500 overflow-y-scroll ${
            isOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
          }`}
        >
          <div className="w-full p-3">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 rounded bg-gray-100 dark:bg-gray-800 transition-all ease-in-out duration-500 text-primary text-sm focus:outline-none"
            />
          </div>
          {menu.map((item) => (
            <Link
              key={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-primary"
                  : "dark:text-secondary text-tertiary"
              } w-full p-3 text-sm flex gap-2 items-center transition-all ease-in-out duration-500`}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              <div
                className={`w-6 h-6 flex items-center justify-center rounded transition-all ease-in-out duration-500 ${
                  location.pathname === item.path
                    ? "bg-primary/20"
                    : "bg-tertiary/20 dark:bg-secondary/20"
                }`}
              >
                {item.icons}
              </div>
              <span>{item.title}</span>
            </Link>
          ))}
          <h5 className="dark:text-secondary text-tertiary text-xs font-medium px-3 mt-5 mb-2">
            Basic components
          </h5>
          {filteredComponents.length > 0 ? (
            filteredComponents.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 font-thin text-sm transition-all ease-in-out duration-500 ${
                  location.pathname === item.path
                    ? "text-primary scale-105"
                    : "text-tertiary dark:text-secondary"
                }`}
              >
                {item.title}
              </Link>
            ))
          ) : (
            <p className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
              No results found
            </p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;

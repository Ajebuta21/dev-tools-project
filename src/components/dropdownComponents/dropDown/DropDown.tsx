import React, { useEffect, useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";

const DropDown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menu = [
    { name: "Option 1", path: "#" },
    { name: "Option 2", path: "#" },
    { name: "Option 3", path: "#" },
  ];

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="py-1.5 px-5 w-fit flex items-center gap-2 rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        <span>Options</span>
        <RxCaretDown
          className={`${
            showOptions ? "rotate-180" : ""
          } transition-all ease-in-out duration-500`}
        />
      </button>
      {showOptions && (
        <div className="absolute mt-2 min-w-full flex flex-col bg-white dark:bg-slate-900 shadow-lg rounded border border-primary/10 transition-all ease-in-out duration-500">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-4 py-2 text-sm text-primary hover:bg-primary/10 hover:text-primary/80 transition-all ease-in-out duration-300"
              onClick={() => setShowOptions(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;

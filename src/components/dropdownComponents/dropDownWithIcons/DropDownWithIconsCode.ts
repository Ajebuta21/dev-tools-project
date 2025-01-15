export const DropDownWithIconsCode = `
import React, { useEffect, useRef, useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { MdEdit, MdFileCopy } from "react-icons/md";

const DropDownWithIcons = () => {
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef(null);
  const menu = [
    { name: "Edit", path: "#", icons: <MdEdit /> },
    { name: "Duplicate", path: "#", icons: <MdFileCopy /> },
    { name: "Delete", path: "#", icons: <AiFillDelete /> },
  ];

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target)
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
        className={\`\${
          showOptions ? "rotate-180" : ""
        } transition-all ease-in-out duration-500\`}
      />
      </button>
      {showOptions && (
        <div className="absolute mt-2 min-w-full flex flex-col bg-white shadow-lg rounded border border-primary/10">
          {menu.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="px-4 py-2 flex gap-3 items-center text-sm text-primary hover:bg-primary/10 hover:text-primary/80 transition-all ease-in-out duration-300"
              onClick={() => setShowOptions(false)}
            >
              {item.icons}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownWithIcons;
`;

export const ButtonIconCode = `
import React from "react";
import { IoSettings } from "react-icons/io5";

const ButtonIcon = () => {
  return (
    <button className="py-1.5 px-5 w-fit flex items-center gap-2 rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500">
      <IoSettings />
      <span>Settings</span>
    </button>
  );
};

export default ButtonIcon;
`;

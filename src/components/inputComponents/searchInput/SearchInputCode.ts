export const SearchInputCode = `
import React from "react";
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 p-2 rounded border-2 border-primary/40 text-sm text-primary group focus-within:border-primary/80 bg-transparent transition-all ease-in-out duration-500">
      <MdSearch className="group-focus-within:scale-125 transition-all ease-in-out duration-500" />
      <input
        type="text"
        placeholder="Search"
        className=" outline-none placeholder:text-primary/20 bg-transparent w-full"
      />
    </div>
  );
};

export default SearchInput;
`;

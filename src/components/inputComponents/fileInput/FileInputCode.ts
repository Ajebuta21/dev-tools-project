export const FileInputCode = `
import React from "react";

const FileInput = () => {
  return (
    <input
      type="file"
      className="p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500 file:outline-none file:px-3 file:py-1 file:bg-primary file:text-white file:rounded file:border-0"
      placeholder="Full name"
      autoComplete="additional-name"
    />
  );
};

export default FileInput;
`;

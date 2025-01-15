export const SelectInputCode = `
import React from "react";

const SelectInput = () => {
  return (
    <select
      className="p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500 appearance-none"
      defaultValue=""
    >
      <option value="" disabled selected className="text-primary/20">
        Select an option
      </option>
      <option value="option1" className="text-primary">
        Option 1
      </option>
      <option value="option2" className="text-primary">
        Option 2
      </option>
      <option value="option3" className="text-primary">
        Option 3
      </option>
    </select>
  );
};

export default SelectInput;
`
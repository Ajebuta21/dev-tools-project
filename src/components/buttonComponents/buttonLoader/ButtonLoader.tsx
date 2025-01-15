import React from "react";

const ButtonLoader = () => {
  return (
    <button className="py-1.5 px-5 w-fit flex justify-center items-center gap-2 rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500">
      <div className="w-3 h-3 border border-primary border-t-white rounded-full animate-spin"></div>
      <span>Loading</span>
    </button>
  );
};

export default ButtonLoader;

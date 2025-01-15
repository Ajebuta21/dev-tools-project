import React from "react";
import toast from "react-hot-toast";

const ButtonOutline = () => {
  return (
    <button
        onClick={() => toast.success("Button Clicked")}
      className="py-1.5 px-5 w-fit rounded shadow text-sm text-primary bg-transparent border border-primary hover:text-primary/50 hover:border-primary/50 transition-all ease-in-out duration-500"
    >
      Click me
    </button>
  );
};

export default ButtonOutline;

import React from "react";
import toast from "react-hot-toast";

const ButtonPrimary = () => {
  return (
    <button
      onClick={() => toast.success("Button Clicked")}
      className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
    >
      Click me
    </button>
  );
};

export default ButtonPrimary;

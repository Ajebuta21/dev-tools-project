import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex items-center gap-2 p-2 rounded border-2 border-primary/40 text-sm text-primary group focus-within:border-primary/80 bg-transparent transition-all ease-in-out duration-500">
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        className=" outline-none placeholder:text-primary/20 bg-transparent w-full"
      />
      <button
        onClick={() => setShow(!show)}
        className="w-5 h-5 flex items-center justify-center"
      >
        {show ? <FaRegEyeSlash /> : <FaRegEye />}
      </button>
    </div>
  );
};

export default PasswordInput;

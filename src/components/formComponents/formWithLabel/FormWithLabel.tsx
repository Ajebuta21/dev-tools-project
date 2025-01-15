import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const FormWithLabel = () => {
  const [show, setShow] = useState(false);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-3"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold text-center">
        Welcome back
      </h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-primary">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500"
          autoComplete="email"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-primary">
          Password
        </label>
        <div className="flex items-center gap-2 p-2 rounded border-2 border-primary/40 text-sm text-primary group focus-within:border-primary/80 bg-transparent transition-all ease-in-out duration-500">
          <input
            id="email"
            type={show ? "text" : "password"}
            className=" outline-none placeholder:text-primary/20 bg-transparent w-full"
          />
          <button
            onClick={() => setShow(!show)}
            className="w-5 h-5 flex items-center justify-center"
          >
            {show ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        </div>
      </div>
      <button
        type="submit"
        className="py-1.5 px-5 w-full rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        Log in
      </button>
    </form>
  );
};

export default FormWithLabel;

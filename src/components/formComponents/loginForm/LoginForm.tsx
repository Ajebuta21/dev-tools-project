import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [show, setShow] = useState(false);
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-3"
    >
      <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold text-center">
        Welcome back
      </h2>
      <input
        type="email"
        className="w-full p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500"
        placeholder="Email address"
        autoComplete="email"
      />
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
      <button
        type="submit"
        className="py-1.5 px-5 w-full rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        Log in
      </button>
    </form>
  );
};

export default LoginForm;

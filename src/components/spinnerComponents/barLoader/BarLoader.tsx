import React from "react";

const BarLoader = () => {
  return (
    <div className="flex justify-center items-center gap-1">
      <div className="w-2 h-6 bg-primary animate-pulse"></div>
      <div
        className="w-2 h-6 bg-primary animate-pulse delay-200"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="w-2 h-6 bg-primary animate-pulse delay-400"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default BarLoader;

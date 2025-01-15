export const DotLoaderCode = `
import React from "react";

const DotLoader = () => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-2 h-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="w-2 h-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="w-2 h-2 bg-primary rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
    </div>
  );
};

export default DotLoader;
`
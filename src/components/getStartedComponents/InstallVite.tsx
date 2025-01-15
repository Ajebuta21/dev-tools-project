import React from "react";
import CodeContainer from "../others/CodeContainer";

const InstallVite = () => {
  const code = `npm create vite@latest my-app --template react`;
  return (
    <CodeContainer
      code={code}
      text="Alternatively, you can use Vite for a faster setup:"
    />
  );
};

export default InstallVite;

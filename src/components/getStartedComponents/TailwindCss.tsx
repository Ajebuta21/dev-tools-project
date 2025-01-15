import React from "react";
import CodeContainer from "../others/CodeContainer";

const TailwindCss = () => {
  const code = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;
  return (
    <CodeContainer
      code={code}
      text="Add the Tailwind directives to your 'src/index.css' file:"
    />
  );
};

export default TailwindCss;

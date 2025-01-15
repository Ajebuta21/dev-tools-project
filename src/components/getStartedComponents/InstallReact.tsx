import React from "react";
import CodeContainer from "../others/CodeContainer";

const InstallReact = () => {
  const code = `npx create-react-app my-app`;
  return (
    <CodeContainer
      code={code}
      text="If you haven't already, create a new React project using the following
          command:"
    />
  );
};

export default InstallReact;

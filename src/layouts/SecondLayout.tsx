import React from "react";
import Navbar2 from "../components/navbars/Navbar2";

interface SecondLayoutProp {
  children: React.ReactNode;
}

const SecondLayout: React.FC<SecondLayoutProp> = ({ children }) => {
  return (
    <>
      <Navbar2 />
      {children}
    </>
  );
};

export default SecondLayout;

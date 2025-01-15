import React from "react";
import Navbar from "../components/navbars/Navbar";

interface BasicLayoutProp {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProp> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default BasicLayout;

import React from "react";
import { globalStyles } from "../global/globalStyles";
import { Link } from "react-router-dom";
import { basicComponents } from "../components/navbars/Navbar2";

const ComponentsPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Components</h1>
      <p className={globalStyles.text}>
        The "Components" section provides a collection of pre-built, reusable UI
        elements to accelerate your development workflow. Each component is
        designed with responsiveness, accessibility, and customization in mind,
        allowing you to adapt them seamlessly into your project.
      </p>
      <h2 className={globalStyles.header2}>How to Use the Components</h2>
      <p className={globalStyles.text}>
        To start using these components, ensure you have installed the necessary
        dependencies listed on the Get Started page. Each component's
        implementation is described in its respective section with examples and
        usage details.
      </p>
      <p className={globalStyles.text}>
        For additional customization or advanced usage, you can refer to the
        documentation of the installed libraries, such as React, Tailwind CSS,
        React Router DOM, React Hot Toast, and React Icons.
      </p>
      <h2 className={globalStyles.header2}>Available Components</h2>
      <p className={globalStyles.text}>
        Here’s an overview of the components provided and what they are used
        for:
      </p>
      <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {basicComponents.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className="w-full p-3 text-sm text-primary hover:bg-primary/10 transition-all ease-in-out duration-500"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPage;

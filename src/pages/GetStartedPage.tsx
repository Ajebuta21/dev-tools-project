import React from "react";
import { globalStyles } from "../global/globalStyles";
import InstallReact from "../components/getStartedComponents/InstallReact";
import InstallVite from "../components/getStartedComponents/InstallVite";
import NavigateToProject from "../components/getStartedComponents/NavigateToProject";
import InstallTailwind from "../components/getStartedComponents/InstallTailwind";
import TailwindConfig from "../components/getStartedComponents/TailwindConfig";
import TailwindCss from "../components/getStartedComponents/TailwindCss";
import InstallReactRouter from "../components/getStartedComponents/InstallReactRouter";
import InstallHotToast from "../components/getStartedComponents/InstallHotToast";
import StartServer from "../components/getStartedComponents/StartServer";
import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";

const GetStartedPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Get Started</h1>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>1. Install React</p>
        <InstallReact />
        <InstallVite />
        <NavigateToProject />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>2. Install Tailwind CSS</p>
        <InstallTailwind />
        <TailwindConfig />
        <TailwindCss />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>3. Install React Router</p>
        <InstallReactRouter />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>4. Install React Hot Toast</p>
        <InstallHotToast />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>5. Install React Icons</p>
        <InstallHotToast />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>6. Start the Development Server</p>
        <StartServer />
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>7. Learn More About the Tools</p>
        <p className={globalStyles.text}>
          Each tool installed in the steps above comes with its own powerful
          features. If you'd like to dive deeper into how to use them, check out
          their official documentation:
        </p>
        <ul className="list-inside list-disc">
          <li className={globalStyles.text}>
            React:{" "}
            <a className="text-primary" href="https://react.dev/">
              React Documentation
            </a>
          </li>
          <li className={globalStyles.text}>
            Tailwind CSS:{" "}
            <a
              className="text-primary"
              href="https://tailwindcss.com/docs/installation"
            >
              Tailwind Documentation
            </a>
          </li>
          <li className={globalStyles.text}>
            React Router:{" "}
            <a className="text-primary" href="https://reactrouter.com/">
              React Router Documentation
            </a>
          </li>
          <li className={globalStyles.text}>
            React Hot Toast:{" "}
            <a
              className="text-primary"
              href="https://github.com/timolins/react-hot-toast#readme"
            >
              React Hot Toast Documentation
            </a>
          </li>
          <li className={globalStyles.text}>
            React Icons:{" "}
            <a
              className="text-primary"
              href="https://react-icons.github.io/react-icons/"
            >
              React Icons Documentation
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className={globalStyles.text}>8. Explore the Components</p>
        <p className={globalStyles.text}>
          Check out the documentation for detailed instructions on each
          component and examples to get started quickly!
        </p>
        <div className="w-full flex justify-end">
          <Link
            to={`/components`}
            className="py-1.5 px-5 w-fit flex gap-1 items-center rounded shadow text-sm text-primary bg-transparent border border-primary hover:text-primary/50 hover:border-primary/50 transition-all ease-in-out duration-500"
          >
            <span>Components</span>
            <RxCaretRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;

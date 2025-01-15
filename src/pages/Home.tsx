import React from "react";
import { globalStyles } from "../global/globalStyles";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Home = () => {
  return (
    <div className={`${globalStyles.container} relative overflow-hidden`}>
      <div className="w-full h-[calc(100vh-8rem)] relative">
        <FaReact className="text-primary opacity-20 absolute -left-20 lg:-left-20 -top-10 lg:-top-16 z-0 text-[300px] lg:text-[500px]" />
        <RiTailwindCssFill className="text-primary opacity-20 absolute -right-16 lg:-right-20 -bottom-16 lg:-bottom-20 z-0 text-[300px] lg:text-[500px]" />

        <div className="w-full h-full flex flex-col items-center justify-center gap-5 relative z-10">
          <h2 className={`${globalStyles.header} text-center`}>
            Build Faster with Pre-Designed
            <br /> Components
          </h2>
          <p className={`${globalStyles.text} text-center`}>
            A sleek and customizable UI component library for your React and
            Tailwind projects.
          </p>
          <div className="flex gap-3">
            <Link
              to={`/get-started`}
              className="py-1.5 px-5 w-fit rounded shadow text-sm text-primary bg-transparent border border-primary hover:text-primary/50 hover:border-primary/50 transition-all ease-in-out duration-500"
            >
              Get Started
            </Link>
            <Link
              to={`/components`}
              className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
            >
              Components
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

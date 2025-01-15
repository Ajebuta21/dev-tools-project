import React, { useState, useEffect } from "react";
import { GoMoon, GoSun } from "react-icons/go";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="w-9 h-9 flex justify-center items-center rounded-full text-primary"
    >
      {isDarkMode ? <GoSun /> : <GoMoon />}
    </button>
  );
};

export default DarkModeToggle;

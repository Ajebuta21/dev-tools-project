import React from 'react'
import CodeContainer from '../others/CodeContainer';

const TailwindConfig = () => {
  const code = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3498db",
        secondary: "#9ca3af",
        tertiary: "#4B5563",
      },
    },
  },
  plugins: [],
};
`;
  return (
    <CodeContainer
      code={code}
      text="Update your 'tailwind.config.js' file to include your project's paths and preset default colors:"
    />
  );
}

export default TailwindConfig
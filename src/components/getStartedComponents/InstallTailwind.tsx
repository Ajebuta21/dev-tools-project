import React from 'react'
import CodeContainer from '../others/CodeContainer';

const InstallTailwind = () => {
  const code = `npm install -D tailwindcss
npx tailwindcss init`;
  return <CodeContainer code={code} text="Add Tailwind CSS to your project:" />;
}

export default InstallTailwind
import React from 'react'
import CodeContainer from '../others/CodeContainer';

const InstallReactRouter = () => {
  const code = `npm install react-router-dom`;
  return <CodeContainer code={code} text="Add 'react-router-dom' for routing:" />;
}

export default InstallReactRouter
import React from 'react'
import CodeContainer from '../others/CodeContainer';

const InstallHotToast = () => {
  const code = `npm install react-hot-toast`;
  return (
    <CodeContainer code={code} text="Add 'react-hot-toast' for notifications:" />
  );
}

export default InstallHotToast
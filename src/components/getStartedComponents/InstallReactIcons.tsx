import React from 'react'
import CodeContainer from '../others/CodeContainer';

const InstallReactIcons = () => {
 const code = `npm install react-icons`;
 return (
   <CodeContainer
     code={code}
     text="Add 'react-icons' for easy access to a wide range of icons:"
   />
 );
}

export default InstallReactIcons
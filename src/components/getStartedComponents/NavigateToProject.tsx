import React from 'react'
import CodeContainer from '../others/CodeContainer';

const NavigateToProject = () => {
 const code = `cd my-app`;
 return (
   <CodeContainer code={code} text="Navigate into your project directory:" />
 );
}

export default NavigateToProject
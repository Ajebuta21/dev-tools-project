import React from 'react'
import CodeContainer from '../others/CodeContainer';

const StartServer = () => {
const code = `npm start`;
return (
  <CodeContainer
    code={code}
    text="Run the following command to start your development server:"
  />
);
}

export default StartServer
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedDarkAtom } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ComponentsContainerProp {
  title: string;
  code: string;
  component: React.JSX.Element;
}

const ComponentsContainer = ({
  title,
  code,
  component,
}: ComponentsContainerProp) => {
  const [showCode, setShowCode] = useState<boolean>(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy code!");
    }
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between md:items-center max-md:flex-col max-md:gap-2">
        <h3 className="text-primary capitalize">{title}</h3>
        <div className="flex items-center gap-3">
          <div className="p-1 rounded bg-primary/10 flex gap-2 text-primary">
            <button
              onClick={() => setShowCode(false)}
              className={`p-2 rounded text-xs w-20 py-1.5 transition-all ease-in-out duration-500 ${
                !showCode ? "bg-white dark:bg-slate-900 shadow" : ""
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setShowCode(true)}
              className={`p-2 rounded text-xs w-20 py-1.5 transition-all ease-in-out duration-500 ${
                showCode ? "bg-white dark:bg-slate-900 shadow" : ""
              }`}
            >
              Code
            </button>
          </div>
          <button className="text-gray-400" onClick={handleCopy}>
            <MdContentCopy className="text-primary" />
          </button>
        </div>
      </div>
      {showCode ? (
        <div className="w-full">
          <SyntaxHighlighter language="javascript" style={solarizedDarkAtom}>
            {code}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className="w-full h-96 p-5 border border-primary/50 rounded">
          <div className="w-full h-full flex items-center justify-center overflow-scroll">
            {component}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponentsContainer;

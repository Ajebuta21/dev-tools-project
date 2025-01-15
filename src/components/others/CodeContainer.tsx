import React from "react";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { globalStyles } from "../../global/globalStyles";

const CodeContainer = ({ code, text }: { code: string; text: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success("Code copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy code!");
    }
  };

  return (
    <div className="w-full flex flex-col gap-1 items-end mt-2">
      <div className="w-full flex justify-between gap-3">
        <p className={globalStyles.text}>{text}</p>
        <button className="text-gray-400" onClick={handleCopy}>
          <MdContentCopy className={globalStyles.text} />
        </button>
      </div>
      <div className="w-full">
        <SyntaxHighlighter language="text" style={dracula}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeContainer;

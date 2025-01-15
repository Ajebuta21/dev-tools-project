export const LabeledProgressBarCode = `
import React from "react";

const LabeledProgressBar = ({
  value,
  maxValue,
  label,
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full flex flex-col gap-1 relative">
      <div className="flex justify-center items-center gap-2 text-xs text-white absolute w-full h-full">
        <span>{label}</span>
        <span>{\`\${Math.round(percentage)}%\`}</span>
      </div>
      <div className="w-full h-4 bg-primary/40 rounded-full">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: \`\${percentage}%\` }}
        ></div>
      </div>
    </div>
  );
};

export default LabeledProgressBar;
`;

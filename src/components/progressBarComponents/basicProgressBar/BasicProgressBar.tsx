import React from "react";

const BasicProgressBar = ({
  value,
  maxValue,
}: {
  value: number;
  maxValue: number;
}) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="w-full h-4 bg-primary/40 rounded-full">
      <div
        className="h-full bg-primary rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default BasicProgressBar;

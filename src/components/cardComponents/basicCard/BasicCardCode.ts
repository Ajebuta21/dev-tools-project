export const BasicCardCode = `
import React from "react";

const BasicCard = ({
  title,
  description,
  actionText,
}) => {
  return (
    <div className="p-5 flex flex-col gap-1 bg-white rounded shadow-md border">
      <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold">
        {title}
      </h2>
      <p className="text-sm text-gray-400">{description}</p>
      <button
        type="submit"
        className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500 mt-3"
      >
        {actionText}
      </button>
    </div>
  );
};

export default BasicCard;
`;

export const ImageCardCode = `
import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({
  imageUrl,
  title,
  description,
  actionLink,
}) => {
  return (
    <div className="max-w-xs bg-white rounded shadow-md overflow-hidden border dark:border-gray-700">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col gap-1">
        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold">
          {title}
        </h2>
        <p className="text-sm text-gray-400">{description}</p>
        <Link
          to={actionLink}
          className="text-primary mt-4 text-sm inline-block hover:underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
`;

import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({
  imageUrl,
  title,
  description,
  actionLink,
}: {
  imageUrl: string;
  title: string;
  description: string;
  actionLink: string;
}) => {
  return (
    <div className="max-w-xs bg-white dark:bg-slate-900 transition-all ease-in-out duration-500 rounded shadow-md overflow-hidden  border dark:border-gray-700">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-5 flex flex-col gap-1">
        <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold">
          {title}
        </h2>
        <p className="text-sm text-gray-400">{description}</p>
        <Link
          to={actionLink}
          className="text-primary mt-4 text-sm inline-block hover:underline transition-all ease-in-out duration-500"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;

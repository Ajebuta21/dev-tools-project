import React from "react";

const StatusAvatar = ({
  imageUrl,
  altText,
  isOnline,
}: {
  imageUrl: string;
  altText: string;
  isOnline: boolean;
}) => {
  return (
    <div className="relative w-14 h-14 overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover rounded-full"
      />
      <div
        className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 ${
          isOnline ? "bg-green-500 border-white" : "bg-gray-400 border-white"
        }`}
      ></div>
    </div>
  );
};

export default StatusAvatar;

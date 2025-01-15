import React from "react";

const SimpleAvatar = ({
  imageUrl,
  altText,
}: {
  imageUrl: string;
  altText: string;
}) => {
  return (
    <div className="w-14 h-14 rounded-full overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SimpleAvatar;

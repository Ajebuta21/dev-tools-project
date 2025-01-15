export const SimpleAvatarCode = `
import React from "react";

const SimpleAvatar = ({
  imageUrl,
  altText,
}) => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SimpleAvatar;
`;

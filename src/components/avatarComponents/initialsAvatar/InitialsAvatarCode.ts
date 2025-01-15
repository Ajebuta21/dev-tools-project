export const InitialsAvatarCode = `
import React from "react";

const InitialsAvatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-lg font-semibold">
      {initials}
    </div>
  );
};

export default InitialsAvatar;
`
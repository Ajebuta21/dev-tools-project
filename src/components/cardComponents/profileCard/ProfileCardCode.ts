export const ProfileCardCode = `
import React from "react";

const ProfileCard = ({
  avatarUrl,
  name,
  role,
  onMessage,
  onFollow,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border dark:border-gray-700 text-center">
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto border-4 border-primary"
      />
      <h2 className="text-lg md:text-xl text-primary font-semibold mt-4">
        {name}
      </h2>
      <p className="text-sm text-gray-400">{role}</p>
      <div className="flex justify-center mt-4 gap-3">
        <button
          onClick={onMessage}
          className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500 mt-3"
        >
          Message
        </button>
        <button
          onClick={onFollow}
          className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-secondary hover:bg-secondary/50 transition-all ease-in-out duration-500 mt-3"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
`
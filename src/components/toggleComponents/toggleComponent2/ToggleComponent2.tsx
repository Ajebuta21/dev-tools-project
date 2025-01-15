import React, { useState } from "react";

const ToggleComponent2 = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div
      className="bg-primary/10 rounded-3xl w-16 p-2 flex items-center cursor-pointer"
      onClick={() => setIsToggled(!isToggled)}
    >
      <div
        className={`w-6 h-6 rounded-full transition-all duration-300 ease-in-out ${
          isToggled ? "bg-primary" : "bg-secondary/50"
        }`}
        style={{
          transform: isToggled ? "translateX(100%)" : "translateX(0)",
        }}
      ></div>
    </div>
  );
};

export default ToggleComponent2;

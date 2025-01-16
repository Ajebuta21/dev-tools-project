import React from "react";
import {
  FaRegClock,
  FaPaintBrush,
  FaMobileAlt,
  FaPlug,
  FaWeightHanging,
} from "react-icons/fa";
import { globalStyles } from "../../global/globalStyles";

const features = [
  {
    id: 1,
    icon: <FaRegClock size={50} />,
    title: "Time-Saving",
    description:
      "Pre-built components save you hours of design and development.",
  },
  {
    id: 2,
    icon: <FaPaintBrush size={50} />,
    title: "Customizable",
    description:
      "Tailwind-powered designs for seamless integration with your styles.",
  },
  {
    id: 3,
    icon: <FaMobileAlt size={50} />,
    title: "Responsive",
    description:
      "Mobile-first design ensures your UI looks great on all devices.",
  },
  {
    id: 4,
    icon: <FaPlug size={50} />,
    title: "Easy to Use",
    description: "Plug-and-play components with detailed examples.",
  },
  {
    id: 5,
    icon: <FaWeightHanging size={50} />,
    title: "Lightweight",
    description: "Minimal dependencies to keep your app fast and efficient.",
  },
];

const SectionTwo = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-10 items-center justify-center p-5">
      <h2 className={globalStyles.header}>Why Choose This Library?</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="p-5 rounded text-center transition-all ease-in-out duration-300 flex items-center gap-5"
          >
            <div className="flex flex-col items-end gap-1">
              <h3
                className={`${globalStyles.header2} border-b w-full text-left border-primary/50 pb-2`}
              >
                {title}
              </h3>
              <p className={`${globalStyles.text} text-left`}>{description}</p>
            </div>
            <div className="text-primary">{icon}</div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ id, icon, title, description }) => (
          <div
            key={id}
            className="p-5 rounded text-center transition-all ease-in-out duration-300 flex flex-col items-center gap-5"
          >
            <div className="text-primary">{icon}</div>
            <h3 className={globalStyles.header2}>{title}</h3>
            <p className={globalStyles.text}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;

import React, { useState } from "react";

const BasicTabs = ({
  tabs,
}: {
  tabs: { label: string; content: string }[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-primary/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2  ${
              activeTab === index
                ? " border-primary text-primary text-lg"
                : "text-gray-400 border-transparent text-sm"
            } hover:text-primary transition-all ease-in-out duration-500 border-b-2`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-400">{tabs[activeTab].content}</div>
    </div>
  );
};

export default BasicTabs;

import React, { useState } from "react";

const IconTabs = ({
  tabs,
}: {
  tabs: { label: string; icon: any; content: string }[];
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-primary/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex items-center gap-2 px-4 py-2 text-sm transition-all ease-in-out duration-500 ${
              activeTab === index ? "text-primary" : "text-gray-400"
            } hover:text-primary`}
          >
            <tab.icon />
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-4 text-sm text-gray-400">{tabs[activeTab].content}</div>
    </div>
  );
};

export default IconTabs;

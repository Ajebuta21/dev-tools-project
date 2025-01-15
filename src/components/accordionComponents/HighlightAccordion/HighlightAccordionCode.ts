export const HighlightAccordionCode = `
import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const HighlightAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    {
      title: "Lorem Ipsum",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
      title: "Why do we use it?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  const handleToggle = (index) {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {items.map((item, index) => (
        <div key={index} className="border-b border-primary/20">
          <button
            className="p-3 w-full flex justify-between items-center"
            onClick={() => handleToggle(index)}
          >
            <h3
              className={\`text-sm \${
                openIndex === index ? "text-primary/80" : "text-primary"
              }\`}
            >
              {item.title}
            </h3>
              <RxCaretDown
                  className={\`transition-all ease-in-out duration-300 text-primary \${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }\`}
          </button>
          {openIndex === index && (
            <div
              onClick={() => setOpenIndex(null)}
              className="p-3 pt-0 text-xs text-primary/70 cursor-pointer"
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HighlightAccordion;
`;

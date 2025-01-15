import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const SimpleAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const handleToggle = (index: number | null): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-primary/10 rounded overflow-hidden"
        >
          <button
            className="w-full py-2 px-4 text-left flex justify-between items-center bg-primary/5 hover:bg-primary/10 transition-all"
            onClick={() => handleToggle(index)}
          >
            <span className="text-primary text-sm">{item.title}</span>
            <RxCaretDown
              className={`transition-all ease-in-out duration-300 text-primary ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 text-sm text-primary/80">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SimpleAccordion;

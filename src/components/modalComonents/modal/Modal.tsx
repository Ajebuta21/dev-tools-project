import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        Open modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
          <div className="bg-white dark:bg-slate-900 p-8 rounded w-80 flex flex-col gap-3 items-center transition-all ease-in-out duration-1000">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary">
              Modal
            </h2>
            <p className="text-secondary text-sm">This is a modal</p>
            <button
              onClick={() => setIsOpen(false)}
              className="py-1.5 px-5 w-full rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

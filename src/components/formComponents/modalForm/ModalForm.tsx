import React, { useState } from "react";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="py-1.5 px-5 w-fit rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        New post
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
          <div className="bg-white dark:bg-slate-900 p-8 rounded w-80 flex flex-col gap-3 items-center transition-all ease-in-out duration-1000">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full flex flex-col gap-3"
            >
              <h2 className="text-lg md:text-xl lg:text-2xl text-primary font-semibold text-center">
                New post
              </h2>
              <input
                type="text"
                className="w-full p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500"
                placeholder="Subject"
              />
              <textarea
                rows={3}
                className="p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500 resize-none"
                placeholder="Post"
              ></textarea>
              <div className="w-full flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="py-1.5 px-5 w-full rounded shadow text-sm text-white bg-secondary hover:bg-secondary/50 transition-all ease-in-out duration-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-1.5 px-5 w-full rounded shadow text-sm text-white bg-primary hover:bg-primary/50 transition-all ease-in-out duration-500"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;

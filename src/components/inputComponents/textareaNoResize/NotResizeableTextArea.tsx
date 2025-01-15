import React from "react";

const NotResizeableTextArea = () => {
  return (
    <textarea
      rows={3}
      className="p-2 rounded outline-none border-2 border-primary/40 text-sm text-primary focus-within:border-primary/80 bg-transparent placeholder:text-primary/20 transition-all ease-in-out duration-500 resize-none"
      placeholder="Blog post"
    ></textarea>
  );
};

export default NotResizeableTextArea;

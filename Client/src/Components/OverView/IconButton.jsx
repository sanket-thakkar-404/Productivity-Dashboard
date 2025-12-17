import React from "react";

const IconButton = ({icon , onClick}) => {
  return (
    <>
      <button
      onClick={onClick}
      className="text-2xl rounded-full bg-[#fdfdfd] flex items-center justify-center w-12 h-12 text-[#262626]">
        <i className={icon}></i>
      </button>
    </>
  );
};

export default IconButton;

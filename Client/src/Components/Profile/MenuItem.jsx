import React from "react";

const MenuItem = ({icon , text , active}) => {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer
        ${
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      <i className={`${icon} text-xl`} />
      <span className="text-xl font-medium">{text}</span>
    </div>
  );
};

export default MenuItem;

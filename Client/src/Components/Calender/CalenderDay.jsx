import React from "react";

const CalenderDay = ({ onClick, day, date, active }) => {
  return (
      <div
        onClick={onClick}
        className={`text-center w-28 h-14 flex flex-col justify-center rounded-lg cursor-pointer
        ${
          active
            ? "bg-[#262626] text-white"
            : "hover:bg-[#262626] hover:text-white"
        }
      `}
      >
        <h3 className="text-xs font-medium">{day}</h3>
        <p className="text-sm">{date}</p>
      </div>
  );
};

export default CalenderDay;

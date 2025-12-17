import { useState } from "react";
import LinearChart from "./LinearChart";

const WeeklyProgressCard = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const [activeDay, setActiveDay] = useState(null);
  return (
    <div className="bg-transparent border-2 border-[#fcf8f8] rounded-2xl p-6 w-full max-w-md">
      {/* header */}
      <div className="flex justify-between items-center  p-2">
        <h3 className="text-2xl">Weekly Progress</h3>
        <i className="ri-pie-chart-line text-xl"></i>
      </div>

      {/* legend */}
      <div className="flex gap-4 text-sm mb-4 p-3">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          Sport
        </span>
        <span className="flex items-center gap-2 ">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          Study
        </span>
      </div>

      {/* linear chart */}
      <LinearChart />

      {/* Days */}
      <div className="flex justify-between text-sm text-black">
        {days.map((day, i) => (
          <span
            key={i}
            onClick={() => {
              setActiveDay(setActiveDay === i ? null : i);
            }}
            className={`${
              activeDay === i ? "bg-black text-white " : ""
            }rounded-full w-6 h-6 flex items-center justify-center cursor-pointer`}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgressCard;

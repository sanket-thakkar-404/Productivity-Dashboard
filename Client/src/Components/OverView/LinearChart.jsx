import React, { useState } from "react";
import { weeklyProgress } from "../../data/MockWeeklyProgress";

const LinearChart = () => {
  const generatePath = (data) => {
    return data
      .map((v, i) => {
        const x = (i * 300) / (data.length - 1);
        const y = 100 - v;
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
  };
  const [data] = useState(weeklyProgress);

  return (
    <div className=" h-50  mb-5">
      <svg viewBox="0 0 300 60" className="w-full h-32">
        <path
          d={generatePath(data.study)}
          stroke="#cfcfcf"
          strokeWidth="3"
          fill="none"
        />
        
        <path
          d={generatePath(data.sport)}
          stroke="#000"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default LinearChart;

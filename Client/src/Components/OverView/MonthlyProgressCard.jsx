import React from "react";
import ProcessingCard from "./ProcessingCard";

const MonthlyProgressCard = () => {
  return (
    <div className="bg-white rounded-2xl p-5">
      <div className="flex justify-between items-center  p-2">
        <h3 className="text-2xl">Monthly Progress</h3>
        <i className="ri-line-chart-fill text-2xl"></i>
      </div>
      <div className="text-sm text-gray-400 px-2 mb-4">
        <span className="text-xl font-bold">+20%</span> compared to last month*
      </div>

      {/* body */}
      <div className="flex gap-6 items-center px-3">
        {/* legend */}
        <div className="space-y-5 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2  bg-[black] rounded-full"></span> Sport
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span className="w-2 h-2  bg-[#525252ad] rounded-full"></span> Study
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span> Project
          </div>
        </div>

        {/* donut Chart */}
        <div className="w-80 h-55 relative">
          <svg width="290" height="210">
            <ProcessingCard
              radius={90}
              stroke={8}
              progress={120}
              color="#e5e5e5"
            />
            {/* Study */}
            <ProcessingCard
              radius={50}
              stroke={6}
              progress={70}
              color="#9ca3af"
            />
            {/* Sport */}
            <ProcessingCard radius={70} stroke={6} progress={80} color="#000" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">120%</h2>
            <p className="text-xs text-gray-400">overall</p>
          </div>
        </div>
      </div>
      {/* <CircleProgress/> */}

      <div className="flex items-center gap-4 mt-6">
        <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
          <i className="ri-share-line"></i>
        </button>
        <button className="flex-1 cursor-pointer border-2 hover:bg-[#262626] hover:text-[#fdfdfd] transition-all rounded-full py-2 flex items-center justify-center gap-2">
          Download Report <i className="ri-download-line"></i>
        </button>
      </div>

    </div>
  );
};

export default MonthlyProgressCard;

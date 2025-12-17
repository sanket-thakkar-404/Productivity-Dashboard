import React from "react";
import StatsBlock from "./StatsBlock";
import StatMiniCard from "./StatMiniCard";

const OverallInfoCard = () => {
  return (
    <div className="bg-[#262626] text-[#fdfdfd] rounded-3xl w-full max-w-md p-7">
      {/* header */}
      <div className="flex justify-between items-center mb-4 p-3">
        <h3 className="text-xl font-semibold mainHeading">
          Overall Information
        </h3>
        <div className="flex gap-4">
          <i className="ri-share-line cursor-pointer text-xl"></i>
          <i className="ri-more-2-line cursor-pointer text-xl"></i>
        </div>
      </div>

      {/* top Stats */}
      <div className="flex items-center justify-between mb-6 p-4">
        <StatsBlock number={43} title="Task done" subtitle="For all time" />
        <div className="w-px h-14 bg-white/20"></div>
        <StatsBlock number={2} title="Project are" subtitle="stopped" />
      </div>

      {/* Progress bar */}
      <div className="w-16 h-2 bg-black rounded-full mb-6"></div>

       {/*Bottom Card */}
       <div className="grid grid-cols-3 gap-4">
        <StatMiniCard
          icon="ri-focus-2-line"
          number="28"
          label="Projects"
        />
        <StatMiniCard
          icon="ri-loader-3-line"
          number="14"
          label="In Progress"
        />
        <StatMiniCard
          icon="ri-checkbox-circle-line"
          number="11"
          label="Completed"
        />
       </div>
    </div>
  );
};

export default OverallInfoCard;

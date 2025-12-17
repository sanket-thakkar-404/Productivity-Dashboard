import React from "react";

const StatsBlock = ({ number, title, subtitle }) => {
  return (
    <div className="flex items-end gap-2">
      <h1 className="text-6xl number">{number}</h1>
      <p className="text-sm text-[#aba7a7a5]">
        {title} <br />
        {subtitle}
      </p>
    </div>
  );
};

export default StatsBlock;

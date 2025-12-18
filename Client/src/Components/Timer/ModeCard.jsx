function ModeCard({ title, time, onClick, active, className, icon }) {
  return (
    <div
      onClick={onClick}
      className={`w-54 h-30 rounded-xl p-4 flex flex-col justify-between ${className}
      ${active ? "bg-red-400 text-white" : "bg-gray-400 text-white"}`}
    >
      {/* Top Row */}
      <div className="flex justify-between items-center text-sm font-medium">
        <span>{title}</span>
        <i className={icon}></i>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center gap-3">
        <i className="ri-fire-line text-xl"></i>
        <span className="text-2xl font-bold">
          {time} <span className="text-sm font-normal">min</span>
        </span>
      </div>
    </div>
  );
}

export default ModeCard;

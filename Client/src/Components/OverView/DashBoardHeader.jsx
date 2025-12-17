import React from "react";
import IconButton from "./IconButton";

const DashBoardHeader = ({ username , profile }) => {
  return (
    <header className="flex justify-between p-5 items-center">
      {/* Greeting */}
      <h2 className="heading text-3xl">Hi ! {username}</h2>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <button 
        className="px-8 py-3 bg-[#262626] rounded-2xl text-[#fdfdfd] flex justify-center items-center gap-2 bg-green-5000">
        <i className="ri-add-line text-xl "></i> Create
        </button>

        <IconButton icon="ri-search-line"/>
        <IconButton icon="ri-notification-line"/>
        <div className="profile w-13 h-13 rounded-full bg-green-500 overflow-hidden">
          <img src={profile} alt={username} />
        </div>
      </div>
    </header>
  );
};

export default DashBoardHeader;

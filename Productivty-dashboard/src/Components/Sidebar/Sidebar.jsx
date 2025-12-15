import React from "react";
import MenuSection from "./MenuSection";

const Sidebar = () => {
  return (
    <aside className="sidebar flex-1 p-8 w-full h-full bg-white rounded-3xl shadow-light-500">
      <h5 className="companyName text-center text-xl mb-5">Dashboard</h5>
      <MenuSection/>
    </aside>
  );
};

export default Sidebar;

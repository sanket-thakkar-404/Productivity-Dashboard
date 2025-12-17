import React from "react";
import MenuSection from "./MenuSection";

const Sidebar = () => {
  return (
    <aside className="sidebar flex-1 p-6 w-full h-full bg-white rounded-3xl shadow-light-500">
      <h5 className="heading text-center text-2xl mb-5">Dashboard</h5>
      <MenuSection/>
    </aside>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";

const TaskCardHeader = () => {
  return (
    <div className="flex justify-between  mb-2  p-3">
      <h1 className="text-2xl font-bold">Task In process (2) </h1>
      <NavLink to="/task" className="text-lg cursor-pointer">
        open archive <i className="ri-arrow-drop-right-line text-xl"></i>
      </NavLink>
    </div>
  );
};

export default TaskCardHeader;

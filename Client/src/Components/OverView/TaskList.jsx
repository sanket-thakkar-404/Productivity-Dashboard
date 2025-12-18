import { useState } from "react";
import TaskMenuItem from "./TaskMenuItem";

const TaskList = ({ id, title, date, onDelete, onEdit, onPin }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-64 min-h-44 rounded-2xl bg-white p-5">
      
      <div className="flex justify-between mb-3">
        <i className={`ri-gift-line text-3xl`} />

        <i
          onClick={() => setOpen(prev => !prev)}
          className="ri-more-2-line cursor-pointer"
        />
      </div>

      <div className="text-xl mb-4 min-w-40 min-h-20 break-words">{title}</div>

      <div className="flex justify-between text-gray-500">
        <span>{date}</span>
        <i className="ri-notification-line" />
      </div>

      {open && (
        <TaskMenuItem
          onPin={() => {
            onPin(id);
            setOpen(false);
          }}
          onEdit={() => {
            onEdit(id);
            setOpen(false);
          }}
          onDelete={() => {
            onDelete(id);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default TaskList;
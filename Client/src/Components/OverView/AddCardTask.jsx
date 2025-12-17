import { useState } from "react";

const AddCardTask = ({ isAdding, setIsAdding, onAdd }) => {
  const [value, setValue] = useState("");

  if (!isAdding) {
    return (
      <div
        onClick={() => setIsAdding(true)}
        className="w-50 shrink-0 h-50 rounded-2xl border-2 border-dashed
                   flex flex-col items-center justify-center
                   cursor-pointer hover:bg-gray-100"
      >
        <span className="text-2xl">+</span>
        <span>Add Task</span>
      </div>
    );
  }

  return (
    <div className="w-64 shrink-0 h-44 rounded-2xl bg-white p-4 shadow">
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Task title"
        className="w-full border px-3 py-2 rounded mb-3"
        onKeyDown={(e) => e.key === "Enter" && onAdd(value)}
      />

      <div className="flex gap-2">
        <button
          onClick={() => {
            setValue('')
            onAdd(value)
          } }
          className="bg-black text-white px-3 py-1 rounded"
        >
          Add
        </button>

        <button
          onClick={() => setIsAdding(false)}
          className="border px-3 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCardTask;
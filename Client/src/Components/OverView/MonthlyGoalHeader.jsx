import { useState } from "react";
import ProgressCard from "./ProcessingCard";

const MonthlyGoalHeader = ({
  goals,
  setGoals,
  completed,
  editMode,
  setEditMode,
  setCompleted,
}) => {
  const [newGoal, setNewGoal] = useState("");

  const total = goals.length;
  const progress = Math.min(completed.length, total);
  const percentage = (progress / total) * 100;

  const addGoal = () => {
    if (!newGoal.trim()) return;
    setGoals([...goals, newGoal]);
    setNewGoal("");
  };

  const deleteGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
    setCompleted((prev) =>
      prev.filter((i) => i !== index).map((i) => (i > index ? i - 1 : i))
    );
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between p-2">
        <h1 className="text-2xl">Month Goals:</h1>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 relative">
            <svg width="32" height="32">
              <ProgressCard
                radius={14}
                stroke={3}
                progress={percentage}
                color="#111827"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs">
              {progress}/{total}
            </div>
          </div>

          <i
            className={`text-xl cursor-pointer ${
              editMode ? "ri-close-line" : "ri-pencil-fill"
            }`}
            onClick={() => setEditMode((prev) => !prev)}
          ></i>
        </div>
      </div>

      {editMode && (
        <div className="space-y-2 mt-2">
          <div className="flex gap-2">
            <input
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder="New goal"
              className="outline-none px-2 py-1 rounded w-full"
            />
            <button
              onClick={addGoal}
              className="bg-black text-white px-3 rounded"
            >
              Add
            </button>
          </div>

          {goals.map((goal, i) => (
            <div
              key={i}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{goal}</span>
              <button onClick={() => deleteGoal(i)} className="text-red-500">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthlyGoalHeader;

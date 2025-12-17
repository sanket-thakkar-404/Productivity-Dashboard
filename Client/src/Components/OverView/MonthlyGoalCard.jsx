import React, { useEffect, useState } from "react";
import MonthlyGoalHeader from "./MonthlyGoalHeader";
import MonthlyChecklistCard from "./MonthlyChecklistCard";
import { MonthlyGoals } from "../../data/MonthlyGoalData";

const MonthlyGoalCard = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem("monthly-goals");
    return saved ? JSON.parse(saved) : MonthlyGoals;
  });

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("monthly-completed");
    return saved ? JSON.parse(saved) : [];
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("monthly-goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("monthly-completed", JSON.stringify(completed));
  }, [completed]);

  return (
    <div className="col-span-3 bg-white p-4 rounded-2xl">
      <MonthlyGoalHeader
        goals={goals}
        setGoals={setGoals}
        completed={completed}
        editMode={editMode}
        setEditMode={setEditMode}
        setCompleted={setCompleted}
      />

      {!editMode && (
        <MonthlyChecklistCard
          goals={goals}
          completed={completed}
          setCompleted={setCompleted}
        />
      )}
    </div>
  );
};

export default MonthlyGoalCard;
import { useEffect, useState } from "react";
import AddCardTask from "./AddCardTask";
import TaskCardHeader from "./TaskCardHeader";
import TaskList from "./TaskList";
const TaskCard = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdding, setIsAdding] = useState(false);

  const generateTaskId = (tasks) => {
    if (tasks.length === 0) return "tasks-001";

    const lastId = tasks[tasks.length - 1].id; // tasks-007
    const lastNumber = parseInt(lastId.split("-")[1], 10); // 7
    const nextNumber = lastNumber + 1;

    return `tasks-${String(nextNumber).padStart(3, "0")}`;
  };
  const getDateLabel = (timestamp) => {
    const today = new Date();
    const d = new Date(timestamp);

    return today.toDateString() === d.toDateString()
      ? "Today"
      : d.toLocaleDateString();
  };
  const label = getDateLabel(Date.now());

  const addTask = (title) => {
    if (!title.trim()) return;

    const newTasks = {
      id: generateTaskId(tasks),
      title,
      date: label,
      icon: "ri-gift-line",
    };

    setTasks((prev) => [...prev, newTasks]);
    setIsAdding(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handlePin = (id) => {
    setTasks((prev) => {
      const task = prev.find((t) => t.id === id);
      const rest = prev.filter((t) => t.id !== id);
      return [task, ...rest]; // pin = top
    });
  };

  const handleEdit = (id) => {
    console.log("Edit task:", id);
    // yahan modal / inline edit open kar
  };

  return (
    <div className="col-span-7 p-4 ">
      <TaskCardHeader />
      <div className="flex flex-nowrap gap-5 overflow-auto">
        <AddCardTask
          isAdding={isAdding}
          setIsAdding={setIsAdding}
          onAdd={addTask}
        />
        {tasks.map((task) => (
          <TaskList
            key={task.id}
            {...task}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onPin={handlePin}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;

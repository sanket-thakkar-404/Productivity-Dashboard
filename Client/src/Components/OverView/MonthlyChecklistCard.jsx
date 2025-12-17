const MonthlyChecklistCard = ({ goals, completed, setCompleted }) => {
  const toggleGoal = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="space-y-2 p-4">
      {goals.map((goal, index) => {
        const isDone = completed.includes(index);

        return (
          <label
            key={index}
            className={`flex items-center gap-3 cursor-pointer ${
              isDone ? "text-black" : "text-gray-400"
            }`}
          >
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => toggleGoal(index)}
              className="accent-black"
            />
            <span>{goal}</span>
          </label>
        );
      })}
    </div>
  );
};

export default MonthlyChecklistCard;
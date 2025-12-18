
const TimeTaskInput = ({ time, value,done, onChange, ontoggleDone }) => {


  return (
    <div className="bg-white p-5 rounded-2xl">
      <h2 className="mb-1 text-lg text-black">{time} </h2>
      <div className="flex gap-4">
        <input
          type="text"
          disabled={done}
          className={`w-full text-xl line h-10 outline-none
                ${done ? "line-through text-gray-400" : ""}
                `}
          placeholder="Add Task...."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          className="text-2xl"
          onClick={() => ontoggleDone(!done)}
        >
          {done ? "❌" : "✅" }
        </button>
      </div>
    </div>
  );
};

export default TimeTaskInput;

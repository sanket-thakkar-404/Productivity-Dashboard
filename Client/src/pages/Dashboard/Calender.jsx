import CalenderStrip from "../../Components/Calender/CalenderStrip";
import CalenderHeader from "../../Components/Calender/CalenderHeader";
import { generateSlot } from "../../utils/generate24hourSlot";
import TimeTaskInput from "../../Components/Calender/TimeTaskInput";
import { useEffect, useState } from "react";

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    return localStorage.getItem("selectedDate") || "";
  });
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    if (!selectedDate) return;
    localStorage.setItem("selectedDate", selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (!selectedDate) return;

    const allData = JSON.parse(localStorage.getItem("calenderTasks")) || {};
    const dateData = allData[selectedDate] || {}; //agar new date → empty

    setTasks(structuredClone(dateData));
  }, [selectedDate]);

  useEffect(() => {
    if (!selectedDate) return;

    const allData = JSON.parse(localStorage.getItem("calenderTasks")) || {};
    allData[selectedDate] = tasks;

    localStorage.setItem("calenderTasks", JSON.stringify(allData));
  }, [selectedDate, tasks]);

  return (
    <div className="p-2">
      <CalenderHeader />
      <CalenderStrip setSelectedDate={setSelectedDate} />

      <div className="grid grid-cols-2 gap-7 h-[71vh] timeSlot">
        {generateSlot().map((item, index) => (
          <TimeTaskInput
            key={item}
            time={item}
            value={tasks[item]?.text || ""}
            done={tasks[item]?.done || false}
            onChange={(val) => {
              setTasks((prev) => ({
                ...prev,
                [item]: {
                  ...prev[item],
                  text: val,
                },
              }));
            }}
            ontoggleDone={(status) => {
              setTasks((prev) => ({
                ...prev,
                [item]: {
                  ...prev[item],
                  done: status,
                },
              }));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Calender;

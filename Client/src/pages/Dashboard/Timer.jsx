import { useEffect, useState } from "react";
import ModeCard from "../../Components/Timer/ModeCard";

const MODES = {
  focus: {
    label: "Focus Time",
    duration: 25 * 60,
  },
  short: {
    label: "Short Break",
    duration: 5 * 60,
  },
  long: {
    label: "Long Break",
    duration: 30 * 60,
  },
};

// Pomodoro rule
const getNextMode = (current) => {
  if (current === "focus") return "short";
  if (current === "short") return "focus";
  if (current === "long") return "focus";
};

const Timer = () => {
  const [mode, setMode] = useState("focus");
  const [time, setTime] = useState(MODES.focus.duration);
  const [running, setRunning] = useState(false);

  // TIMER ENGINE
  useEffect(() => {
    if (!running) return;

    if (time === 0) {
      const next = getNextMode(mode);
      setMode(next);
      setTime(MODES[next].duration);
      setRunning(false);
      return;
    }

    const id = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [running, time, mode]);

  const changeMode = (newMode) => {
    setMode(newMode);
    setTime(MODES[newMode].duration);
    setRunning(false);
  };

  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="p-5 h-[94vh] w-full">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-10">
          {/* Timer Display */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-500">
              {MODES[mode].label}
            </h1>
            <h1 className="text-9xl font-bold">{formatTime(time)}</h1>
          </div>

          {/* Mode Cards */}
          <div className="flex gap-4">
            <ModeCard
              title="Focus"
              time={25}
              icon="ri-volume-up-line"
              active={mode === "focus"}
              onClick={() => changeMode("focus")}
            />
            <ModeCard
              title="Short Break"
              time={5}
              icon="ri-cup-line"
              active={mode === "short"}
              onClick={() => changeMode("short")}
            />
            <ModeCard
              title="Long Break"
              time={30}
              icon="ri-moon-line"
              active={mode === "long"}
              onClick={() => changeMode("long")}
            />
          </div>

          {/* Start / Pause */}
          <button
            onClick={() => setRunning((prev) => !prev)}
            className="px-10 py-3 rounded-xl bg-black text-white text-lg"
          >
            {running ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

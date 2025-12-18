import {  useState } from "react";
import { getWeekDate } from "../../utils/getWeekDates";
import CalenderDay from "./CalenderDay";

const CalenderStrip = (props) => {
  const [baseDate, setBaseDate] = useState(new Date());
  const daysData = getWeekDate(baseDate);
  const [activeIndex, setActiveIndex] = useState(0);
  const nextWeek = () => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + 7);
    setBaseDate(d);
    setActiveIndex(0);
  };

  const prevWeek = () => {
    const d = new Date(baseDate);
    d.setDate(d.getDate() - 7);
    setBaseDate(d);
    setActiveIndex(0);
  };

  return (
    <div className="calender p-5 relative flex justify-around bg-white mb-7 rounded-2xl">
      <i
        onClick={prevWeek}
        className="cursor-pointer ri-arrow-left-s-fill absolute top-6 text-2xl left-0 p-2 bg-[#262626] text-white rounded-2xl"
      ></i>
    
      {daysData.map((item, index) => (
        <div className="flex item-center" key={index}>
          <CalenderDay
            date={item.date}
            day={item.day}
            active={activeIndex === index}
            onClick={() => {
              setActiveIndex(index)
              props.setSelectedDate(item.date)
            }}
          />
        </div>
      ))}
        <i
        onClick={nextWeek}
        className="cursor-pointer ri-arrow-right-s-fill absolute top-6 text-2xl right-0 p-2 bg-[#262626] text-white rounded-2xl"
      ></i>
    </div>
  );
};

export default CalenderStrip;

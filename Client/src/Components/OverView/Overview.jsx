import DashBoardHeader from "./DashBoardHeader";
import OverallInfoCard from "./OverallInfoCard";
import WeeklyProgressCard from "./WeeklyProgressCard";
import MonthlyProgressCard from "./MonthlyProgressCard";
import MonthlyGoalCard from "./MonthlyGoalCard";
import TaskCard from "./TaskCard";
import WeatherWidget from "../Weather/WeatherWidgets";

const Overview = () => {
  return (
    <div className="h-[94vh] w-full dashboard">
      <DashBoardHeader
        username="Sanket Thakkar"
        profile="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
      />
        <div className="mt-5 mb-5">
         <WeatherWidget compact/>
        </div>
      <div className="grid grid-cols-3 gap-5 mb-8">
        <OverallInfoCard />
        <WeeklyProgressCard />
        <MonthlyProgressCard />
      </div>
      <div className="grid grid-cols-9 gap-5">
        <MonthlyGoalCard/>
        <TaskCard/>
      </div>
    </div>
  );
};

export default Overview;

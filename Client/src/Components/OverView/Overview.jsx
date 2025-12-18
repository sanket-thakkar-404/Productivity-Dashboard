import DashBoardHeader from "./DashBoardHeader";
import OverallInfoCard from "./OverallInfoCard";
import WeeklyProgressCard from "./WeeklyProgressCard";
import MonthlyProgressCard from "./MonthlyProgressCard";
import MonthlyGoalCard from "./MonthlyGoalCard";
import TaskCard from "./TaskCard";

const Overview = () => {
  return (
    <div>
      <DashBoardHeader
        username="Sanket Thakkar"
        profile="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
      />

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

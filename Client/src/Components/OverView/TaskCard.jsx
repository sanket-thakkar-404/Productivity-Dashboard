import TaskCardHeader from "./TaskCardHeader";
import TaskCards from "./TaskCards";
const TaskCard = () => {
  return (
    <div className="col-span-6 p-4">
      <TaskCardHeader />
      <div className="flex px-4  flex-nowrap gap-9 overflow-hidden">
        <TaskCards />
      </div>
    </div>
  );
};

export default TaskCard;

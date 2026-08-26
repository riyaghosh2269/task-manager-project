import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";
import { cn } from "../utils/cn.ts";

const TaskList = () => {
  const { filteredTasks } = useTasks();

  if (filteredTasks.length === 0) {
    return (
      <div className={cn(`empty-message`)}>
        <h3>No tasks found</h3>
        <p>
          Add a task or select another filter.
        </p>
      </div>
    );
  }

  return (
    <div className={cn(`task-list`)}>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

export default TaskList;
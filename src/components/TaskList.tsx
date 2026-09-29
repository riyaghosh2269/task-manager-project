import TaskItem from "./TaskItem";
import { useTasks } from "../context/TaskContext";

const TaskList = () => {
  const { filteredTasks } = useTasks();

  if (filteredTasks.length === 0) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-10 text-center sm:py-14">
        <h3 className="text-lg font-semibold text-gray-700 sm:text-xl">
          No tasks found
        </h3>

        <p className="mt-2 text-sm text-gray-500 sm:text-base">
          Add a task or select another filter.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
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
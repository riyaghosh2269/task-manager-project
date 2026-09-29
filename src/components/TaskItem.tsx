import type { Task } from "../types/Tasks";
import { useTasks } from "../context/TaskContext";
import { cn } from "../utils/cn";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({
  task,
}: TaskItemProps) => {
  const {
    toggleTask,
    deleteTask,
    editTask,
  } = useTasks();

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition sm:flex-row sm:items-center sm:justify-between sm:p-5",
        task.completed && "opacity-70"
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            toggleTask(task.id)
          }
          className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-indigo-600"
        />

        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "break-words text-base font-semibold text-gray-900 sm:text-lg",
              task.completed &&
                "text-gray-500 line-through"
            )}
          >
            {task.title}
          </h3>

          {task.description && (
            <p
              className={cn(
                "mt-1 break-words text-sm text-gray-600 sm:text-base",
                task.completed &&
                  "text-gray-400 line-through"
              )}
            >
              {task.description}
            </p>
          )}

          <span
            className={cn(
              "mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold",
              task.completed
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            )}
          >
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>
        </div>
      </div>

      <div className="flex w-full gap-2 sm:w-auto sm:shrink-0">
        <button
          className="flex-1 rounded-lg bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-200 sm:flex-none"
          onClick={() => editTask(task)}
        >
          Edit
        </button>

        <button
          className="flex-1 rounded-lg bg-red-100 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-200 sm:flex-none"
          onClick={() =>
            deleteTask(task.id)
          }
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
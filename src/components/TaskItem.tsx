import type { Task } from "../types/Tasks";

import { useTasks } from "../context/TaskContext";
import { cn } from "../utils/cn.ts";

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
      className={cn(``, { 'task-item completed-task': task.completed, 'task-item': !task.completed })

      }
    >
      <div className={cn(`task-left`)}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            toggleTask(task.id)
          }
        />

        <div className={cn(`task-information`)}>
          <h3>{task.title}</h3>

          {task.description && (
            <p>{task.description}</p>
          )}

          <span
            className={cn(``,{"status completed-status":task.completed,"status pendiing-status":!task.completed})

            }
          >
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>
        </div>
      </div>

      <div className={cn(`task-buttons`)}>
        <button
          className="edit-button"
          onClick={() => editTask(task)}
        >
          Edit
        </button>

        <button
          className={cn(`delete-button`)}
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
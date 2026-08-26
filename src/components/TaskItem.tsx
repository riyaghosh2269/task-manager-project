import type { Task } from "../types/Tasks";

import { useTasks } from "../context/TaskContext";

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
      className={
        task.completed
          ? "task-item completed-task"
          : "task-item"
      }
    >
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() =>
            toggleTask(task.id)
          }
        />

        <div className="task-information">
          <h3>{task.title}</h3>

          {task.description && (
            <p>{task.description}</p>
          )}

          <span
            className={
              task.completed
                ? "status completed-status"
                : "status pending-status"
            }
          >
            {task.completed
              ? "Completed"
              : "Pending"}
          </span>
        </div>
      </div>

      <div className="task-buttons">
        <button
          className="edit-button"
          onClick={() => editTask(task)}
        >
          Edit
        </button>

        <button
          className="delete-button"
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
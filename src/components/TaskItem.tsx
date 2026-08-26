import type { Task } from "../types/Tasks";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskItem = ({
  task,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}: TaskItemProps) => {
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
          onChange={() => onToggleTask(task.id)}
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
            {task.completed ? "Completed" : "Pending"}
          </span>
        </div>
      </div>

      <div className="task-buttons">
        <button
          className="edit-button"
          onClick={() => onEditTask(task)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
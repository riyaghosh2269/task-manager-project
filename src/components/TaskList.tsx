import type { Task } from "../types/Tasks";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskList = ({
  tasks,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        <h3>No tasks found</h3>
        <p>Add a task or select another filter.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
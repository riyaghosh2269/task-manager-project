import {
  useEffect,
  useState,
} from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import type {
  Task,
  TaskFilter,
} from "./types/Tasks";

import "./App.css";

const STORAGE_KEY = "task-manager-tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks =
      localStorage.getItem(STORAGE_KEY);

    if (!savedTasks) {
      return [];
    }

    try {
      return JSON.parse(savedTasks) as Task[];
    } catch {
      return [];
    }
  });

  const [editingTask, setEditingTask] =
    useState<Task | null>(null);

  const [filter, setFilter] =
    useState<TaskFilter>("all");

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const handleSaveTask = (
    title: string,
    description: string
  ) => {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                title: title,
                description: description,
              }
            : task
        )
      );

      setEditingTask(null);
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTasks((currentTasks) => [
      newTask,
      ...currentTasks,
    ]);
  };

  const handleToggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== id
      )
    );

    if (editingTask?.id === id) {
      setEditingTask(null);
    }
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    }

    if (filter === "pending") {
      return !task.completed;
    }

    return true;
  });

  const completedTasks =
    tasks.filter((task) => task.completed).length;

  const pendingTasks =
    tasks.length - completedTasks;

  return (
    <main className="app">
      <div className="task-manager">
        <header className="header">
          <p className="small-heading">
            React + TypeScript
          </p>

          <h1>Task Manager</h1>

          <p>
            Organize your tasks and keep track
            of your progress.
          </p>
        </header>

        <div className="statistics">
          <div className="stat-card">
            <p>Total</p>
            <h2>{tasks.length}</h2>
          </div>

          <div className="stat-card">
            <p>Pending</p>
            <h2>{pendingTasks}</h2>
          </div>

          <div className="stat-card">
            <p>Completed</p>
            <h2>{completedTasks}</h2>
          </div>
        </div>

        <TaskForm
          editingTask={editingTask}
          onSaveTask={handleSaveTask}
          onCancelEdit={handleCancelEdit}
        />

        <div className="filter-section">
          <button
            className={
              filter === "all"
                ? "filter-button selected-filter"
                : "filter-button"
            }
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={
              filter === "pending"
                ? "filter-button selected-filter"
                : "filter-button"
            }
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>

          <button
            className={
              filter === "completed"
                ? "filter-button selected-filter"
                : "filter-button"
            }
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          onEditTask={handleEditTask}
        />
      </div>
    </main>
  );
}

export default App;
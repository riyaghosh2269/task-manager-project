import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { useTasks } from "./context/TaskContext";

import "./App.css";

function App() {
  const {
    tasks,
    filter,
    setFilter,
    completedTasks,
    pendingTasks,
  } = useTasks();

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

        <TaskForm />

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
            onClick={() =>
              setFilter("completed")
            }
          >
            Completed
          </button>
        </div>

        <TaskList />
      </div>
    </main>
  );
}

export default App;
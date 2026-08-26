import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import { useTasks } from "./context/TaskContext";

import "./App.css";
import { cn } from "./utils/cn";

function App() {
  const {
    tasks,
    filter,
    setFilter,
    completedTasks,
    pendingTasks,
  } = useTasks();

  return (
    <main className={cn(`app`)}>
      <div className={cn(`task-manager`)}>
        <header className={cn(`header`)}>
          <p className={cn(`small-heading`)}>
            React + TypeScript
          </p>

          <h1>Task Manager</h1>

          <p>
            Organize your tasks and keep track
            of your progress.
          </p>
        </header>

        <div className={cn(`statistics`)}>
          <div className={cn(`stat-card`)}>
            <p>Total</p>
            <h2>{tasks.length}</h2>
          </div>

          <div className={cn(`stat-card`)}>
            <p>Pending</p>
            <h2>{pendingTasks}</h2>
          </div>

          <div className={cn(`stat-card`)}>
            <p>Completed</p>
            <h2>{completedTasks}</h2>
          </div>
        </div>

        <TaskForm />

        <div className={cn(`filter-section`)}>
          <button
            className={cn(``,{"filter-button selected-filter":filter==="all","filter-button":filter!=="all"})}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={cn(``,{"filter-button selected-filter":filter==="pending","filter-button":filter!=="pending"})

            }
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>

          <button
            className={cn(``,{"filter-button selected-filter":filter==="completed","filter-button":filter!=="completed"})
             
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
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
    <main className={cn(`min-h-screen bg-gray-100 px-4 py-6 sm:px-6 md:py-10 lg:px-8`)}>
      <div className={cn(`mx-auto w-full max-w-4xl`)}>
        <header className={cn(`mb-6 md:mb-8`)}>
          <p className={cn(`text-xs font-bold uppercase tracking-widest text-indigo-600 sm:text-sm`)}>
            Let's design your task
          </p>

          <h1 className={cn(`mt-2 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl`)}>Task Manager</h1>

          <p className={cn(`mt-3 text-sm text-gray-600 sm:text-base`)}>
            Organize your tasks and keep track
            of your progress.
          </p>
        </header>



        <div className={cn(`mb-3 md:mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4`)}>
          <div className={cn(`rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5`)}>
            <p className={cn(`mt-1 text-2xl font-bold text-gray-900`)}>Total</p>
            <h2 className={cn(`mt-1 text-2xl font-bold text-gray-900`)}>{tasks.length}</h2>
          </div>

          <div className={cn(`rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5`)}>
            <p className={cn(`mt-1 text-2xl font-bold text-gray-900`)}>Pending</p>
            <h2 className={cn(`mt-1 text-2xl font-bold text-gray-900`)}>{pendingTasks}</h2>
          </div>

          <div className={cn(`rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5`)}>
            <p className={cn(`mt-1 text-2xl font-bold text-gray-900`)}>Completed</p>
            <h2 className={cn(`mt-1 text-2xl font-bold text-gray-900`)}>{completedTasks}</h2>
          </div>
        </div>
        <div className={cn(`mb-3 md:mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4`)}>
          <div className={cn(`rounded-xl border border-amber-100 bg-pink-300 p-5 shadow-sm sm:p-5`)}>
            <p className={cn(`mt-1 text-2xl font-medium text-gray-500 h-30`)}>Check-in</p>
          </div>

          <div className={cn(`rounded-xl border border-amber-100 bg-blue-300 p-5 shadow-sm sm:p-5`)}>
            <p className={cn(`mt-1 text-2xl font-medium text-gray-500 h-30`)}>Le Soleil</p>
          </div>

          <div className={cn(`rounded-xl border border-amber-100 bg-violet-300 p-5 shadow-sm sm:p-5`)}>
            <p className={cn(`mt-1 text-2xl font-medium text-gray-500 h-30`)}>Served</p>
          </div>
        </div>

        <TaskForm />


        <div className={cn(`my-6 flex flex-wrap gap-2 sm:gap-3`)}>
          <button
            className={cn(`rounded-lg border px-4 py-2 text-sm font-semibold transition sm:px-5`, { "border-gray-900 bg-gray-900 text-white": filter === "all", "border-gray-300 bg-white text-gray-600 hover:bg-gray-50": filter !== "all" })}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={cn(`rounded-lg border px-4 py-2 text-sm font-semibold transition sm:px-5`, { "border-gray-900 bg-gray-900 text-white": filter === "pending", "border-gray-300 bg-white text-gray-600 hover:bg-gray-50": filter !== "pending" })}
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>

          <button
            className={cn(`rounded-lg border px-4 py-2 text-sm font-semibold transition sm:px-5`, { "border-gray-900 bg-gray-900 text-white": filter === "completed", "border-gray-300 bg-white text-gray-600 hover:bg-gray-50": filter !== "completed" })}
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
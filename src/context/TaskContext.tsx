import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type {
  Task,
  TaskFilter,
} from "../types/Tasks";

interface TaskContextType {
  tasks: Task[];
  filteredTasks: Task[];
  editingTask: Task | null;
  filter: TaskFilter;

  addOrUpdateTask: (
    title: string,
    description: string
  ) => void;

  toggleTask: (id: number) => void;

  deleteTask: (id: number) => void;

  editTask: (task: Task) => void;

  cancelEdit: () => void;

  setFilter: (filter: TaskFilter) => void;

  completedTasks: number;
  pendingTasks: number;
}

const TaskContext =
  createContext<TaskContextType | undefined>(
    undefined
  );

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider = ({
  children,
}: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks =
      localStorage.getItem("task-manager-tasks");

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
      "task-manager-tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  const addOrUpdateTask = (
    title: string,
    description: string
  ) => {
    if (editingTask) {
      setTasks((currentTasks) =>
        currentTasks.map((task) =>
          task.id === editingTask.id
            ? {
                ...task,
                title,
                description,
              }
            : task
        )
      );

      setEditingTask(null);
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };

    setTasks((currentTasks) => [
      newTask,
      ...currentTasks,
    ]);
  };

  const toggleTask = (id: number) => {
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

  const deleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter(
        (task) => task.id !== id
      )
    );

    if (editingTask?.id === id) {
      setEditingTask(null);
    }
  };

  const editTask = (task: Task) => {
    setEditingTask(task);
  };

  const cancelEdit = () => {
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
    <TaskContext.Provider
      value={{
        tasks,
        filteredTasks,
        editingTask,
        filter,
        addOrUpdateTask,
        toggleTask,
        deleteTask,
        editTask,
        cancelEdit,
        setFilter,
        completedTasks,
        pendingTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (context === undefined) {
    throw new Error(
      "useTasks must be used inside TaskProvider"
    );
  }

  return context;
};
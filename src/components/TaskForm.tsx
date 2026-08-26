import {
  useEffect,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const {
    editingTask,
    addOrUpdateTask,
    cancelEdit,
  } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(
        editingTask.description
      );
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTask]);

  const handleTitleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setTitle(event.target.value);
    setError("");
  };

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const cleanTitle = title.trim();
    const cleanDescription =
      description.trim();

    if (cleanTitle === "") {
      setError(
        "Task title cannot be empty."
      );
      return;
    }

    addOrUpdateTask(
      cleanTitle,
      cleanDescription
    );

    setTitle("");
    setDescription("");
    setError("");
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}
    >
      <h2>
        {editingTask
          ? "Edit Task"
          : "Add New Task"}
      </h2>

      <div className="form-group">
        <label htmlFor="title">
          Task Title
        </label>

        <input
          id="title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">
          Description
        </label>

        <textarea
          id="description"
          placeholder="Enter task description"
          value={description}
          onChange={
            handleDescriptionChange
          }
          rows={4}
        />
      </div>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      <div className="form-buttons">
        <button
          type="submit"
          className="add-button"
        >
          {editingTask
            ? "Update Task"
            : "Add Task"}
        </button>

        {editingTask && (
          <button
            type="button"
            className="cancel-button"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
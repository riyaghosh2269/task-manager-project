import { useEffect } from "react";
import { useForm } from "@tanstack/react-form";

import { useTasks } from "../context/TaskContext";
import { cn } from "../utils/cn";

const TaskForm = () => {
  // Values/functions coming from TaskContext
  const {
    editingTask,
    addOrUpdateTask,
    cancelEdit,
  } = useTasks();

  // ---------------- TANSTACK FORM ----------------

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },

    onSubmit: async ({ value }) => {
      addOrUpdateTask(
        value.title.trim(),
        value.description.trim()
      );

      // Clear the form after adding/updating
      form.reset({
        title: "",
        description: "",
      });
    },
  });

  // ---------------- EDIT TASK ----------------

  useEffect(() => {
    if (editingTask) {
      // Put existing task values inside the form
      form.reset({
        title: editingTask.title,
        description: editingTask.description,
      });
    } else {
      // Empty form when not editing
      form.reset({
        title: "",
        description: "",
      });
    }
  }, [editingTask, form]);

  // ---------------- CANCEL EDIT ----------------

  const handleCancelEdit = () => {
    cancelEdit();

    form.reset({
      title: "",
      description: "",
    });
  };

  // ---------------- JSX ----------------

  return (
    <form
      className={cn(
        "rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
      )}
      onSubmit={(event) => {
        event.preventDefault();

        void form.handleSubmit();
      }}
    >
      {/* FORM HEADING */}

      <h2
        className={cn(
          "mb-5 text-xl font-bold text-gray-900 sm:text-2xl"
        )}
      >
        {editingTask
          ? "Edit Task"
          : "Add New Task"}
      </h2>

      {/* ---------------- TITLE FIELD ---------------- */}

      <form.Field
        name="title"
        validators={{
          onChange: ({ value }) => {
            if (value.trim() === "") {
              return "Task title cannot be empty.";
            }

            if (value.trim().length < 3) {
              return "Task title must contain at least 3 characters.";
            }

            return undefined;
          },

          onSubmit: ({ value }) => {
            if (value.trim() === "") {
              return "Task title cannot be empty.";
            }

            if (value.trim().length < 3) {
              return "Task title must contain at least 3 characters.";
            }

            return undefined;
          },
        }}
      >
        {(field) => (
          <div className="mb-5">
            <label
              htmlFor={field.name}
              className={cn(
                "mb-2 block text-sm font-semibold text-gray-700 sm:text-base"
              )}
            >
              Task Title
            </label>

            <input
              id={field.name}
              name={field.name}
              type="text"
              placeholder="Enter task title"
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => {
                field.handleChange(
                  event.target.value
                );
              }}
              className={cn(
                "w-full rounded-lg border border-gray-300 px-3 py-2.5",
                "text-sm text-gray-900 outline-none transition",
                "placeholder:text-gray-400",
                "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100",
                "sm:px-4 sm:py-3 sm:text-base",
                !field.state.meta.isValid &&
                  "border-red-500 focus:border-red-500 focus:ring-red-100"
              )}
            />

            {/* ERROR MESSAGE */}

            {field.state.meta.isTouched &&
              !field.state.meta.isValid && (
                <p
                  className={cn(
                    "mt-2 text-sm font-medium text-red-600"
                  )}
                >
                  {field.state.meta.errors.join(
                    ", "
                  )}
                </p>
              )}
          </div>
        )}
      </form.Field>

      {/* ---------------- DESCRIPTION FIELD ---------------- */}

      <form.Field
        name="description"
        validators={{
          onChange: ({ value }) => {
            if (value.length > 200) {
              return "Description cannot exceed 200 characters.";
            }

            return undefined;
          },
        }}
      >
        {(field) => (
          <div className="mb-5">
            <label
              htmlFor={field.name}
              className={cn(
                "mb-2 block text-sm font-semibold text-gray-700 sm:text-base"
              )}
            >
              Description
            </label>

            <textarea
              id={field.name}
              name={field.name}
              placeholder="Enter task description"
              rows={4}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(event) => {
                field.handleChange(
                  event.target.value
                );
              }}
              className={cn(
                "w-full resize-y rounded-lg border border-gray-300 px-3 py-2.5",
                "text-sm text-gray-900 outline-none transition",
                "placeholder:text-gray-400",
                "focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100",
                "sm:px-4 sm:py-3 sm:text-base",
                !field.state.meta.isValid &&
                  "border-red-500 focus:border-red-500 focus:ring-red-100"
              )}
            />

            {field.state.meta.isTouched &&
              !field.state.meta.isValid && (
                <p
                  className={cn(
                    "mt-2 text-sm font-medium text-red-600"
                  )}
                >
                  {field.state.meta.errors.join(
                    ", "
                  )}
                </p>
              )}

            <p className="mt-1 text-xs text-gray-400">
              Character Count: 
              {field.state.value.length}/200
              Maximum 200 characters
            </p>
          </div>
        )}
      </form.Field>

      {/* ---------------- BUTTONS ---------------- */}

      <div
        className={cn(
          "flex flex-col gap-2 sm:flex-row sm:gap-3"
        )}
      >
        <form.Subscribe
          selector={(state) => [
            state.canSubmit,
            state.isSubmitting,
          ]}
        >
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={
                !canSubmit || isSubmitting
              }
              className={cn(
                "w-full rounded-lg bg-indigo-600 px-5 py-2.5",
                "font-semibold text-white transition",
                "hover:bg-indigo-700",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "sm:w-auto"
              )}
            >
              {isSubmitting
                ? "Saving..."
                : editingTask
                  ? "Update Task"
                  : "Add Task"}
            </button>
          )}
        </form.Subscribe>

        {/* CANCEL BUTTON */}

        {editingTask && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className={cn(
              "w-full rounded-lg bg-gray-200 px-5 py-2.5",
              "font-semibold text-gray-700 transition",
              "hover:bg-gray-300",
              "sm:w-auto"
            )}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
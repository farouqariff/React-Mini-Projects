import EditTask from "./EditTask";

const Task = ({ task, index, taskList, setTaskList }) => {
  const handleDone = () => {
    setTaskList((curr) => curr.filter((_, i) => i !== index));
  };

  return (
    <article className="group relative mt-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm ring-1 ring-transparent transition hover:shadow-md hover:ring-zinc-100">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-zinc-900">
            {task?.taskName || "Untitled task"}
          </h3>

          {task?.taskDesc ? (
            <p className="mt-1 text-sm leading-6 text-zinc-600">
              {task.taskDesc}
            </p>
          ) : (
            <p className="mt-1 text-sm italic text-zinc-400">No description</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 transition"
            title="Mark as done"
            type="button"
            onClick={handleDone}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Done
          </button>

          <EditTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      </div>
    </article>
  );
};

export default Task;

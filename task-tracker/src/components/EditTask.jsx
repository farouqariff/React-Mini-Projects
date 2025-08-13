import { useEffect, useState } from "react";

const EditTask = ({ task, index, setTaskList }) => {
  const [editModal, setEditModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  useEffect(() => {
    setTaskName(task?.taskName ?? "");
    setTaskDesc(task?.taskDesc ?? "");
  }, [task]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "task_name") setTaskName(value);
    if (name === "task_desc") setTaskDesc(value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    setTaskList((prev) => {
      const next = [...prev];
      // keep id if it exists
      const old = next[index] ?? {};
      next[index] = { ...old, taskName, taskDesc };
      return next;
    });

    setEditModal(false);
  };

  return (
    <>
      <button
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 transition"
        title="Edit task"
        type="button"
        onClick={() => setEditModal(true)}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
        Edit
      </button>

      {editModal ? (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
            onClick={() => setEditModal(false)}
          />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl ring-1 ring-zinc-100">
              <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  Edit Task
                </h2>
                <button
                  onClick={() => setEditModal(false)}
                  className="rounded-lg p-2 text-zinc-5 00 hover:bg-zinc-100 hover:text-zinc-700 transition"
                  aria-label="Close"
                  title="Close"
                >
                  ✕
                </button>
              </div>

              <form className="px-5 py-4 space-y-4" onSubmit={handleUpdate}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-zinc-200"
                    placeholder="e.g. Prepare weekly report"
                    name="task_name"
                    value={taskName}
                    onChange={handleInput}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-700">
                    Description
                  </label>
                  <textarea
                    className="min-h-28 w-full resize-y rounded-xl border border-zinc-200 bg-white px-4 py-2.5 text-zinc-900 placeholder-zinc-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-zinc-200"
                    placeholder="Add notes, links, or steps…"
                    name="task_desc"
                    value={taskDesc}
                    onChange={handleInput}
                  />
                </div>

                <div className="flex items-center justify-end gap-2 border-t border-zinc-100 pt-4">
                  <button
                    type="button"
                    onClick={() => setEditModal(false)}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-800 active:scale-[0.99] transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditTask;

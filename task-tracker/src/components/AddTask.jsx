import { useState } from "react";

const AddTask = ({ setTaskList }) => {
  const [addModal, setAddModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "task_name") setTaskName(value);
    if (name === "task_desc") setTaskDesc(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), taskName, taskDesc };

    setTaskList((prev) => [...prev, newTask]);

    setAddModal(false);
    setTaskName("");
    setTaskDesc("");
  };

  return (
    <>
      <button
        onClick={() => setAddModal(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 hover:shadow transition"
      >
        <span className="inline-block h-5 w-5 rounded-md bg-zinc-900 text-white place-items-center">
          +
        </span>
        New Task
      </button>

      {addModal ? (
        <div className="fixed inset-0 z-50" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
            onClick={() => setAddModal(false)}
          />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl ring-1 ring-zinc-100">
              <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
                <h2 className="text-lg font-semibold text-zinc-900">
                  Add New Task
                </h2>
                <button
                  onClick={() => setAddModal(false)}
                  className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 transition"
                  aria-label="Close"
                  title="Close"
                >
                  ✕
                </button>
              </div>

              <form className="px-5 py-4 space-y-4" action="">
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
              </form>

              <div className="flex items-center justify-end gap-2 border-t border-zinc-100 px-5 py-4">
                <button
                  onClick={() => setAddModal(false)}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-800 active:scale-[0.99] transition"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddTask;

import { useState } from "react";
import Input from "./components/Input";
import Board from "./components/Board";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="min-h-screen bg-[radial-gradient(40rem_40rem_at_120%_-10%,rgba(59,130,246,0.08),transparent),radial-gradient(30rem_30rem_at_-10%_120%,rgba(236,72,153,0.08),transparent)]">
      <div className="mx-auto max-w-2xl px-4 py-14">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Live
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
            ToDo Board by Farouq
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Keep it crisp. One task at a time.
          </p>
        </header>

        {/* Composer */}
        <section className="sticky top-0 z-10 mb-6 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-lg shadow-slate-900/5 backdrop-blur">
          <Input setTaskList={setTaskList} />
        </section>

        {/* Stack */}
        <section
          aria-label="Tasks"
          className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_30px_-12px_rgba(2,6,23,0.15)]"
        >
          {taskList.length === 0 ? (
            <div className="flex items-center justify-center rounded-xl border border-dashed border-slate-300 p-10 text-sm text-slate-500">
              No tasks yet. Add your first one above.
            </div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {taskList.map((task, index) => (
                <li key={index} className="p-2">
                  <Board task={task} index={index} setTaskList={setTaskList} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;

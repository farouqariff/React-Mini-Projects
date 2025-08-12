import { useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <header className="border-b border-zinc-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Task Tracker <span className="text-zinc-400">by Farouq</span>
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Click the button to add a new task.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">Tasks</h2>
          <AddTask setTaskList={setTaskList} />
        </div>

        {taskList.length > 0 ? (
          <>
            {taskList.map((task, i) => (
              <Task
                key={task.id ?? i}
                task={task}
                index={i}
                setTaskList={setTaskList}
              />
            ))}
          </>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-200 bg-white p-8 text-center text-zinc-500">
            No tasks yet. Start by creating your first one.
          </div>
        )}
      </main>

      <footer className="mt-10 border-t border-zinc-100 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-400">
          Light mode · Minimal · TailwindCSS
        </div>
      </footer>
    </>
  );
}

export default App;

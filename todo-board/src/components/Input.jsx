import { useState } from "react";

const Input = ({ setTaskList }) => {
  const [input, setInput] = useState("");

  const handleTask = (e) => {
    e.preventDefault();
    const value = input.trim();
    if (!value) return;
    setTaskList((curr) => [...curr, value]);
    setInput("");
  };

  return (
    <form onSubmit={handleTask} className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs doing?"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-10 text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-200"
          />
          {/* subtle tick marker */}
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">
            ⌨️
          </span>
        </div>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-slate-900/5 transition hover:opacity-90 active:scale-[0.98]"
        >
          Add
        </button>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-500">
        <span className="inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
        Press{" "}
        <kbd className="rounded border border-slate-300 bg-slate-50 px-1">
          Enter
        </kbd>{" "}
        to add quickly
      </div>
    </form>
  );
};

export default Input;

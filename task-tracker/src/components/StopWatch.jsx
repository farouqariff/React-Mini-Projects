import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <section className="rounded-lg border border-zinc-200 bg-white p-2.5 shadow-sm">
      {/* Display */}
      <div className="rounded-md border border-zinc-100 bg-zinc-50/70 px-2.5 py-2 text-center">
        <div className="font-mono text-xl font-semibold leading-none tabular-nums text-zinc-900">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
          <span className="px-0.5 text-zinc-400">:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          <span className="px-0.5 text-zinc-400">.</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className="mt-1 flex items-center justify-center gap-4 text-[10px] font-medium uppercase tracking-wide text-zinc-400">
          <span>Min</span>
          <span>Sec</span>
          <span>Centisec</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        {running ? (
          <button
            onClick={() => setRunning(false)}
            className="col-span-1 inline-flex items-center justify-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-[11px] font-medium text-white shadow hover:bg-zinc-800 active:scale-[0.99] transition"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => setRunning(true)}
            className="col-span-1 inline-flex items-center justify-center rounded-md bg-zinc-900 px-2.5 py-1.5 text-[11px] font-medium text-white shadow hover:bg-zinc-800 active:scale-[0.99] transition"
          >
            Start
          </button>
        )}

        <button
          onClick={() => setTime(0)}
          className="col-span-1 inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 shadow-sm hover:bg-zinc-50 active:scale-[0.99] transition"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Stopwatch;

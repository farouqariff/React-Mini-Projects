import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  // unchanged logic
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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 flex items-center justify-center p-6">
      <div className="relative max-w-md w-full">
        {/* glow */}
        <div
          className={[
            "absolute -inset-1 rounded-3xl blur-xl",
            running
              ? "bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30"
              : "bg-gradient-to-r from-slate-700/20 to-slate-700/10",
          ].join(" ")}
          aria-hidden
        />
        {/* card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* header */}
          <div className="px-6 pt-6">
            <h1 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Stopwatch
            </h1>
            <p className="text-xs text-slate-400">by Farouq</p>
          </div>

          {/* display (your same math) */}
          <div className="px-6 py-8">
            <div className="flex items-baseline justify-center gap-2 font-mono tabular-nums select-none">
              <span className="text-6xl sm:text-7xl md:text-8xl font-light tracking-wider">
                {"0" + Math.floor((time / 60000) % 60)}
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl text-slate-400">
                :
              </span>
              <span className="text-6xl sm:text-7xl md:text-8xl font-light tracking-wider">
                {"0" + Math.floor((time / 1000) % 60)}
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl text-slate-400">
                .
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest">
                {"0" + Math.floor((time / 10) % 100)}
              </span>
            </div>
            <div className="mt-3 flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-slate-400">
              <span>Min</span>
              <span>Sec</span>
              <span>Centisec</span>
            </div>
          </div>

          {/* buttons — handlers untouched */}
          <div className="px-6 pb-6">
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setRunning(true)}
                className="h-12 rounded-xl font-medium transition border bg-emerald-500/90 hover:bg-emerald-500 text-black border-emerald-400"
              >
                Start
              </button>
              <button
                onClick={() => setRunning(false)}
                className="h-12 rounded-xl font-medium transition border bg-amber-500/90 hover:bg-amber-500 text-black border-amber-400"
              >
                Stop
              </button>
              <button
                onClick={() => setTime(0)}
                className="h-12 rounded-xl font-medium transition border bg-slate-800/60 hover:bg-slate-800 text-slate-100 border-white/10 disabled:opacity-40"
                disabled={time === 0}
              >
                Reset
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-2">
                <span
                  className={[
                    "inline-block h-2 w-2 rounded-full",
                    running ? "bg-emerald-400 animate-pulse" : "bg-slate-500",
                  ].join(" ")}
                />
                {running ? "Running" : "Idle"}
              </span>
              <span className="text-slate-500">10ms precision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

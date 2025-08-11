const Board = ({ task, index, setTaskList }) => {
  const handleDelete = () => {
    setTaskList((curr) => curr.filter((_, i) => i !== index));
  };

  return (
    <div className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md">
      {/* Left accent & text */}
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-1 h-4 w-1 rounded-full bg-sky-400/80"></span>
        <p className="truncate text-[15px] text-slate-800">{task}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button
          onClick={handleDelete}
          className="invisible ml-1 inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 group-hover:visible"
          title="Delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Board;

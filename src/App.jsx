import { useState } from "react";
import Unmounting from "./Components/Unmounting";
import User from "./Components/User";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></div>

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              React Lifecycle
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Component Lifecycle
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Explore React component mounting, updating, and unmounting with a
            practical API example.
          </p>
        </div>

        {/* Control Panel */}
        <div className="mb-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl md:flex-row">
          <div>
            <h2 className="text-xl font-bold">User Component</h2>

            <p className="mt-1 text-sm text-slate-400">
              Toggle the component to see the mounting and unmounting lifecycle.
            </p>
          </div>

          <button
            className={`rounded-xl px-7 py-3 text-sm font-bold shadow-lg transition duration-300 active:scale-95 ${
              toggle
                ? "bg-red-600 shadow-red-600/20 hover:bg-red-500"
                : "bg-blue-600 shadow-blue-600/20 hover:bg-blue-500"
            }`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Hide Users" : "Show Users"}
          </button>
        </div>

        {/* User Component */}
        <div>{toggle && <User />}</div>
      </div>
    </div>
  );
}

export default App;

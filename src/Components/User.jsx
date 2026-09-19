import React, { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("Data")) || [],
  );

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const result = await response.json();

      console.log(result);

      setData(result);
      localStorage.setItem("Data", JSON.stringify(result));
    })();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-white md:px-10 lg:px-16">
      {/* Header */}
      <div className="mx-auto mb-10 max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50"></div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
            API Dashboard
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          User Directory
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          User data fetched from API and displayed using React and Tailwind CSS.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((apidata) => {
          const { id, name, username, email, phone, website } = apidata;

          return (
            <div
              key={id}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-500/20"
            >
              {/* Top */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold shadow-lg shadow-blue-600/30">
                  {name.charAt(0)}
                </div>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-400">
                  ID #{id}
                </span>
              </div>

              {/* Name */}
              <h2 className="truncate text-xl font-bold text-white">{name}</h2>

              <p className="mt-1 text-sm text-blue-400">@{username}</p>

              {/* Information */}
              <div className="mt-6 space-y-3 border-t border-slate-800 pt-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 truncate text-sm text-slate-300">
                    {email}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-slate-300">{phone}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Website
                  </p>

                  <p className="mt-1 truncate text-sm text-slate-300">
                    {website}
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-sm font-bold transition hover:bg-blue-500 active:scale-95">
                View Profile
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default User;

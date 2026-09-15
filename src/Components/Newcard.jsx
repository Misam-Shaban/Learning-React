

function Newcard() {
  return (
    <>
      {/* Card Container */}
      <div className="max-w-sm mx-auto my-10 bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300">
        
        {/* Top Decorative Banner */}
        <div className="h-24 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
          {/* Status Badge */}
          <span className="absolute top-4 right-4 bg-green-500/20 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-500/30 backdrop-blur-sm">
            Active Student
          </span>
        </div>

        {/* Profile Content Area */}
        <div className="px-6 pb-6 text-center relative">
          
          {/* Avatar Image (Shifted Upwards) */}
          <div className="w-24 h-24 mx-auto -mt-12 rounded-full border-4 border-white overflow-hidden shadow-md bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&auto=format&fit=crop&q=60" 
              alt="Profile Picture" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & Title */}
          <h1 className="mt-4 text-xl font-bold text-slate-800 tracking-tight">
            Misam Shaban
          </h1>
          <p className="text-sm font-medium text-indigo-600 bg-indigo-50 inline-block px-3 py-1 rounded-md mt-1">
            Learning React
          </p>

          {/* Additional Realistic Student Data */}
          <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4 text-left text-xs text-slate-500">
            <div>
              <p className="font-semibold text-slate-400 uppercase tracking-wider">Student ID</p>
              <p className="text-sm font-medium text-slate-700 mt-0.5">MS_210410014</p>
            </div>
            <div>
              <p className="font-semibold text-slate-400 uppercase tracking-wider">Department</p>
              <p className="text-sm font-medium text-slate-700 mt-0.5">Web Development</p>
            </div>
          </div>

          {/* Action Button */}
          <button className="w-full mt-6 bg-slate-950 hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-xl shadow-sm transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
            <span>View Profile</span>
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

        </div>
      </div>
    </>
  );
}

export default Newcard;

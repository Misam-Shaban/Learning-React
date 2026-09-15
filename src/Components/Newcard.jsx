function Newcard(props) {
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
        <div className="relative">
          <img
            className="w-full h-56 object-cover"
            src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHxyZWFjdCUyMGpzfGVufDB8fDB8fHww"
            alt="Misam Shaban"
          />
          <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Active
          </span>
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{props.studentName}</h1>
          <p className="text-blue-600 font-medium mt-1">{props.course}</p>

          <div className="flex justify-between mt-4 text-sm text-gray-600 border-t pt-4">
            <div className="text-center">
              <p className="font-bold text-gray-800">Age</p>
              <p>{props.age}</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">Months</p>
              <p>6</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">City</p>
              <p>{props.city}</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            {props.aboutLeaning}   
          </p>

          <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-colors duration-200">
            View Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default Newcard;
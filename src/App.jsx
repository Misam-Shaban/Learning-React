import { useState } from "react";
import Unmounting from "./Components/Unmounting";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className=" m-10 p-10 bg-blue-300 rounded-4xl">
        <div>{toggle && <Unmounting />}</div>
        <button
          className="bg-blue-50 rounded-sm text-2xl m-4"
          onClick={() => setToggle(!toggle)}
        >
          Toggle
        </button>
      </div>
    </>
  );
}

export default App;

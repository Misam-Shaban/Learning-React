import { useEffect, useState } from "react";

function Unmounting() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting...");

    return () => {
      console.log("Unmountig...");
    };
  }, []);

  return (
    <div>
      <div>
        <h1>Unmounting {count}</h1>
        <button
          className="bg-blue-50 rounded-sm text-2xl"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Unmounting;

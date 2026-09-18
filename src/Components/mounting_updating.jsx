import { useEffect, useState } from "react";

function Mounting_updating() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(50);

  useEffect(() => {
    console.log("Mounting...");
  }, []);

  useEffect(() => {
    console.log("Data Updating");
  }, [data]);
  return (
    <>
      App Component
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <h1>{data}</h1>
      <button onClick={() => setData(data - 1)}>decrement</button>
    </>
  );
}

export default Mounting_updating;

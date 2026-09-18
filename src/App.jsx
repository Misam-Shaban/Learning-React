import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(50);

  useEffect(() => {
    console.log("Mounting...");
  });
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

export default App;

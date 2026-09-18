import React, { useEffect, useState } from "react";

function User() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("Data")) || [],
  );

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/usershttps://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      console.log(data);
      setData(data);
      localStorage.setItem("Data", JSON.stringify(data));
    })();

    return () => {
      setData([]);
      localStorage.clear();
    };
  }, []);
  return (
    <div>
      <h1>APi Data</h1>
      {data.map((apidata) => {
        const { id, name, username, email, phone, website } = apidata;

        return (
          <div key={id} className="bg-blue-600 text-shadow-amber-50 ">
            <span>{id}</span>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default User;

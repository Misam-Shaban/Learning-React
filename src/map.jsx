const fuirtsArr = ["Apple", "Mango", "Peace"];
function Map() {
  return (
    <div>
      <div>
        {fuirtsArr.map((fruit, index, array) => {
          return (
            <li >
              Name: {fruit}, Index: {index}, Array: {array}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Map;

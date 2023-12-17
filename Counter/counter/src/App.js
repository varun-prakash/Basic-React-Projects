import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const addVal = () => {
    if (counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
    }
  };

  const redVal = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <div className="App">
      <h1 className="font-bold text-4xl"> Counter</h1>
      <h2 className="font-bold text-3xl "> value : {counter}</h2>
      <button
        className=" outline-double px-2 py-2 w-96 h-10 align-middle  "
        onClick={addVal}
      >
        +
      </button>
      <br />
      <button
        className=" outline-double px-2 py-2 w-96 h-10 align-middle  "
        onClick={redVal}
      >
        -
      </button>
    </div>
  );
}

export default App;

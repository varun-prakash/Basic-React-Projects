import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-300 bg-gradient-to-br"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center px-2 inset-x-0 bottom-12">
        <div className=" flex flex-wrap justify-center px-3 py-2 rounded-3xl bg-slate-200 shadow-lg gap-3">
          <button
            className=" outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "cyan" }}
            onClick={() => setColor("cyan")}
          >
            CYAN
          </button>
          <button
            className=" outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            PINK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

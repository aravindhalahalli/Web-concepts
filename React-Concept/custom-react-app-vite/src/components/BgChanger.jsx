import { useState } from "react";

const BackgroundColorChange = () => {
  const [color, setColor] = useState("olive");
  console.log("color", color);
  return (
    <div
      className="w-[200px] h-[200px] duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
           onClick={() => setColor("violet")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
          <button
           onClick={() => setColor("indigo")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button
           onClick={() => setColor("orange")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "#FF7F00" }}
          >
            Orange
          </button>
          <button
           onClick={() => setColor("blue")}
            className="outline-none px-4 rounded-full shadow-lg"
            style={{ backgroundColor: "#0000FF" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundColorChange;

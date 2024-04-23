import { useState } from "react";
import Clipboard from "./assets/Clipboard.svg";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("#ffffff");
  const [isCopied, setIsCopied] = useState(false);
  const handleColorChange = () => {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColor(color);
    document.body.style.backgroundColor = color;
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000)
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col font-mono bg-white p-2 rounded-lg w-1/4 my-0 mx-auto bg-opacity-70">
        <h1 className="font-mono text-xl font-bold">Color Changer</h1>
        <div className="flex justify-center items-center">
          <button
            className="p-3 rounded-3xl text-black m-1 bg-transparent"
            onClick={handleColorChange}
          >
            {color}
          </button>
          <button
            className="p-3 rounded-3xl w-fit m-1 flex justify-center items-center bg-transparent tooltip"
            onClick={handleCopy}
          >
            <img src={Clipboard} alt="Clipboard Logo" />
            <span className={`tooltiptext ${isCopied ? "block" : "hidden"}`}>
              Copied
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

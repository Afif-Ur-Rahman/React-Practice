import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isErrors, setIsErrors] = useState(false)
  return (
    <>
      <h2>Counter</h2>
      <div style={{marginBottom: "5px"}}> Number = {count}</div>
      {isError && (
        <div style={{ color: "red", marginTop: "-7px", fontSize: "14px" }}>
          Number Can&apos;t be less than 0.
        </div>
      )}
      {isErrors && (
        <div style={{ color: "red", marginTop: "-7px", fontSize: "14px" }}>
          Number Can&apos;t be greater than 5.
        </div>
      )}
      <div>
        <button
          onClick={() => {
            setIsError(false);
            if (count === 5) {
              setIsErrors(true);
            } else {
            setCount(count + 1);}
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setIsErrors(false);
            if (count === 0) {
              setIsError(true);
            } else {
              setCount(count - 1);
            }
          }}
        >
          Subtract
        </button>
      </div>
    </>
  );
}

export default App;

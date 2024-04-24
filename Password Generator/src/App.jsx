/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const passRef = useRef(null);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[];|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [[length, numberAllowed, charAllowed, setPassword]]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-md my-8 mx-auto rounded-lg p-4 bg-white overflow-hidden bg-opacity-40">
        <h1 className="text-center text-2xl">Password Generator</h1>
        <div className="mt-3 flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full p-2"
            type="text"
            value={password}
            placeholder="Password"
            ref={passRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="outline-none bg-green-700 text-white p-2 shrink-0"
            onClick={() => copyPass()}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              id="length"
              name="length"
              min={6}
              max={64}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="number"
              id="number"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
            />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              className="w-4 h-4"
              type="checkbox"
              name="char"
              id="char"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed(!charAllowed);
              }}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

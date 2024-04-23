import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="rounded-lg w-2/4 bg-white overflow-hidden p-4 bg-opacity-40">
          <h1 className="text-center text-2xl">Password Generator</h1>
          <div className="mt-3">
            <input className="p-2 w-full rounded-lg" type="text" />
            <div className="mt-3 flex">
              <div>
                <span className="">Length (0)</span>
              </div>
              <div className="flex items-center">
                <input className="ml-2 w-4 h-4" type="checkbox" name="" id="" />
                <span className="">Numbers</span>
              </div>
              <div className="flex items-center">
                <input className="ml-2 w-4 h-4" type="checkbox" name="" id="" />
                <span className="">Characters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

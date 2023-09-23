import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState(0);

//   let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    // console.log("value added", Math.random(), counter);
    setCounters(prevCounter => prevCounter + 1);
    setCounters(prevCounter => prevCounter + 1);
    setCounters(prevCounter => prevCounter + 1);
    setCounters(prevCounter => prevCounter + 1);
  };

  const removeValue = () => {
    // counter = counter - 1;
    // console.log("value removed", Math.random(), counter);
    setCounters(counters - 1)
  };

  return (
    <div style={{display:'flex'}}>
      <div>
        <h1>Counter Example</h1>
        <h3>Counter - {counters} </h3>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div>

      <div>
        <h1>Counter Example by Hook</h1>
        <h3>Counter - {counters} </h3>
        <button
          onClick={() => {
            setCounters(counters + 1);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            setCounters(counters - 1);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;


// Hooks used in react

// useState
// useEffect
// useMemo
// useReducer
// useCallbackHook

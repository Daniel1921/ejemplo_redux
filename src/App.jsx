import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByNumber } from "./slices/counter";
function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2')
  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>count is {counter}</h2>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button
          onClick={() =>
            dispatch(incrementByNumber(Number(incrementAmount) || 0))
          }
        >
          Increment by number
        </button>
      </div>
    </>
  );
}

export default App;

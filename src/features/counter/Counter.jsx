import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section>
      <p className="text-5xl mb-9">{count}</p>
      <div className="flex items-center justify-center gap-2">
        <button
          className="bg-green-700 px-2 py-2 w-[100px] text-white rounded-md font-bold "
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          className="bg-red-700 px-2 py-2 w-[100px] text-white rounded-md font-bold "
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
      </div>
      <div className="flex justify-center my-2">
        <input
          className="bg-white text-center  border-gray-400 border-2 focus:border-blue-500 rounded-lg shadow-sm py-2 px-4 block w-[100px] appearance-none leading-normal"
          type="text"
          placeholder="Value"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
      </div>
      <div>
        <button className="bg-yellow-600 px-2 py-2 rounded-md font-bold text-white" onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button className="bg-cyan-600 px-2 py-2 rounded-md ml-2 font-bold text-white" onClick={resetAll}>Reset</button>
        
      </div>
    </section>
  );
}

export default Counter;

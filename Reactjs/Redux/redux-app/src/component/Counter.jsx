import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount, decrementCount } from "../redux/action";
const Counter = () => {
  const counterVal = useSelector((state) => state.reducer.counter);
  const dispatch = useDispatch();

  console.log(counterVal);
  return (
    <div>
      <p>{counterVal}</p>
      <div>
        <button onClick={() => dispatch(incrementCount)}>+</button>
        <button onClick={() => dispatch(decrementCount)}>-</button>
      </div>
    </div>
  );
};

export default Counter;

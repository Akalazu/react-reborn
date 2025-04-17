import { useState } from "react";

export default function Message() {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);

  function increaseCount() {
    setCount(count + incrementValue);
  }

  function decreaseCount() {
    setCount(count - incrementValue);
  }

  function increaseIncrement() {
    setIncrementValue(incrementValue + 1);
  }

  function decreaseIncrement() {
    setIncrementValue(incrementValue - 1);
  }

  return (
    <div>
      <h1>The Current Count Value is : {count}</h1>
      <button onClick={increaseCount}>Increament</button>
      <button onClick={decreaseCount}>Decreament</button>

      <h3>We are incrementing the count value by: {incrementValue}</h3>

      <button onClick={increaseIncrement}>Increament</button>
      <button onClick={decreaseIncrement}>Decreament</button>
    </div>
  );
}

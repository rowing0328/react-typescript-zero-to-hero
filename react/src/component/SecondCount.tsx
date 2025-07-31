import { useState } from 'react';

export default function SecondCount() {
  console.log('SecondCount Component');
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>SecondCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}

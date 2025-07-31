import { useState } from 'react';

export default function FirstCount() {
  console.log('FirstCount Component');
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <h1>FirstCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}

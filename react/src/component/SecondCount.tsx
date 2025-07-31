import type { Dispatch, SetStateAction } from 'react';

export default function SecondCount({
  count,
  setCount,
}: {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) {
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

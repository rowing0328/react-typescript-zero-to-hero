import type { Dispatch, SetStateAction } from 'react';

export default function FirstCount({
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
      <h1>FirstCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}

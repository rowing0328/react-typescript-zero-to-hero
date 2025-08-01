import CountDisplay from './CountDisplay.tsx';
import { useState } from 'react';
import CountButton from './CountButton.tsx';

export default function Count() {
  const initialCount: number = 0;
  const [count, setCount] = useState<number>(initialCount);
  const handleIncrement = () => {
    setCount(() => count + 1);
  };
  const handleDecrement = () => {
    setCount(() => count - 1);
  };
  const handleReset = () => {
    setCount(initialCount);
  };
  return (
    <>
      <CountDisplay count={count} />
      <CountButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
}

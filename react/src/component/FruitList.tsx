import { useState } from 'react';

export default function FruitList() {
  const [items, setItems] = useState<string[]>(['사과', '바나나', '오렌지']);
  const handleFruitAdd = () => setItems((items) => [...items, '포도']);
  const isGrapeAdded: boolean = items.includes('포도');

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleFruitAdd} disabled={isGrapeAdded}>
        과일 추가
      </button>
    </>
  );
}

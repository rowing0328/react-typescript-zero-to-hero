/* key 속성의 유효 범위 */
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function FruitList() {
  const items: string[] = ['apple', 'banana', 'orange'];
  const [fruits, setFruits] = useState<{ id: string; value: string }[]>(() =>
    items.map((item: string) => ({
      id: uuidv4(),
      value: item,
    })),
  );
  const handleAddFruit = () => {
    setFruits([{ id: uuidv4(), value: 'grape' }, ...fruits]);
  };

  return (
    <>
      <p>Fruits Lists</p>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type='text' placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type='text' placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      <button onClick={handleAddFruit}>추가</button>
    </>
  );
}

/* key 속성 고유하게 하기 */
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
//
// export default function FruitList() {
//   const items: string[] = ['apple', 'banana', 'orange'];
//   const [fruits, setFruits] = useState<{ id: string; value: string }[]>(() =>
//     items.map((item: string) => ({
//       id: uuidv4(),
//       value: item,
//     })),
//   );
//   const handleAddFruit = () => {
//     setFruits([{ id: uuidv4(), value: 'grape' }, ...fruits]);
//   };
//
//   return (
//     <>
//       <p>Fruits Lists</p>
//       <ul>
//         {fruits.map((fruit) => (
//           <li key={fruit.id}>
//             <input type='text' placeholder={fruit.value} />
//           </li>
//         ))}
//       </ul>
//       <button onClick={handleAddFruit}>추가</button>
//     </>
//   );
// }

/* map 메서드를 활용한 리스트 렌더링 개요 */
// import { useState } from 'react';
//
// export default function FruitList() {
//   const [items, setItems] = useState<string[]>(['사과', '바나나', '오렌지']);
//   const handleFruitAdd = () => setItems((items) => [...items, '포도']);
//   const isGrapeAdded: boolean = items.includes('포도');
//
//   return (
//     <>
//       <p>Fruits Lists</p>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <button onClick={handleFruitAdd} disabled={isGrapeAdded}>
//         과일 추가
//       </button>
//     </>
//   );
// }

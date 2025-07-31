/* 이벤트 핸들러를 props로 전달하기 */
import React from 'react';

export default function Button({
  handleClick,
  message,
  children,
}: {
  handleClick: (message: string) => void;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}

/* 이벤트 핸들러에서 props 읽기 */
// import React from 'react';
//
// export default function Button({
//   message,
//   children,
// }: {
//   message: string;
//   children: React.ReactNode;
// }) {
//   const handleClick = () => alert(message);
//   return (
//     <>
//       <button onClick={handleClick}>{children}</button>
//     </>
//   );
// }

/* 이벤트 핸들러 방법 추천 */
// export default function Button() {
//   const handleClick = () => alert('click');
//   return (
//     <>
//       {/* <button onClick={() => alert('click')}>클릭1</button> */}
//       <button onClick={handleClick}>클릭2</button>
//       <button onClick={() => handleClick()}>클릭3</button>
//     </>
//   );
// }

/* 이벤트 핸들러에 매개변수 전달하기 */
// export default function Button() {
//   const handleClick = (value: string) => alert(value);
//   return (
//     <>
//       <button onClick={() => handleClick('Hello')}>클릭</button>
//       <button onClick={() => alert('World!')}>클릭</button>
//     </>
//   );
// }

/* Event 연결하기 */
// export default function Button() {
//   const handleClick = () => {
//     alert('클릭 이벤트 발생');
//   };
//   return (
//     <>
//       <button onClick={handleClick}>클릭</button>
//       <button onDoubleClick={handleClick}>클릭</button>
//     </>
//   );
// }

/* JSX 요소의 콘텐츠에 사용되는 경우 */
// import React from 'react';
//
// export default function Button({ children }: { children: React.ReactNode }) {
//   return <button>{children}</button>;
// }

/* JSX 요소의 속성에 사용되는 경우 */
// export default function Button({ id, className }: { id: string; className: string }) {
//   return (
//     <button id={id} className={className}>
//       버튼
//     </button>
//   );
// }

/* children - ReactNode 방식 */
// import React from 'react';
//
// export default function Button({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <button>{children}</button>
//     </>
//   );
// }

/* children - ReactElement 방식 */
// import React from 'react';
//
// export default function Button({ children }: { children: React.ReactElement }) {
//   return (
//     <>
//       <button>{children}</button>
//     </>
//   );
// }

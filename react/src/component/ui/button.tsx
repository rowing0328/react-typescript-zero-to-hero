/* JSX 요소의 콘텐츠에 사용되는 경우 */
import React from 'react';

export default function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}

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

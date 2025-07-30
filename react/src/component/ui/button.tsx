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
import React from 'react';

export default function Button({ children }: { children: React.ReactElement }) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}

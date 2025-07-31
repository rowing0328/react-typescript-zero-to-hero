/* 이벤트 전파 - 캡처링 */
export default function Table() {
  return (
    <>
      <table border={1} onClickCapture={() => console.log('table')}>
        <tbody onClickCapture={() => console.log('tbody')}>
          <tr onClickCapture={() => console.log('tr')}>
            <td
              onClickCapture={(event) => {
                event.stopPropagation();
                console.log('td');
              }}
            >
              Mike
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

/* 이벤트 전파 - 버블링 */
// export default function Table() {
//   return (
//     <>
//       <table border={1} onClick={() => console.log('table')}>
//         <tbody onClick={() => console.log('tbody')}>
//           <tr onClick={() => console.log('tr')}>
//             <td
//               onClick={(event) => {
//                 event.stopPropagation();
//                 console.log('td');
//               }}
//             >
//               Mike
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </>
//   );
// }

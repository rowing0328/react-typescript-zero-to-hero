/* 타입 쉽게 알아내기 - 인터페이스 */
export default function PrintValue(props: PrintValueProps) {
  return (
    <>
      <p>number: {props.numberValue}</p>
      <p>string: {props.stringValue}</p>
      <p>boolean: {props.booleanValue.toString()}</p>
      <p>array: {props.arrayValue}</p>
      <p>object: {JSON.stringify(props.objectValue)}</p>
      <p>function: {props.handleClick.toString()}</p>
    </>
  );
}

/* 타입 쉽게 알아내기 */
// export default function PrintValue(props: {
//   numberValue: number;
//   stringValue: string;
//   booleanValue: boolean;
//   arrayValue: number[];
//   objectValue: {
//     name: string;
//     age: number;
//   };
//   handleClick: () => void;
// }) {
//   return (
//     <>
//       <p>number: {props.numberValue}</p>
//       <p>string: {props.stringValue}</p>
//       <p>boolean: {props.booleanValue.toString()}</p>
//       <p>array: {props.arrayValue}</p>
//       <p>object: {JSON.stringify(props.objectValue)}</p>
//       <p>function: {props.handleClick.toString()}</p>
//     </>
//   );
// }

/* 비구조화 할당하기 */
// export default function PrintValue(props: {
//   numberValue: number;
//   stringValue: string;
//   booleanValue: true | false;
//   arrayValue: number[];
//   objectValue: { name: string; age: number };
//   handleClick: () => void;
// }) {
//   const { numberValue, stringValue, booleanValue, arrayValue, objectValue, handleClick } = props;
//   return (
//     <>
//       <p>number: {numberValue}</p>
//       <p>string: {stringValue}</p>
//       <p>boolean: {booleanValue.toString()}</p>
//       <p>array: {arrayValue}</p>
//       <p>object: {JSON.stringify(objectValue)}</p>
//       <p>function: {handleClick.toString()}</p>
//     </>
//   );
// }

/* 컴포넌트에 데이터 전달하기 2 (props) */
// export default function PrintValue(props: {
//   numberValue: number;
//   stringValue: string;
//   booleanValue: true | false;
//   arrayValue: number[];
//   objectValue: { name: string; age: number };
//   handleClick: () => void;
// }) {
//   return (
//     <>
//       <p>number: {props.numberValue}</p>
//       <p>string: {props.stringValue}</p>
//       <p>boolean: {props.booleanValue.toString()}</p>
//       <p>array: {props.arrayValue}</p>
//       <p>object: {JSON.stringify(props.objectValue)}</p>
//       <p>function: {props.handleClick.toString()}</p>
//     </>
//   );
// }

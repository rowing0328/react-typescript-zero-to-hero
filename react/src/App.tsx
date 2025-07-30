import User from './component/User';

export default function App() {
  return (
    <>
      <User name='Jack' age={20} />
      <User name='Mike' age={30} />
    </>
  );
}

// /* 동적으로 src 속성 값 설정하기 (이미지)*/
// export default function App() {
//   const imageUrl = 'https://example.com/image.jpg';
//
//   return (
//     <>
//       <img src={imageUrl} alt='Example' />
//     </>
//   );
// }

// /* 동적으로 href 속성 값 설정하기 (링크)*/
// export default function App() {
//   const url = 'https://www.example.com';
//
//   return (
//     <>
//       <a href={url} target='_blank' rel='noopener noreferrer'>
//         Visit Example
//       </a>
//     </>
//   );
// }

/* 기본 자료형 예제 */
// export default function App() {
//   const primitiveString = 'Hello, World!';
//   const primitiveNumber = 42;
//   const primitiveBoolean = false;
//   const primitiveUndefined = undefined;
//   const primitiveNull = null;
//   const primitiveSymbol = Symbol('mySymbol');
//   const primitiveBigInt = 9007199254740991n;
//
//   return (
//     <>
//       <h2>기본 자료형 출력</h2>
//       <p>문자열: {primitiveString}</p>
//       <p>숫자: {primitiveNumber}</p>
//       <p>논리형: {primitiveBoolean.toString()}</p>
//       <p>undefined: {String(primitiveUndefined)}</p>
//       <p>null: {String(primitiveNull)}</p>
//       <p>symbol: {String(primitiveSymbol)}</p>
//       <p>BigInt: {primitiveBigInt}</p>
//     </>
//   );
// }

/* 참조 자료형 예제 */
// export default function App() {
//   const referenceArray: number[] = [1, 2, 3, 4];
//   const referenceObject: object = { name: 'John', age: 30 };
//   const referenceFunction = (): string => '함수의 리턴 값';
//   const referenceDate: Date = new Date();
//   const referenceRegExp: RegExp = /react/i;
//   const referenceMap: Map<string, string> = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//   ]);
//   const referenceSet: Set<number> = new Set([1, 2, 3, 4]);
//
//   return (
//     <>
//       <h2> 참조 자료형 출력</h2>
//       <p>배열: {referenceArray} </p>
//       <p>객체: {JSON.stringify(referenceObject)}</p>
//       <p>함수: {referenceFunction.toString()}</p>
//       <p>Date 객체: {referenceDate.toString()}</p>
//       <p>정규식: {referenceRegExp.toString()}</p>
//       <p>Map: {JSON.stringify(Array.from(referenceMap))}</p>
//       <p>Set: {JSON.stringify(Array.from(referenceSet))}</p>
//     </>
//   );
// }

/* 미션 1. 컴포넌트 만들고 배치하기 */
// import Header from './component/Header';
// import Main from './component/Main';
// import Footer from './component/Footer';
//
// export default function App() {
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//     </>
//   );
// }

/* 함수형 표현식 */
// const App = function App() {
//   return(
//     <>
//       <Header />
//       <Home />
//       <Footer />
//     </>
//   );
// };

// export default App;

/* 화살표 표현식 */
// const App = () => (
//   <>
//     <Header />
//     <Home />
//     <Footer />
//   </>
// );

// export default App;

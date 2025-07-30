/* 기본 자료형 예제 */
export default function App() {
  const primitiveString = 'Hello, World!';
  const primitiveNumber = 42;
  const primitiveBoolean = false;
  const primitiveUndefined = undefined;
  const primitiveNull = null;
  const primitiveSymbol = Symbol('mySymbol');
  const primitiveBigInt = 9007199254740991n;

  return (
    <>
      <h2>기본 자료형 출력</h2>
      <p>문자열: {primitiveString}</p>
      <p>숫자: {primitiveNumber}</p>
      <p>논리형: {primitiveBoolean.toString()}</p>
      <p>undefined: {String(primitiveUndefined)}</p>
      <p>null: {String(primitiveNull)}</p>
      <p>symbol: {String(primitiveSymbol)}</p>
      <p>BigInt: {primitiveBigInt}</p>
    </>
  );
}

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

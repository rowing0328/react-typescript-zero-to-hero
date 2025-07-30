/* JSX 요소의 콘텐츠에 사용되는 경우 */
import Button from './component/ui/button.tsx';

export default function App() {
  return (
    <>
      <Button>
        <span>✅</span>
      </Button>
    </>
  );
}

/* JSX 요소의 속성에 사용되는 경우 */
// import Button from './component/ui/button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button id='btn' className='btn btn-primary' />
//     </>
//   );
// }

/* children - ReactElement 방식 */
// import Button from './component/ui/button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button>
//         <span>Login</span>
//       </Button>
//     </>
//   );
// }

/* children - ReactNode 방식 */
// import Button from './component/ui/button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button>
//         <em>Login</em>
//       </Button>
//     </>
//   );
// }

/* 스프레드 연산자 활용하기 */
// import User from './component/User';
// import User2 from './component/User2.tsx';
//
// export default function App() {
//   const userObj = {
//     name: 'jack',
//     age: 20,
//     gender: 'male',
//   };
//
//   return (
//     <>
//       <User userObj={userObj} />
//       <User2 {...userObj} />
//       <User2 name={'jack'} age={20} gender={'male'} />
//     </>
//   );
// }

/* 타입 쉽게 알아내기 - 인터페이스 */
// import PrintValue from './component/PrintValue.tsx';
//
// export default function App() {
//   const numberValue: number = 42;
//   const stringValue: string = 'Hello World';
//   const booleanValue: boolean = true;
//   const arrayValue: number[] = [1, 2, 3, 4];
//   const objectValue: { name: string; age: number } = { name: 'John Doe', age: 30 };
//   const handleClick = () => alert('버튼이 클릭되었습니다!');
//
//   return (
//     <>
//       <PrintValue
//         numberValue={numberValue}
//         stringValue={stringValue}
//         booleanValue={booleanValue}
//         arrayValue={arrayValue}
//         objectValue={objectValue}
//         handleClick={handleClick}
//       />
//     </>
//   );
// }

/* 컴포넌트에 데이터 전달하기 1 */
// import User from './component/User';
//
// export default function App() {
//   return (
//     <>
//       <User name='Jack' age={20} />
//       <User name='Mike' age={30} />
//     </>
//   );
// }

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

/* 상태 끌어올리기 */
import FirstCount from './component/FirstCount.tsx';
import SecondCount from './component/SecondCount.tsx';

export default function App() {
  return (
    <>
      <FirstCount />
      <SecondCount />
    </>
  );
}

/* 배열 상태 다루기 */
// import { useState } from 'react';
//
// export default function App() {
//   const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);
//   const handleAddFruit = () => {
//     // setFruits((fruits) => ['melon', ...fruits]);
//     // setFruits((fruits) => fruits.map((fruit) => (fruit === 'apple' ? 'grape' : fruit)));
//     setFruits((fruits) => [...fruits.slice(0, 1), 'grape', ...fruits.slice(1)]);
//   };
//   return (
//     <>
//       <p>{fruits.join(', ')}</p>
//       <button onClick={handleAddFruit}>Add Fruit</button>
//     </>
//   );
// }

/* 객체 상태 정의하기 심화 */
// import { useState } from 'react';
//
// export default function App() {
//   const [userInfo, setUserInfo] = useState({
//     name: 'jack',
//     age: 20,
//     gender: 'male',
//     contact: {
//       email: 'jack@example.com',
//       phone: '123-456-7890',
//     },
//     address: {
//       home: {
//         street: '123 Main St',
//         city: 'New York',
//         zipCode: '10001',
//       },
//       office: {
//         street: '456 Business Ave',
//         city: 'New York',
//         zipCode: '10002',
//       },
//     },
//   });
//
//   const handleUpdateUserInfo = () => {
//     setUserInfo((userInfo) => ({
//       ...userInfo,
//       name: 'mike',
//       age: 30,
//       contact: {
//         ...userInfo.contact,
//         email: 'sucoding@naver.com',
//       },
//       address: {
//         ...userInfo.address,
//         home: {
//           ...userInfo.address.home,
//           street: '111 Ave',
//         },
//         office: {
//           ...userInfo.address.office,
//           street: '134 Ave',
//         },
//       },
//     }));
//   };
//
//   return (
//     <>
//       <pre>{JSON.stringify(userInfo, null, 2)}</pre>
//       <button onClick={() => handleUpdateUserInfo()}>UpdateUserInfo</button>
//     </>
//   );
// }

/* 객체 상태 정의하기 */
// import { useState } from 'react';
//
// export default function App() {
//   const [userInfo, setUserInfo] = useState({
//     name: 'jack',
//     age: 20,
//     gender: 'male',
//   });
//
//   const handleUpdateUserInfo = () => {
//     setUserInfo((userInfo) => ({
//       ...userInfo,
//       name: 'mike',
//     }));
//   };
//
//   return (
//     <>
//       <p>name: {userInfo.name}</p>
//       <p>age: {userInfo.age}</p>
//       <p>gender: {userInfo.gender}</p>
//       <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
//     </>
//   );
// }

/* 카운터 앱 만들기 */
// import { useState } from 'react';
//
// export default function App() {
//   const [count, setCount] = useState<number>(0);
//   const handleIncrement = () => setCount((count) => count + 1);
//   const handleDecrement = () => setCount((count) => count - 1);
//   const handleReset = () => setCount(0);
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>increment</button>
//       <button onClick={handleDecrement}>decrement</button>
//       <button onClick={handleReset}>reset</button>
//     </>
//   );
// }

/* 상태 업데이트 방법 복습하기 */
// import { useState } from 'react';
//
// export default function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     // setCount(count + 1);
//     setCount((count) => count + 1);
//   };
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>increment</button>
//     </>
//   );
// }

/* 상태 업데이트 방법 */
// import { useState } from 'react';
//
// export default function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => {
//     setCount((count) => count + 1);
//     setCount((count) => count + 1);
//     setCount((count) => count + 1);
//   };
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={handleIncrement}>increment</button>
//     </>
//   );
// }

/* 상태 정의하기 */
// import { useState } from 'react';
//
// export default function App() {
//   const [name, setName] = useState<string>('jack');
//   const [age, setAge] = useState<number>(20);
//   const [gender, setGender] = useState<string>('male');
//   const handleUpdateProfile = () => {
//     setName('ubin');
//     setAge(25);
//     setGender('female');
//   };
//   return (
//     <>
//       <p>name: {name}</p>
//       <p>age: {age}</p>
//       <p>gender: {gender}</p>
//       <button onClick={handleUpdateProfile}>Update Profile</button>
//     </>
//   );
// }

/* useState - 2 */
// import { useState } from 'react';
//
// export default function App() {
//   const [numberToString, setNumberToString] = useState<number | string>(0);
//   const [isShow, setIsShow] = useState<boolean>(true);
//   const handleSetToTen = () => {
//     setNumberToString('10');
//     setIsShow(false);
//   };
//   return (
//     <>
//       <h1>state: {numberToString}</h1>
//       <h1>show: {isShow.toString()}</h1>
//       <button onClick={handleSetToTen}>Set To 10</button>
//     </>
//   );
// }

// import { useState } from 'react';
//
// export default function App() {
//   const [state, setState] = useState<number>(0);
//   const handleSetToTen = () => {
//     setState(10);
//   };
//   return (
//     <>
//       <h1>state: {state}</h1>
//       <button onClick={handleSetToTen}>Set To 10</button>
//     </>
//   );
// }

/* 상태가 필요한 이유 */
// export default function App() {
//   let name: string = 'mike';
//   let age: number = 20;
//   const handleClick = () => {
//     name = 'john';
//     age = 30;
//     console.log(name, age);
//   };
//   return (
//     <>
//       <p>name: {name}</p>
//       <p>age: {age}</p>
//       <button onClick={handleClick}>change</button>
//     </>
//   );
// }

/* 버튼 컴포넌트 만들기 */
// import Button from './component/ui/Button';
//
// export default function App() {
//   const handleClick = (message: string) => alert(message);
//
//   return (
//     <>
//       <Button handleClick={handleClick} message='로그인이 되었습니다.'>
//         Login
//       </Button>
//     </>
//   );
// }

/* 이벤트 기본 동작 막기 */
// import React from 'react';ㅇ
//
// export default function App() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <a href='https://ko.wikipedia.org/' onClick={(event) => event.preventDefault()}>
//           위키피디아
//         </a>
//         <button type='submit'>전송</button>
//       </form>
//     </>
//   );
// }

/* 이벤트 전파 - 캡처링 */
// import Table from './component/Table';
//
// export default function App() {
//   return (
//     <>
//       <Table />
//     </>
//   );
// }

/* 이벤트 전파 - 버블링 */
// import Table from './component/Table';
//
// export default function App() {
//   return (
//     <>
//       <Table />
//     </>
//   );
// }

/* 이벤트 객체 배우기 -3 */
// import Button from './component/ui/Button';
// import React from 'react';
//
// export default function App() {
//   const handleClick = (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     event.currentTarget.innerText = message;
//     (event.target as HTMLButtonElement).innerText = message;
//   };
//   return (
//     <>
//       <Button handleClick={handleClick} />
//     </Button>
//   );
// }

/* 이벤트 객체 배우기 -2 */
// import Button from './component/ui/Button';
// import React from 'react';
//
// export default function App() {
//   const handleClick = (message: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     console.log(message);
//     console.log(event);
//   };
//   return (
//     <>
//       <Button handleClick={handleClick} />
//     </>
//   );
// }

/* 이벤트 객체 배우기 -1 */
// import Button from './component/ui/Button';
//
// export default function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

/* 이벤트 핸들러를 props로 전달하기 */
// import Button from './component/ui/Button';
//
// export default function App() {
//   const handleClick = (message: string) => alert(message);
//   return (
//     <>
//       <Button handleClick={handleClick} message='Playing'>
//         Play Movie
//       </Button>
//       <Button handleClick={handleClick} message='Uploading'>
//         Upload Image
//       </Button>
//     </>
//   );
// }

/* 이벤트 핸들러에서 props 읽기 */
// import Button from './component/ui/Button';
//
// export default function App() {
//   return (
//     <>
//       <Button message='Playing!'>Play Movie</Button>
//       <Button message='Uploading!'>Upload Image</Button>
//     </>
//   );
// }

/* 이벤트 핸들러 방법 추천 */
// import Button from './component/ui/Button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

/* 이벤트 핸들러에 매개변수 전달하기 */
// import Button from './component/ui/Button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

/* 이벤트 연결하기 */
// import Button from './component/ui/Button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

/* UserProfile 컴포넌트 만들기 */
// import UserProfile from './component/UserProfile';
//
// export default function App() {
//   return (
//     <>
//       <h1 style={{ margin: '10px' }}>사용자 목록</h1>
//       <UserProfile name={'Alice'} age={30} isAdmin={true} />
//       <UserProfile name={'Bob'} age={25} isAdmin={false} />
//     </>
//   );
// }

/* JSX 요소의 콘텐츠에 사용되는 경우 */
// import Button from './component/ui/Button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button>
//         <span>✅</span>
//       </Button>
//     </>
//   );
// }

/* JSX 요소의 속성에 사용되는 경우 */
// import Button from './component/ui/Button.tsx';
//
// export default function App() {
//   return (
//     <>
//       <Button id='btn' className='btn btn-primary' />
//     </>
//   );
// }

/* children - ReactElement 방식 */
// import Button from './component/ui/Button.tsx';
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
// import Button from './component/ui/Button.tsx';
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

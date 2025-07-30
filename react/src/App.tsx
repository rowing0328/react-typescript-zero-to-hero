import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

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

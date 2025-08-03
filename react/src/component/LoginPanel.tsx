import { useState } from 'react';

export default function LoginPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoggedIn = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <>
      <h1>{isLoggedIn ? '환영합니다! 🎉' : '로그인이 필요합니다'}</h1>
      <button onClick={handleLoggedIn}>{isLoggedIn ? '로그아웃' : '로그인'}</button>
    </>
  );
}

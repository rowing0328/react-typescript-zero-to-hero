/* UserProfile 컴포넌트 만들기 */
interface UserProfileProps {
  name: string;
  age: number;
  isAdmin: boolean;
}

export default function UserProfile({ name, age, isAdmin }: UserProfileProps) {
  return (
    <>
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <p>출력:</p>
        <p>이름: {name}</p>
        <p>나이: {age}</p>
        <p>{isAdmin ? '관리자 계정' : '일반 사용자'}</p>
      </div>
    </>
  );
}

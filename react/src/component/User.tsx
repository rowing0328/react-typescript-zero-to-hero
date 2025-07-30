/* 스프레드 연산자 활용하기 */
export default function User({
  userObj,
}: {
  userObj: { name: string; age: number; gender: string };
}) {
  return (
    <>
      <div>
        <p>name: {userObj.name}</p>
        <p>age: {userObj.age}</p>
        <p>gender: {userObj.gender}</p>
      </div>
    </>
  );
}

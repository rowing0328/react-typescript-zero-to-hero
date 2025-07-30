/* 스프레드 연산자 활용하기 */
export default function User2({
  name,
  age,
  gender,
}: {
  name: string;
  age: number;
  gender: string;
}) {
  return (
    <>
      <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>gender: {gender}</p>
      </div>
    </>
  );
}

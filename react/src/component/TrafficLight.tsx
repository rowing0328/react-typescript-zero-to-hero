export default function TrafficLight({
  light,
  message,
  handleChangeLight,
}: {
  light: string;
  message: string;
  handleChangeLight: () => void;
}) {
  return (
    <>
      <h1>TrafficLight: {light.toLocaleUpperCase()}</h1>
      <p>{message}</p>
      <button onClick={handleChangeLight}>Change Light</button>
    </>
  );
}

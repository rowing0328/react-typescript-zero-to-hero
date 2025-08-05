/* 타입 키워드 방식 */
type PrintValueProps = {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
};

type ButtonGroupProps = {
  id: number;
  label: string;
  icon: string;
  isDisabled: boolean;
};

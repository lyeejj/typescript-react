import { useState, ReactElement } from "react";

//props 타입 정의
interface Props {
  onClickAdd: (text: string) => void;
  //만약 APP부모컴포넌트에서 children을 사용하고 싶다면 children 타입도 정의해줘야 한다.
  //   children: ReactElement;
}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    props.onClickAdd(text);
    setText("");
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}

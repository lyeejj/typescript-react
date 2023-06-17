import { useState, ReactElement, useContext } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

//props 타입 정의
interface Props {}

export default function Editor(props: Props) {
  const [text, setText] = useState("");

  //커스텀훅 불러오기
  const dispatch = useTodoDispatch();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text);
    setText("");
  };

  return (
    <div className="App">
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
    </div>
  );
}

import { Todo } from "../types";
import { useTodoDispatch } from "../App";

//Todo타입과 중복되는 것이 있음
interface Props extends Todo {}

export default function TodoItem(props: Props) {
  const dispatch = useTodoDispatch();
  const onClickButton = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}

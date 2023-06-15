import { Todo } from "../types";

//Todo타입과 중복되는 것이 있음
interface Props extends Todo {
  onClickDelete: (id: number) => void;
}

export default function TodoItem(props: Props) {
  const onClickButton = () => {
    props.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번: {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  );
}

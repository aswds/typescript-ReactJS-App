import React, { FC } from "react";
import { ITodo } from "../../types/types";

type TodosItemProps = {
  todo: ITodo;
};

const TodosItem: FC<TodosItemProps> = ({ todo }) => {
  return (
    <div>
      <input type={"checkbox"} checked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};

export default TodosItem;

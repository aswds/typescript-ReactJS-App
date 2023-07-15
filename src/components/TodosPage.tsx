import React, { FC } from "react";
import { ITodo } from "../../types/types";
import { useFetchers } from "../hooks/useUsers";
import TodosItem from "./TodosItem";
import List from "./List";
type Props = {};
export const TodosPage: FC<Props> = (props) => {
  const { todos } = useFetchers();
  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodosItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

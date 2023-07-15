import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ITodo } from "../../types/types";
import { Todos_Offline } from "../data/todos";
type Props = {};

type TodoItemPageParams = {
  id: string;
};

const TodoItemPage: React.FC<Props> = (props) => {
  const [Todo, setTodo] = useState<ITodo | null>(null);
  const params = useParams<TodoItemPageParams>();
  async function fetchTodo() {
    const response = await axios.get<ITodo>(
      "https://jsonplaceholder.typicode.com/todos/" + params?.id
    );
    setTodo(response.data ? response.data : Todos_Offline[0]);
  }

  useEffect(() => {
    fetchTodo();
  });
  return <div>{Todo?.title}</div>;
};

export default TodoItemPage;

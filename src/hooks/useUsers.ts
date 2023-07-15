import axios from "axios";
import React, { useState, useEffect } from "react";
import { ITodo, IUser } from "../../types/types";
export function useFetchers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);
  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e: unknown) {
      console.log(e);
    }
  }
  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e: unknown) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  return {
    users,
    todos,
  };
}

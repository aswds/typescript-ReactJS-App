import React, { useState, CSSProperties } from "react";
import { NavLink, Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import TodoItemPage from "./components/TodoItemPage";
import TodosItem from "./components/TodosItem";
import { TodosPage } from "./components/TodosPage";
import UserItem from "./components/UserItem";
import UserItemPage from "./components/UserItemPage";
import { UserPage } from "./components/UserPage";
function App() {
  const navStyles: CSSProperties = {
    width: "100%",
    display: "flex",
    height: "2rem",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  return (
    <BrowserRouter>
      <div>
        <div style={navStyles}>
          <NavLink to="/users">Users</NavLink>
          <NavLink to="/todos">Todos</NavLink>
        </div>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/todos/:id" element={<TodoItemPage />} />
          <Route path="/users/id/:id" element={<UserItemPage />} />
          {/* <Route path="/todos/:id" element={<TodosItem />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

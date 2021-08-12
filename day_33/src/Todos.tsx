import React, { useState, useContext } from "react";
import TodoList from "./TodoList";
import ThemeContext from "./themeContext";
import { ThemeContextType } from "./themeContext";

interface TodoType {
  title: string;
  done: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <div className={theme ? "todos dark" : "todos"}>
      <button
        onClick={() => {
          setTodos([...todos, { title: "learn react", done: false }]);
        }}
      >
        Add todos
      </button>
      {todos.map((todo, index) => {
        return <TodoList key={index} title={todo.title} done={todo.done} />;
      })}
    </div>
  );
};

export default Todos;

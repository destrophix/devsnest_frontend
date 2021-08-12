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
  const { theme } = useContext<ThemeContextType>(ThemeContext);
  const [input, setInput] = useState<string>("");

  return (
    <div className={theme ? "todos dark" : "todos"}>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          setTodos([...todos, { title: input, done: false }]);
          setInput("");
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

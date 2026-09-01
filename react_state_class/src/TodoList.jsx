import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 

export default function TodoList() {
  const [todos, setTodos] = useState(() => [
    { id: uuidv4(), text: "Learn React state", done: false },
    { id: uuidv4(), text: "Build a todo app", done: true },
  ]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), text, done: false }, 
    ]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
  };

  const remaining = todos.filter((todo) => !todo.done).length;

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Todo App</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
          placeholder="Add a new todo..."
          style={{ flex: 1, padding: "10px", fontSize: "16px" }}
        />
        <button onClick={addTodo} style={{ padding: "10px 16px", cursor: "pointer" }}>
          Add
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
        <strong>{remaining} task(s) left</strong>
        <button onClick={clearCompleted} style={{ cursor: "pointer" }}>
          Clear completed
        </button>
      </div>

      <hr />

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {todos.length === 0 ? (
          <li style={{ color: "gray" }}>No tasks yet. Add one above.</li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              <label style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                    color: todo.done ? "gray" : "black",
                  }}
                >
                  {todo.text}
                </span>
              </label>

              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ cursor: "pointer", marginLeft: "10px" }}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

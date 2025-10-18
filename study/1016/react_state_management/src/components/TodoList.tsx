import { useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  addtodo,
  clearTodo,
  removeTodo,
  toggleTodos,
} from "../store/slices/todoSlice";

export default function TodoList() {
  const [input, setInput] = useState("");
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  return (
    <div className="max-w-screen-sm mx-auto space-y-4">
      <h1>todo list</h1>

      {/* 데이터 입력 */}
      <div className="border border-green-500">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할일을 입력하세요"
        />
        <button
          onClick={() => {
            if (input.trim()) {
              dispatch(addtodo(input.trim()));
              setInput("");
            }
          }}
        >
          추가
        </button>
        <button onClick={() => dispatch(clearTodo())}>전체삭제</button>
      </div>

      {/* 투두 리스트 */}
      <ul className="border border-blue-500 min-h-10">
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            <span
              onClick={() => dispatch(toggleTodos(todo.id))}
              style={{ cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

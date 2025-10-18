import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "../../types/todo";

const initialState: TodoState = {
  todos: [],
  nextId: 1,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo(state, action: PayloadAction<string>) {
      state.todos.push({ id: state.nextId, text: action.payload, done: false });
      state.nextId += 1;
    },
    toggleTodos(state, action: PayloadAction<number>) {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    clearTodo(state) {
      state.todos = [];
      state.nextId = 1;
    },
  },
});

export const { addtodo, toggleTodos, removeTodo, clearTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

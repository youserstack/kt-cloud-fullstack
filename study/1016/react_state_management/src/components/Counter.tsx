import { decrement, increment } from "../store/slices/counterSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="border border-blue-500 w-1/2 mx-auto">
      <h1>count: {count}</h1>
      <div className="border flex gap-2 items-center justify-center">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

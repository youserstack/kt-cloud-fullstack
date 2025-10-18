import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="[&_button]:size-10 [&_p]:size-10 flex items-center justify-center">
      <div className="border">
        <p className="bg-black text-white">{count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </div>
      </div>
    </div>
  );
}

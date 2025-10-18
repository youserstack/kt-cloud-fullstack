import { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Timer;

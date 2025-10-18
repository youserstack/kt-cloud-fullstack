import { useEffect, useState } from "react";

export default function HelloEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("로드 완료");
  }, [count]);

  useEffect(() => {
    console.log("최초 렌더링");
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const onClick = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  };

  return (
    <div>
      <button onClick={onClick}>클릭</button>
      <p>{count}</p>
    </div>
  );
}

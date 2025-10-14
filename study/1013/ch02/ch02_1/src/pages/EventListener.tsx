import { useEffect } from "react";

export default function EventListener() {
  useEffect(() => {
    document.getElementById("root")?.addEventListener("click", (e: Event) => {
      // const { isTrusted, target, bubbles } = e;
      // console.log({ isTrusted, target, bubbles });
      console.log("부모이벤트!");
    });
    document.getElementById("child")?.addEventListener("click", (e: Event) => {
      console.log("자식이벤트!");
      e.stopPropagation();
    });
  }, []);

  return <div id="child">이벤트리스너</div>;
}

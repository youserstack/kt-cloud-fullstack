export default function EventListener2() {
  const handleParentClick = () => {
    console.log("부모 클릭!");
  };

  const handleChildClick = (e: React.MouseEvent) => {
    console.log("자식 클릭!");
    e.stopPropagation(); // 부모로 이벤트 전파 방지
  };

  return (
    <div id="root" onClick={handleParentClick}>
      <div id="child" onClick={handleChildClick}>
        이벤트리스너
      </div>
    </div>
  );
}

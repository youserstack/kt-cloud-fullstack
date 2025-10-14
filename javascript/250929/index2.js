window.onload = function () {
  // 1. 요소 선택 실습
  const title = document.querySelector("#main-title"); // ID로 선택
  const addItemButton = document.getElementById("add-item-btn"); // 구식 ID 선택
  const listContainer = document.querySelector("#item-list");
  const allListItems = document.querySelectorAll(".list-item"); // 모든 항목 선택 (NodeList)

  // 2. 내용 변경 및 속성 조작 실습
  // 버튼 클릭 시 제목 텍스트 변경 및 클래스 토글
  document.querySelector("#change-text-btn").addEventListener("click", () => {
    // 텍스트 내용 변경 (textContent)
    title.textContent = "클릭되었습니다!";

    // 클래스 토글
    title.classList.toggle("highlight");
  });

  // 3. 요소 생성 및 추가 실습
  addItemButton.addEventListener("click", () => {
    // 1. 새로운 <li> 요소 생성
    const newItem = document.createElement("li");

    // 2. 내용 설정 및 클래스/속성 부여
    const itemNumber = listContainer.children.length + 1;
    newItem.textContent = `동적으로 추가된 ${itemNumber}번 항목`;
    newItem.classList.add("list-item");
    newItem.setAttribute("data-id", itemNumber);

    // 3. 목록 컨테이너의 맨 뒤에 추가 (append 사용)
    listContainer.append(newItem);

    // 추가된 항목에 삭제 이벤트 리스너 등록
    newItem.addEventListener("click", function () {
      this.remove();
    });

    // 결과 영역에 메시지 표시
    document.querySelector(
      "#result-area"
    ).innerHTML = `<p><strong>항목 ${itemNumber}</strong>가 추가되었습니다.</p>`;
  });

  // 4. 기존 요소 삭제 실습 (각 항목에 이벤트 리스너 등록)
  allListItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (confirm(`'${this.textContent}' 항목을 정말 삭제하시겠습니까?`)) {
        this.remove(); // 클릭된 li 요소 자체를 삭제
      }
    });
  });

  //
  //
  //
  //
  //
  //
  //
  // 내용수정
  const mainTitle = document.getElementById("main-title");
  mainTitle.textContent = "풀스택";

  const items = document.querySelectorAll("#item-list li");
  //   console.log({ items });
  items.forEach((item, index) => {
    item.textContent = index + 1;
  });

  //
  //
  //
  //
  //
  // 요소추가
  const newElement = document.createElement("div");
  newElement.style.marginTop = "50px";
  newElement.style.width = "200px";
  newElement.style.height = "200px";
  newElement.style.border = "2px solid red";

  document.body.querySelector("#container").appendChild(newElement);

  //
  //
  //
  //
  // 부모노드에서 자식노드제거
  const parentNode = document.querySelector("#result-area");
  const childNode = document.querySelector("#child");
  parentNode.removeChild(childNode);

  //
  //
  //
  //
  //
  // 요소제거
  document.querySelector("#main-title").remove();
  document.querySelector("#myLink").remove();
  const introduction = document.createElement("p");
  introduction.textContent = "안녕하세요...";
  introduction.style.textAlign = "center";
  document.body.appendChild(introduction);
  const insa = document.createElement("p");
  insa.textContent = "인사말....";
  insa.style.textAlign = "center";
  document.querySelector("#container").appendChild(insa);
};

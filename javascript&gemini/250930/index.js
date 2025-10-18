// window.addEventListener("load", () => {
//   let count = 0;
//   const button = document.querySelector(".target-button");
//   const div = document.querySelector(".count-div");

//   div.textContent = count;

//   button.addEventListener("click", (e) => {
//     count++;
//     div.textContent = count;
//   });
// });

// window.addEventListener("load", () => {
//   const input = document.querySelector(".target-input");
//   // console.log({ input });

//   // input.addEventListener("keydown", (e) => {
//   //   console.log("keydown", e.key);
//   //   console.log("keydown", e.);
//   // });

//   // input.addEventListener("change", (e) => {
//   //   console.log("change:", e.target.value);
//   // });

//   input.addEventListener("input", (e) => {
//     console.log("input:", e.target.value);
//   });
// });

// window.addEventListener("load", () => {
//   const form = document.querySelector("form");
//   // console.log({ form });

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     // console.log({ e });

//     const formData = new FormData(form);
//     // console.log({ formData });

//     formData.forEach((value, key) => {
//       // console.log({ key, value });
//     });
//   });
// });

// window.addEventListener("resize", (e) => {
//   const target = e.target;
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   // 리사이즈 이벤트는 윈도우에서만 발생

//   console.log({ target, width, height });
// });

// window.addEventListener("load", () => {
//   const outer = window.document.querySelector(".outer");
//   const inner = window.document.querySelector(".inner");

//   // console.log({ outer, inner });

//   outer.addEventListener("click", (e) => {
//     console.log("click outer");
//   });

//   inner.addEventListener("click", (e) => {
//     e.stopPropagation();

//     console.log("click inner");
//   });
// });

// window.addEventListener("load", () => {
//   const link = window.document.querySelector("a");

//   // console.log({ outer, inner });

//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("click");
//   });
// });

// window.addEventListener("load", () => {
//   const ul = window.document.querySelectorAll("ul");

//   ul.forEach((li) => {
//     li.addEventListener("click", (e) => console.log(e.target.textContent));
//   });
// });

// 1. 마우스 오버 이벤트 발생 시 이미지 변경
// <img> 요소에 mouseover 이벤트 리스너를 연결합니다. 이벤트 발생 시 <img>의 src 속성을 대체 이미지 URL로 변경합니다.
// 동일한 <img> 요소에 mouseout 이벤트 리스너를 연결합니다. 이벤트 발생 시 <img>의 src 속성을 기본 이미지 URL로 되돌립니다.
//  마우스를 이미지 위로 올리면 이미지가 바뀌고, 마우스를 떼면 원래대로 돌아옵니다.

// window.addEventListener("load", () => {
//   const img = window.document.querySelector("img");
//   console.log({ img });

//   img.addEventListener("mouseover", (e) => {
//     e.target.src = "https://picsum.photos/300/200";
//   });

//   img.addEventListener("mouseout", (e) => {
//     e.target.src = "";
//   });
// });

// 2. 키보드로 상자 움직이기
// 사용자가 키보드의 화살표 키를 누르면, 화면에 배치된 사각형(<div>)이 해당 방향으로 움직이도록 구현
// 설정사항)
// HTML: 화면에 가로/세로 50px 정도의 사각형 <div> 요소를 하나 생성하고, id="player" 설정
// CSS: #player 요소에 반드시 position: absolute; 속성 부여. 초기 top과 left 값을 설정하여 화면에 배치

// window.addEventListener("load", () => {
//   const player = document.querySelector(".player");
//   let x = 0;
//   let y = 0;

//   window.addEventListener("keydown", (e) => {
//     const key = e.key;

//     if (key === "ArrowDown") y += 10;
//     if (key === "ArrowUp") y -= 10;
//     if (key === "ArrowRight") x += 10;
//     if (key === "ArrowLeft") x -= 10;

//     player.style.transform = `translate(${x - 50}px, ${y - 50}px)`;
//   });
// });

// const localStorage = () => {
//   const data = window.document.querySelector("input").value;
//   localStorage.setItem("test", data);
// };

// const loadData = () => {
//   const data = localStorage.getItem("data");
//   if (data) window.document.querySelector("input").value = data;
// };

document.addEventListener("DOMContentLoaded", () => {
  const inputEl = document.querySelector("input");
  console.log({ inputEl });

  if (!inputEl) return;

  inputEl.addEventListener("input", (e) => {
    const inputValue = e.target.value;
    console.log("입력값:", inputValue);
    localStorage.setItem("inputValue", inputValue);

    document.querySelector(".copy").textContent = inputValue;
  });

  // inputEl.addEventListener("change", (e) => {
  //   const inputValue = e.target.value;
  //   console.log("입력값:", inputValue);
  //   localStorage.setItem("inputValue", inputValue);
  // });
});

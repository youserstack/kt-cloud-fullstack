# 동기(Sync)

- 코드가 순차적으로 한 줄씩 실행됨
- 앞선 작업이 끝나야 다음 작업이 시작됨

```js
console.log("1");
console.log("2");
console.log("3");
// 출력 순서: 1 → 2 → 3
```

- 문제점: 시간이 오래 걸리는 작업(예: 파일 읽기, 네트워크 요청)이 있으면 그동안 프로그램이 멈춤.

# 비동기(Async)

- 코드가 다른 작업을 기다리지 않고 진행됨
- 오래 걸리는 작업은 백그라운드에서 처리, 완료되면 알려줌

```js
console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000); // 2초 후 출력
console.log("3");
// 출력 순서: 1 → 3 → 2
```

- 즉, 비동기는 작업을 동시에 처리하는 느낌이지만, 자바스크립트는 실제로 싱글 스레드이기 때문에 이벤트 루프(Event Loop)로 작업 순서를 조절합니다.

# Promise

### 정의

- 미래에 완료될 수 있는 비동기 작업을 나타내는 객체
- 세 가지 상태를 가짐:
  - Pending: 아직 완료되지 않음
  - Fulfilled: 성공적으로 완료됨
  - Rejected: 실패함

### 사용법

```js
const promise = new Promise((resolve, reject) => {
  const success = true; // 예시
  setTimeout(() => {
    if (success) {
      resolve("작업 완료!"); // 성공
    } else {
      reject("작업 실패!"); // 실패
    }
  }, 1000);
});

promise
  .then((result) => console.log(result)) // 성공 시 실행
  .catch((error) => console.log(error)); // 실패 시 실행
```

### 장점

- 콜백 지옥(callback hell) 문제를 어느 정도 해결
- 여러 비동기 작업 체인 가능

# async / await

### 정의

- async 함수: 항상 Promise를 반환하는 함수
- await 키워드: Promise가 완료될 때까지 기다림, 동기처럼 코드 작성 가능

### 사용법

```js
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("시작");
  await wait(1000); // 1초 대기
  console.log("1초 후 완료");
}

main();
```

### 장점

- 비동기 코드도 동기처럼 깔끔하게 작성 가능
- then/catch 체인 없이 try/catch로 예외 처리 가능

```js
async function fetchData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("에러 발생!", error);
  }
}

fetchData();
```

# Promise와 async/await 비교

| 항목             | Promise              | async/await                |
| ---------------- | -------------------- | -------------------------- |
| 문법             | `.then().catch()`    | `await` + `try/catch`      |
| 가독성           | 체인이 길어지면 복잡 | 동기 코드처럼 직관적       |
| 예외 처리        | `.catch()`           | `try/catch`                |
| 여러 비동기 처리 | `Promise.all([...])` | `await Promise.all([...])` |

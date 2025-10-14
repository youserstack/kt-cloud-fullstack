// 1~5 숫자가 포함된 배열 [1, 2, 2, 3, 4, 5, 5]에서 중복을 제거한 후,
// 모든 숫자에 5를 더한 값을 순서대로 출력하세요.
// 그리고 "total"이라는 키에 중복을 제거한 숫자들의 합을 저장한 Map을 만들어 출력하세요.

const arr = [1, 2, 2, 3, 4, 5, 5];
const set = new Set(arr);
const result = [...set].map((v) => v + 5);
// console.log({ set });
// console.log({ result });

const map = new Map();
map.set(
  "total",
  result.reduce((a, v) => a + v, 0)
);
// console.log({ map });

//
//
//
//
//
//
// 다음 배열에서 짝수만 골라 제곱한 후,
// 그 합계를 구해 출력하세요.

const numbers = [3, 4, 7, 8, 10, 13];
const result2 = numbers.reduce((a, v) => (v % 2 === 0 ? a + v : a), 0);
// console.log({ result2 });
// 사용해야 하는 메서드: filter(), map(), reduce()

//
//
//
//
//
//
// 2초 후 "✅ 데이터 준비 완료"를 출력하는 비동기 함수를 만들어보세요.
// 단, 반드시 async / await 문법을 사용해야 합니다.

// 힌트:

// setTimeout을 활용해 Promise를 반환하는 함수를 먼저 만드세요.
// await로 기다린 뒤 로그를 출력하세요.

function fetcher() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve!!!");
    }, 2000);
  });
}

fetcher();

async function main() {
  const result = await fetcher();
  console.log({ result });
}

main();

// 객체 -> 순서없음 -> for in
const obj = { a: 1, b: 2 };
// for (const k in obj) {
//   // console.log(k); // "a", "b"
// }

// 이터러블 컬렉션 객체
// 맵셋객체 -> 순서잇음, 삽입된순서로 -> for of
const map = new Map();
map.set("name", "batman");
map.set("age", 30);
// for (const [key, value] of map) {
//   // console.log({ key, value });
// }
// const keys = map.keys(); // 이터러블객체 -> for of
// // console.log({ keys });
// for (const key of map.keys()) {
//   // console.log({ key });
// }

const set = new Set();
set.add("1");
set.add("2");
set.add("2");
// for (const v of set) {
//   // console.log({ v });
// }
// console.log({ set, 몇개: set.size, "1존재?": set.has("1") });

// 이터러블 컬렉션 객체
// 배열객체 (특수한객체) -> 순서잇음 -> for of, map, filter, reduce, find, ...
const nums = [1, 2, 3, 4];

// 새로운배열
const squares = nums.map((n) => n ** 2); // [1, 4, 9, 16]
const evens = nums.filter((n) => n % 2 === 0); // [2, 4]
const sum = nums.reduce((acc, cur) => acc + cur, 0); // 10

// 찾기
const found = nums.find((n) => n > 2); // 3
const found3 = nums.find((n) => n === 3);
console.log({ found3 });

// 조건함수
const hasNegative = nums.some((n) => n < 0); // false
const isOverZero = nums.some((n) => n > 0);
console.log({ isOverZero });
const allPositive = nums.every((n) => n > 0); // true

//
const nested = [1, 2, 3];
const duplicated = nested.flatMap((n) => [n, n]); // [1,1,2,2,3,3]
// console.log({ nested, duplicated });

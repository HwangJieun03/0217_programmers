// 배열
const arr = [5, 6, 7, 8, 9];

// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수
arr.forEach(function (a, b, c) {
  // 데이터, 인덱스, 객체 전체
  console.log(`a : ${a}, b : ${b}, c:${c}`);
});

// Map
let map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

map.forEach(function (a, b, c) {
  // value, key, Map 객체 자체
  console.log(`a : ${a}, b : ${b}, c:${c}`);
});

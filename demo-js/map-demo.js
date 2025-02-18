// map 함수 (메서드) vs forEach 차이

const arr = [2, 4, 6, 8, 10];

// 객체 (또는 배열)에서 요소를 하나 꺼낸 다음
// 매개변수로 그 요소를 전달하여 호출되는 콜백함수
const foreachArr = arr.forEach(function (a, b, c) {
  // 데이터, 인덱스, 객체 전체
  //console.log(`a : ${a}, b : ${b}, c:${c}`);
  return a - 1;
});

console.log(arr);

const foreachMap = arr.map(function (a, b, c) {
  // 데이터, 인덱스, 객체 전체
  //console.log(`a : ${a}, b : ${b}, c:${c}`);
  return a - 1;
});
console.log(arr);

console.log(
  `foreach로 return하면 ${foreachArr}, 
    map으로 return하면 ${foreachMap}`
);

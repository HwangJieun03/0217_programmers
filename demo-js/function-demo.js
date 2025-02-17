// 4개 모두 같은 함수

function sub1(x, y) {
  return x - y;
}

let sub2 = function (x, y) {
  return x - y;
};

const sub3 = (x, y) => {
  return x - y;
};

// 화살표 함수 (arrow function)
var sub4 = (x, y) => x - y;

console.log(sub1(7, 2));
console.log(sub2(7, 2));
console.log(sub3(7, 2));
console.log(sub4(7, 2));

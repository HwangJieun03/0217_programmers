if (true) {
  var num1 = 3; // 전역변수
  const num2 = 6; // 블록 {} 스코프 - 선언된 중괄호 밖에서 사용 불가 = 지역변수
  let num3 = 5; // 블록 {} 스코프

  //num2 = 10;    // const는 상수이기 때문에 한 번 초기화하면 변경 불가
  num3 = 18;      // let은 초기화 이후 값 변경 가능

  console.log(num1 + " X " + num2 + " = " + num3); // 이전 문법
  console.log(`${num1} X ${num2} = ${num3}`);  // 템플릿 문자열 
}

console.log(num1);
//console.log(num2);
//console.log(num3);

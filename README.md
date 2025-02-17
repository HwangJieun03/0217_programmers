### express 설치 
- npm i express
```
const express = require("express"); //외부 모듈 express를 요청해서 express 변수에 할당
const app = express(); // express를 호출해서 app 변수에 서버를 할당 
  
app.listen(포트번호);  //서버 셋팅 : 포트 번호 ____로 설정
```


### 객체란?
- 데이터를 하나씩 보내는 게 아니라, 덩어리로 보내는 것
### json이란? 
- javascript object notation : 자바스크립트 객체 모양
```
let person = {
  name : "jieun",
  age : 20
}
```

```
app.get("/bye", function (req, res) {
  res.json({
    say: "안녕히 가세요!",
  });
});
```

### req.params
- 경로에 지정된 매개변수 값을 포함하는 객체
- 경로에 매개변수가 있을 때, 해당 매개변수에 접근하기 위해 사용
```
app.get("/products/:n", function (req, res) {
  res.json({
    num: req.params.n,
  });
```

###parseInt
- 문자열을 숫자로 변환
```
app.get("/products/:n", function (req, res) {

  let number = parseInt(req.params.n) - 10;

  console.log(number); //숫자 "문자열숫자"

  res.json({
    num: number,
  });
});
```
### 자바스크립트 객체 비구조화 
- 객체는 변수 이름 그대로 사용
```
app.get("/watch", function (req, res) {
  // const q = req.query; //q = {v: __, t: __}

  const {v, t} = req.query
  console.log(v)
  console.log(t)

  res.json ({
    video : v,
    timeline : t
  })
});
```
### 자바스크립트 배열 비구조화
- 배열은 객체와는 상관없이 인덱스 값을 가지므로 순서대로 출력
```
const array = [1, 2, 3, 4, 5];
const [, num2, num3, , num5] = array;

console.log(num2);
console.log(num3);
console.log(num5);
```
### 자바스크립트 네이밍 룰
- kebab-case cf.snake_case
  - 알파벳 소문자, 두 개 이상의 단어를 합쳐서 쓸 땐, 첫번째 단어와 두번째 단어 사이에 하이픈
- camelCase
  - 변수, 함수 이름 작성할 때 사용
  - 두 개 이상의 단어를 합쳐서 쓸 땐, 두번째 단어의 첫 글자를 대문자로 작성
- PascalCase
  - 클래스명 작성할 때 사용
### 자바스크립트 Map 
- Map : key-value 쌍으로 이루어진 데이터 저장 형태
- map에서는 문자열과 숫자를 구분

### 자바스크립트 함수 4가지 종류
```
function add1(x, y) {
  return x + y;
}

let add2 = function (x, y) {
  return x + y;
};

const add3 = (x, y) => {
  return x + y;
};

// 화살표 함수 (arrow function)
var add4 = (x, y) => x + y;
```
### post는 웹브라우저로 테스트 안됨!! postman으로 확인
- post는 데이터 본문 (body)에 포함해 전송하므로, URL에 데이터를 노출시키지 않는다!
- 전체 조회할 때 오류가 난다면? 복사, 붙여넣기 문제!!!

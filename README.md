## 02/17
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

## 02/18
### forEach vs map
- forEach
  - 반복 작업 수행하며, 각 요소에 대해 콜백 함수 호출
  - return 값은 무시
- map
  - 각 요소에 대해 콜백 함수 실행한 후, 그 결과로 새로운 배열 반환
  - 반환된 값은 새로운 배열에 저장

### 리팩토링; 수정 후 추가
1. 에러가 n번 발견됐을 때 리팩토링
2. 기능을 추가하기 전 리팩토링
3. 코드 리뷰할 때 리팩토링
4. 리팩토링 하면서 에러 발견
- 배포, 운영 직전에는 절대 리팩토링 X

### HTTP 상태 코드
- 200 OK : 클라이언트 요청 성공적으로 처리 (조회 성공)
- 201 Creatted : 클라이언트 요청 성공적 처리, 그 결과로 새로운 리소스 생성 (등록 성공)
- 400 Bad request : 클라이언트가 보낸 요청이 잘못됨.
- 403 Forbidden : 클라이언트가 요청한 리소스에 대한 접근 금지 
- 404 Not Found : 클라이언트가 요청한 리소스를 서버에서 찾을 수 없음.
- 500 Internal Server Error : 서버 내부에서 예기치 않은 오류가 발생하여 요청을 처리할 수 없음.

### PUT 예외처리 에러 발생
- youtuber가 undefined일 때 youtuber.channelTitle에 접근하려고 하기 때문에 에러가 발생함.
```
// 예외 처리
  var youtuber = db.get(id);
  var oldTitle = youtuber.channelTitle;

  if (youtuber == undefined) {
    res.json({
      message: `요청하신 ${id}번은 존재하지 않는 유튜버입니다.`,
    });
  } else {
    var newTitle = req.body.channelTitle;

    youtuber.channelTitle = newTitle;
    db.set(id, youtuber);

    res.json({
      message: `${oldTitle}님, 채널명이 ${newTitle}로 변경되었습니다.`,
    });
  }
```
- youtuber가 undefined인지 확인하고, oldTitle 설정 부분을 else 블록 안으로 옮겨서 youtuber가 undefined가 아닐 때만 channelTitle 프로퍼티에 접근하도록 수정했더니 에러 해결!
```
// 예외 처리
  var youtuber = db.get(id);

  if (youtuber == undefined) {
    res.json({
      message: `요청하신 ${id}번은 존재하지 않는 유튜버입니다.`,
    });
  } else {
  // else 블록 안으로옮겨서 youtuber가 undefined가 아닐때만 
  // channelTitle 프로퍼티에 접근하도록 함.
    var oldTitle = youtuber.channelTitle; 
    var newTitle = req.body.channelTitle;

    youtuber.channelTitle = newTitle;
    db.set(id, youtuber);

    res.json({
      message: `${oldTitle}님, 채널명이 ${newTitle}로 변경되었습니다.`,
    });
  }
```
## 02/19
### 핸들러란?
- HTTP request가 날아오면 자동으로 호출되는 메소드
- 이벤트 핸들러 : 프로그램에서 특정 이벤트가 발생했을 때 처리하는 역할
- 요청 핸들러 : 서버에서 클라이언트의 요청을 처리하는 역할 (HTTP 요청)
- 예외 핸들러 : 코드 실행 중 발생할 수 있는 예외나 오류 처리하는 역할
### json array
- 여러 개의 값을 순서대로 나열한 자료 구조
- 인덱스를 기반으로 값을 조회
  ```
  app.get("/colors/:id", (req, res) => {
  let id = req.params.id;
  let color = colors[id];

  res.json(color);
});
```
- forEach나 find()로 id 비교
```
// forEach
app.get("/colors/:id", (req, res) => {
  let id = req.params.id;
  var findColor = "";

  colors.forEach(function (color) {
    if (color.id == id) {  // colors 배열에서 각 색깔의 id와 요청받은 id 비교
      findColor = color;
    }
  });
  res.json(findColor);
});

// find 함수 : colors 배열 안에 있는 객체 중, id 값이 params.id와 같은 객체
app.get("/colors/:id", (req, res) => {
  let id = req.params.id;
  var findColor = colors.find((f) => f.id == id);
  res.json(findColor);
});
'''
### 예외 처리
- HTTP status 코드로 예외 처리
```
// 예외 처리
  if (findColor) {
    res.json(findColor);
  } else {
    // 예외를 터뜨린다; http status code를 실패로 안내
    res.status(404).send("요청하신 id로 저장된 색깔이 없습니다.");
  }
```
### '==' vs '==='
- '==' : 자료형은 상관 없이, 값만 비교
- '===' : 자료형, 값 모두 비교
### map은 undefined가 아니다.
- Map 객체가 생성된 후 그 자체로는 유효한 객체
- 객체에 값이 없으면 0을 반환
### HTTP 상태 코드 정리
- **2**** : 성공
    - 조회/수정/삭제 성공 : **200**
    - 등록 성공 : **201**
- **4**** : 클라이언트 오류
    - 요청한 연산(처리)을 할 때 필요한 데이터 (req)가 덜 왔을 때 : **400**
    - 찾는 페이지(리소스) 없음 (URL에 맞는 api가 없음) : **404**
- **5**** : 서버 오류
    - 서버가 죽었을 때 (서버가 크리티컬한 오류를 맞았을 때) : **500**

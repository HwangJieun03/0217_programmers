const express = require("express"); //외부 모듈 express 요청해서 express 변수에 담음.
const app = express(); // express 호출해서 app 변수에 서버 담음.

// 서버 셋팅 : 포트 번호 1235로 설정
app.listen(1235);

// GET + "/"
app.get("/", function (req, res) {
  //조회
  // "/"는 'http://localhost:1235/'
  res.send("Hello World"); //콜백함수
});

let nodejsBook = {
  title: "Node.js를 공부해보자",
  price: 20000,
  description: "이 책 좋음. 왜? 황지은 지음.",
};

app.get("/products/1", function (req, res) {
  res.json(nodejsBook);
});


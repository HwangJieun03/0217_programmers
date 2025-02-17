const express = require("express"); //외부 모듈 express 요청해서 express 변수에 담음.
const app = express(); // express 호출해서 app 변수에 서버 담음.

// 서버 셋팅 : 포트 번호 1235로 설정
app.listen(1235); //포트번호 1235

// API 테스트

// API : GET + "http://localhost:1235/test"
// "TEST SUCCESS"
app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});

// API : GET + "http://localhost:1235/test/1"
// "One!!"
app.get("/test/1", function (req, res) {
  res.send("First Test!!");
});

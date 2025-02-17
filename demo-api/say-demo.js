const express = require("express"); //외부 모듈 express 요청해서 express 변수에 담음.
const app = express(); // express 호출해서 app 변수에 서버 담음.

// 서버 셋팅 : 포트 번호 1235로 설정
app.listen(1235); //포트번호 1235

// GET + /hello, /bye, /nicetomeetyou
app.get("/hello", function (req, res) {
  //   res.send("안녕!");
  //res.send({
  res.json({
    say: "안녕!",
  });
});

app.get("/bye", function (req, res) {
  res.json({
    say: "잘가!",
  });
});

// GET 메소드로, '/nicetomeetyou' 이 날아오면
// 매개변수로 전달받은 콜백 함수를 호출하겠어. => 서버에 셋팅
app.get("/nicetomeetyou", function (req, res) {
  res.json({
    say: "만나서 반가워!",
  });
});

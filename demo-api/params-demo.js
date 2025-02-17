const express = require("express"); //외부 모듈 express 요청해서 express 변수에 담음.
const app = express(); // express 호출해서 app 변수에 서버 담음.

// 서버 셋팅 : 포트 번호 1234로 설정
app.listen(1235);

app.get("/products/:n", function (req, res) {
  // : => URL로 매개변수를 전달
  // req.params
  // products/__ 빈칸에 오는 값을 n이라는 변수에 담아줘!

  let number = parseInt(req.params.n) - 10;

  console.log(number); //숫자 "문자열숫자"

  res.json({
    num: number,
  });
});


// 영상 클릭 주소 : https://www.youtube.com/watch?v=4LavJQ9PLZ8
// 영상 타임라인 주소 : https://www.youtube.com/watch?v=3wiWjQDNFY4&t=479s
// 쿼리 스트링
app.get("/watch", function (req, res) {
  // const q = req.query; //q = {v: __, t: __}
  // console.log(q.v);
  // console.log(q.t);

  // JS 객체 (JSON)의 비구조화
  const {v, t} = req.query
  console.log(v)
  console.log(t)

  res.json ({
    video : v,
    timeline : t
  })
});

// app.get("/products/1", function (req, res) {
//   res.json({
//     num: 1,
//   });
// });

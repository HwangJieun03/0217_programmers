const express = require("express");
const app = express();

app.listen(1235);

// 채널 주소 : https://www.youtube.com/@_deep
// 채널 주소 : https://www.youtube.com/@shortbox
// 채널 주소 : https://www.youtube.com/@Choosunghoon_ajossi

let youtuber1 = {
  channelTitle: "띱",
  sub: "169만명",
  videoNum: "250개",
};
let youtuber2 = {
  channelTitle: "숏박스",
  sub: "323만명",
  videoNum: "179개",
};
let youtuber3 = {
  channelTitle: "추성훈",
  sub: "116만명",
  videoNum: "60개",
};

app.get("/:nickname", function (req, res) {
  const { nickname } = req.params; //비구조화

  if (nickname == "@_deep") {
    res.json(youtuber1);
  } else if (nickname == "@shortbox") {
    res.json(youtuber2);
  } else if (nickname == "@Choosunghoon_ajossi") {
    res.json(youtuber3);
  } else {
    res.json({
      message: "저희가 모르는 유튜버입니다.",
    });
  }
  // 개발자가 예상하지 못한 에러 = 예외가 발생했다!  -> 예외 처리
});

// app.get("/:nickname", function (req, res) {
//   //   const param = req.params; //변수
//   const { nickname } = req.params; //비구조화
//   res.json({
//     channel: nickname,
//     //channel: param.nickname,
//   });
// });

// express 모듈 셋팅
const express = require("express");
const app = express();

app.listen(1235);

app.get("/", function (req, res) {
  //1. 잘 동작하는지 확인하기
  res.send("Hello World");
});

//데이터 셋팅
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

let db = new Map(); // key - value = json
//let id = 1; 함수스코프에 걸림!!
var id = 1;

db.set(id++, youtuber1);
db.set(id++, youtuber2);
db.set(id++, youtuber3);

// console.log(db);
// console.log(db.get(1));
// console.log(db.get(2));
// console.log(db.get(3));

// REST API 설계
app.get("/youtubers", (req, res) => {
  res.json({ message: "test" });
});

app.get("/youtuber/:id", function (req, res) {
  let { id } = req.params;
  //console.log(id); // id 잘 찍히는지 확인하기
  id = parseInt(id); // "숫자" => 숫자

  // 예외 처리
  const youtuber = db.get(id);
  if (youtuber == undefined) {
    //undefined는 문자열이 아니다!
    res.json({
      message: "존재하지 않는 유튜버입니다.",
    });
  } else {
    res.json(youtuber);
  }
});

app.use(express.json()); // http 외 모듈인 '미들웨어' : json 설정
app.post("/youtuber", (req, res) => {
  console.log(req.body);

  // 등록? Map(db)에 저장(set) 해야 한다!
  db.set(id++, req.body);

  res.json({
    //message: db.get(4).channelTitle + "님, 유튜브 채널 개설을 축하드립니다!",
    message: `${
      db.get(id - 1).channelTitle
    }님, 유튜브 채널 개설을 축하드립니다!`,
  });
});

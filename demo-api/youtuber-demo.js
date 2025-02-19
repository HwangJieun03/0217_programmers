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

// 전체 조회
app.get("/youtubers", (req, res) => {
  // 내가 찾은 방법
  // const values = [];
  // db.forEach(function (youtuber) {
  //   console.log(youtuber);
  //   values.push(youtuber);
  // });
  // res.json(values);

  // 강사님 버전
  var youtubers = {};
  console.log(db);
  if (db.size !== 0) {
    db.forEach(function (value, key) {
      youtubers[key] = value;
    });

    res.json(youtubers);
  } else {
    res.status(404).json({
      message: "조회할 유튜버가 없습니다.",
    });
  }
});

// 개별 유튜버 조회
app.get("/youtubers/:id", function (req, res) {
  let { id } = req.params;
  //console.log(id); // id 잘 찍히는지 확인하기
  id = parseInt(id); // "숫자" => 숫자

  // 예외 처리
  const youtuber = db.get(id);
  if (youtuber == undefined) {
    res.status(404).json({
      message: "존재하지 않는 유튜버입니다.",
    });
  } else {
    res.json(youtuber);
  }
});

// 유튜버 등록
app.use(express.json()); // http 외 모듈인 '미들웨어' : json 설정
app.post("/youtubers", (req, res) => {
  const channelTitle = req.body.channelTitle;
  // 예외 처리
  if (channelTitle) {
    // 등록? Map(db)에 저장(set) 해야 한다!
    db.set(id++, req.body);

    res.status(201).json({
      //message: db.get(4).channelTitle + "님, 유튜브 채널 개설을 축하드립니다!",
      message: `${
        db.get(id - 1).channelTitle
      }님, 유튜브 채널 개설을 축하드립니다!`,
    });
  } else {
    res.status(400).json({
      message: "요청 값이 잘못되었습니다.",
    });
  }
});

// 개별 유튜버 삭제
app.delete("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id); // "숫자" => 숫자

  // 예외 처리
  var youtuber = db.get(id);
  if (youtuber) {
    const channelTitle = youtuber.channelTitle;
    db.delete(id);
    res.json({
      message: `${channelTitle}님, 아쉽지만 앞으로의 여정도 응원하겠습니다!`,
    });
  } else {
    res.status(404).json({
      message: `요청하신 ${id}번은 존재하지 않는 유튜버입니다.`,
    });
  }
  // if (youtuber == undefined) {
  //   res.json({
  //     message: `요청하신 ${id}번은 존재하지 않는 유튜버입니다.`,
  //   });
  // } else {
  //   const channelTitle = youtuber.channelTitle;
  //   db.delete(id);
  //   res.json({
  //     message: `${channelTitle}님, 아쉽지만 앞으로의 여정도 응원하겠습니다!`,
  //   });
  // }
});

// 전체 유튜버 삭제
app.delete("/youtubers", (req, res) => {
  var msg = "";
  // db에 값이 1개 이상이면 전체 삭제
  if (db.size >= 1) {
    db.clear();

    res.json({
      message: "유튜버가 모두 삭제되었습니다.",
    });

    // 값이 없으면, "삭제할 유튜버가 없습니다."
  } else {
    res.status(404).json({
      message: "삭제할 유튜버가 없습니다.",
    });
  }
});

// 개별 유튜버 수정
app.put("/youtubers/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id); // "숫자" => 숫자
  //var oldTitle = youtuber.channelTitle; // 예외처리에 에러 발생!!! 위치 변경경

  // 예외 처리
  var youtuber = db.get(id);

  if (youtuber == undefined) {
    res.status(404).json({
      message: `요청하신 ${id}번은 존재하지 않는 유튜버입니다.`,
    });
  } else {
    var oldTitle = youtuber.channelTitle; // else 블록 안으로옮겨서 youtuber가 undefined가 아닐때만 channelTitle 프로퍼티에 접근하도록 함.
    var newTitle = req.body.channelTitle;

    youtuber.channelTitle = newTitle;
    db.set(id, youtuber);

    res.json({
      message: `${oldTitle}님, 채널명이 ${newTitle}로 변경되었습니다.`,
    });
  }
});

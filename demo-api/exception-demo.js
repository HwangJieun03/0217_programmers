const express = require("express");
const app = express();

app.listen(1235);

const colors = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 3, name: "green" },
  { id: 4, name: "purple" },
];

// 색깔 전체 조회
app.get("/colors", (req, res) => {
  res.json(colors); // json array
});

// 색깔 개별 조회
app.get("/colors/:id", (req, res) => {
  let id = req.params.id;
  //let color = colors[id - 1];

  //find 함수 : colors 배열 안에 있는 객체 중, id 값이 params.id와 같은 객체
  var findColor = colors.find((f) => f.id == id);

  // 예외 처리
  if (findColor) {
    res.json(findColor);
  } else {
    // http status code를 실패로 안내
    res.status(404).send("요청하신 id로 저장된 색깔이 없습니다.");
  }
  //   colors.forEach(function (color) {
  //     if (color.id == id) {
  //       // colors 배열에서 각 색깔의 id와 요청받은 id 비교
  //       findColor = color;
  //     }
  //   });
});

const express = require("express");
const app = express();
app.listen(1235);

// localhost:1234/1 => NoteBook
// localhost:1234/2 => Phone
// localhost:1234/3 => Tablet

app.get("/:id", function (req, res) {
  let { id } = req.params;
  //console.log(id);
  id = parseInt(id); // "숫자" => 숫자
  console.log(db.get(id));

  if (db.get(id) == undefined) {
    //undefined는 문자열이 아니다!
    res.json({
      message: "존재하지 않는 상품입니다.",
    });
  } else {
    product = db.get(id);
    product["id"] = id; //product.id = id;
    res.json(product);
  }
});

// map을 db처럼 사용
let db = new Map();

let notebook = {
  productName: "NoteBook",
  productPrice: 2000000,
};
let phone = {
  productName: "Phone",
  productPrice: 3000000,
};
let tablet = {
  productName: "Tablet",
  productPrice: 1000000,
};
let watch = {
  productName: "Watch",
  productPrice: 20000,
};

// key로 value를 찾을 수 있는 한 쌍을 저장
db.set(1, notebook);
db.set(2, phone);
db.set(3, tablet);
db.set(4, watch);

console.log(db);
console.log(db.get(1));
console.log(db.get(2));
console.log(db.get(3));
console.log(db.get(4));

//console.log(db.get("1"));

let http = require("http"); // 내장 모듈

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("Hello, Node.js");
  response.end();
}

http.createServer(onRequest).listen(8888);
// http 모듈에 createServer 함수에서 할 일을 다 한 다음
// onRequest 콜백 함수를 실행시켜달라고 매개변수로 던진 것!!

import http from "http";

// const server = http.createServer((req,res)=>{
// 	res.statusCode = 200;
// 	res.setHeader("Content-Type","text/plain;charset=utf-8");
// 	res.end("node is running.");
// });

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    res.end(JSON.stringify({ message: "asdasdasd" }));
  } else if (req.url === "/something") {
  } else {
    res.writeHead(404);
    res.end("not found");
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000.");
});

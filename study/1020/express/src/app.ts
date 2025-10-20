import express from "express";
import router from "./routes/postRoutes";

// 익스프레스 서버 인스턴스 생성
const app = express();

// 미들웨어 등록
app.use(express.json());
app.use("/api/v1/posts", router);

// 서버실행
app.listen(3000, () => {
  console.log("server is running on port 3000.");
});

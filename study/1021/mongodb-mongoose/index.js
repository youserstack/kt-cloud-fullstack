import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRoutes from "./routes/post-routes.js";

// 환경변수, 데이터베이스연결
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

// 미들웨어등록
app.use(express.json());
app.use("/api/v1/posts", postRoutes);

// 서버실행
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;

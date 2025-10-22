import express from "express";
import env from "dotenv";
import handlebars from "express-handlebars";
import path, { extname } from "path";
import { fileURLToPath } from "url";
import connectDB from "./src/config/db.js";
import { MongoClient } from "mongodb";
import { postService } from "./src/services/post-service.js";

// 환경설정
env.config();
// connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8080;

// 뷰엔진으로 handlebars를 설정
app.engine(
  "hbs",
  handlebars.create({
    extname: ".hbs", // 확장자를 handlebars -> hbs 로 변경
    helpers: {
      lengthOfList: (list) => list.length,
      eq: (v1, v2) => v1 === v2,
      dateString: (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
    },
  }).engine
); // 뷰엔진 설정
app.set("view engine", "hbs"); // 사용할 뷰엔진을 handlebars로 지정합니다.
app.set("views", path.join(__dirname, "src", "views"));

// 미들웨어 등록
// 정적 파일(css, js, 이미지 등)을 제공하기 위한 미들웨어입니다. 'public' 폴더를 사용합니다.
app.use(express.static(path.join(__dirname, "public")));
// JSON 형태의 요청 본문을 파싱하기 위한 미들웨어입니다.
app.use(express.json());
// URL-encoded 형태의 요청 본문을 파싱하기 위한 미들웨어입니다.
app.use(express.urlencoded({ extended: true }));

// 페이지라우팅
app.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const search = req.query.search || "";
  const [posts, paginator] = await postService.getPosts(
    collection,
    page,
    search
  );
  // index.handlebars 템플릿을 렌더링하며 필요한 데이터를 전달합니다.
  res.render("index", { title: "게시판 홈페이지", search, paginator, posts });
});
app.get("/write", (req, res) => {
  res.render("write", { title: "게시글" });
});
app.get("/detail/:id", async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(collection, id);
  res.render("detail", { title: "게시글 상세", post });
});

// api라우팅
app.post("/api/v1/write", async (req, res) => {
  const post = req.body;
  console.log(post);
  const result = await postService.creatPost(collection, post);
  res.redirect(`/detail/${result.insertedId}`);
});

// 서버실행
let collection; // MongoDB 컬렉션 객체를 저장할 변수입니다.
app.listen(PORT, async () => {
  console.log(`${PORT} 포트에서 서버실행중`);
  // MongoDB에 연결합니다.
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  // 'posts' 컬렉션을 가져와 collection 변수에 할당합니다.
  collection = client.db().collection("posts");
  // console.log({ collection });
});

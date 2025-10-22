import { ObjectId } from "mongodb";
import { pagination } from "../utils/pagination.js";

// 게시글 생성
async function creatPost(collection, post) {
  // 조회수와 생성일자를 추가합니다.
  post.hits = 0;
  post.createdAt = new Date().toISOString();
  // 데이터베이스에 게시글을 추가하고 결과를 반환합니다.
  return await collection.insertOne(post);
}

// 게시글 조회
async function getPosts(collection, page, search) {
  // 한 페이지에 보여줄 게시글 수입니다.
  const perPage = 10;
  // 검색어를 이용한 쿼리 객체를 생성합니다. 'i' 옵션은 대소문자를 구분하지 않도록 합니다.
  const query = { title: new RegExp(search, "i") };
  // 데이터베이스에서 게시글을 조회합니다.
  const cursor = collection
    // 쿼리와 함께 페이지네이션 옵션(limit, skip)을 적용합니다.
    .find(query, { limit: perPage, skip: (page - 1) * perPage })
    // 생성일자 내림차순으로 정렬합니다.
    .sort({ createdAt: -1 });

  // 검색 조건에 맞는 전체 게시글 수를 가져옵니다.
  const totalCount = await collection.count(query);
  // 커서의 결과를 배열로 변환하여 게시글 목록을 가져옵니다.
  const posts = await cursor.toArray();
  // 페이지네이션 정보를 계산합니다.
  const paginator = pagination({ page, perPage, totalCount });

  // 게시글 목록과 페이지네이션 정보를 배열로 묶어 반환합니다.
  return [posts, paginator];
}

// 게시글 상세 조회
async function getPostById(collection, id) {
  // id를 ObjectId로 변환합니다.
  // 조회수를 1 증가시키고 게시글 데이터를 가져옵니다.
  // findOneAndUpdate는 아토믹(atomic) 연산이므로 여러 요청이 동시에 들어와도 데이터 정합성을 보장합니다.
  const post = await collection.findOneAndUpdate(
    { _id: ObjectId.createFromHexString(id) },
    { $inc: { hits: 1 } },
    { returnDocument: "after" }
  );
  return post;
}

export const postService = { creatPost, getPosts, getPostById };

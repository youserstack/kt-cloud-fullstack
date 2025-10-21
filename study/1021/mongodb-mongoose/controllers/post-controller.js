import Post from "../models/post.js";

export const getPosts = async (_, res, next) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    console.log("전체 게시글 조회", { posts });
    res.json({ success: true, data: posts });
  } catch (error) {
    next(error);
  }
};

export const getPostById = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.json({ success: false, message: "post not found" });
    } else {
      console.log("특정 게시글 조회", { post });
      res.json({ success: true, data: post });
    }
  } catch (error) {
    next(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    const newPost = await Post.create({ title, content, author });
    console.log("게시글 생성", { newPost });
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    const postId = parseInt(req.params.id);
    const post = await Post.findByIdAndUpdate(
      postId,
      { title, content, author },
      { new: true, runValidators: true }
    );
    console.log("게시글 수정", { post });
    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndDelete(postId);
    console.log("게시글 삭제", { post });
    res.json({ success: true, data: post });
  } catch (error) {
    next(error);
  }
};

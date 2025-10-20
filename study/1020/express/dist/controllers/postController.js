"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getPosts = void 0;
// dummy data
let posts = [
    { id: 1, title: "title1", content: "content1" },
    { id: 2, title: "title2", content: "content2" },
    { id: 3, title: "title3", content: "content3" },
    { id: 4, title: "title4", content: "content4" },
];
// 전체게시글조회
const getPosts = (req, res) => {
    res.json({ success: true, data: posts });
};
exports.getPosts = getPosts;
// 특정게시글조회
const getPostById = (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find((post) => post.id === postId);
    if (!post) {
        return res.status(404).json({ success: false, message: "post not found" });
    }
    else {
        res.json({ success: true, data: post });
    }
};
exports.getPostById = getPostById;
const createPost = (req, res) => {
    const { title, content } = req.body;
    // const newPost = { id: uuid, title, content };
    const newPost = { id: posts.length + 1, title, content };
    posts.push(newPost);
    res.status(201).json({ success: true, data: newPost });
};
exports.createPost = createPost;
const updatePost = (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ success: false, message: "post not found" });
    }
    const updatedPost = { ...posts[postIndex], title, content };
    posts[postIndex] = updatedPost;
    res.json({ success: true, data: updatedPost });
};
exports.updatePost = updatePost;
const deletePost = (req, res) => {
    const postId = parseInt(req.params.id);
    posts = posts.filter((post) => post.id !== postId);
    res.json({ success: true, message: "post deleted" });
};
exports.deletePost = deletePost;

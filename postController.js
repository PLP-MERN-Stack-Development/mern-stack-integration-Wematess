// server/controllers/postController.js
import Post from '../models/post.js';
import expressAsyncHandler from 'express-async-handler';
// Joi/express-validator validation logic would go here before controller function body

// @desc    Get all posts
// @route   GET /api/posts
// @access  Public
const getPosts = expressAsyncHandler(async (req, res) => {
  // Simple fetch, pagination logic for Task 5 would modify this
  const posts = await Post.find({}).populate('category', 'name');
  res.json(posts);
});

// @desc    Get single post
// @route   GET /api/posts/:id
// @access  Public
const getPostById = expressAsyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id).populate('category', 'name');
  
  if (post) {
    res.json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// ... Add createPost, updatePost, deletePost similarly ...
// createPost would involve destructuring title, content, category from req.body
// and creating a new Post document.

export { getPosts, getPostById };
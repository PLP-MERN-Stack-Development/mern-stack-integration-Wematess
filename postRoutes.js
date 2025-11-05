// server/routes/postRoutes.js
import express from 'express';
const router = express.Router();
import {
  getPosts,
  getPostById,
  // createPost,
  // updatePost,
  // deletePost,
} from '../controllers/postController.js';

router.route('/').get(getPosts).post(/* [validatePost], */ /* createPost */);
router
  .route('/:id')
  .get(getPostById)
  // .put(/* [validatePost], */ /* updatePost */)
  // .delete(deletePost);

export default router;
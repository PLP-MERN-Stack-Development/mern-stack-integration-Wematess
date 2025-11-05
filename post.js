// server/models/Post.js
import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', // Reference to Category model
      required: true,
    },
    // imageUrl: { type: String }, // For Task 5
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
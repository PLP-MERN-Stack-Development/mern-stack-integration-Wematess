// client/src/api/postService.js
import axios from 'axios';

const API_URL = '/api/posts'; // Vite proxy handles routing to localhost:5000

// Set base URL if not using proxy (less ideal for MERN dev setup)
// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const getAllPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getPostById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData);
  return response.data;
};

// ... Add updatePost and deletePost similarly ...

const postService = {
  getAllPosts,
  getPostById,
  createPost,
};

export default postService;
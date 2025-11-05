// client/src/pages/PostList.jsx
import React, { useEffect } from 'react';
import useApi from '../hooks/useApi';
import postService from '../api/postService';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard'; // Assume simple card component

function PostList() {
  const { data: posts, loading, error, execute } = useApi(postService.getAllPosts);

  useEffect(() => {
    execute();
  }, [execute]);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error loading posts: {error}</div>;

  return (
    <div>
      <h2>Blog Posts</h2>
      <Link to="/create" className="button">
        Create New Post
      </Link>
      <div className="post-list-container">
        {posts && posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
        {posts && posts.length === 0 && <p>No posts found.</p>}
      </div>
    </div>
  );
}

export default PostList;
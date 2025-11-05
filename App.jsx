// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './pages/postList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm />} />
          {/* Protected routes for Task 5 would be wrapped here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
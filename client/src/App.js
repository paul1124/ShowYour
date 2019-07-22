import React from 'react';
import PostList from './components/PostList/postlist';
import AddPost from './components/AddPost/addpost';
import './App.css';

function App() {
  return (
    <div className="App">
      <PostList />
      <AddPost />
    </div>
  );
}

export default App;

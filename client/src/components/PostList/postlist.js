import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './postlist.scss';


export default function PostList() {
  const [ postlist, setPostlist ] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posts/')
      .then(res => {
        if(res.data.length > 0) {
          setPostlist(res.data.map(post => post));
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="postlist">
      {postlist.map(post => {
        return (
          <div className="post" key={post._id}>
            <h2>{post.title}</h2>
            <h4>{post.postType}</h4>
            <p>{post.creator}</p>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <button onClick={() => onDelete(post._id)}>Delete</button>
          </div>
      )})}
    </div>
  )
  function onDelete(id) {
    axios.delete('http://localhost:5000/posts/' + id)
      .then(res => console.log(res.data));
    setPostlist(postlist.filter(post => post._id !== id));
  }
}
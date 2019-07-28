import React, { useState } from 'react';
import axios from 'axios';

import './addpost.scss';

export default function AddPost() {
  const [ title, setTitle ] = useState('');
  const [ postType, setPostType ] = useState('social');
  const [ creator, setCreator ] = useState('');
  const [ content, setContent ] = useState('');
  const [ date, setDate ] = useState(new Date());

  return (
    <div className="addpost">
      <form className="addpost-form" onSubmit={addPost}>
        <label>Title</label>
        <input type="text" required onChange={onChangeTitle} />
        <label>Post Type</label>
        <select value="social" onChange={onChangePostType}>
          <option value="Social">Social</option>
          <option value="Buy/Sell">Buy/Sell</option>
          <option value="Etc.">etc</option>
        </select>
        <label>Creator</label>
        <input type="text" required onChange={onChangeCreator} />
        <label>Content</label>
        <textarea onChange={onChangeContent} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  function onChangePostType(e) {
    setPostType(e.target.value);
  }
  function onChangeCreator(e) {
    setCreator(e.target.value);
  }
  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function addPost(e) {
    e.preventDefault();

    const post = {
      title,
      postType,
      creator,
      content,
      date
    }
    console.log(post);

    axios.post('http://localhost:5000/posts/add', post)
      .then(res => console.log(res.data));

    window.location = '/';
  }
}
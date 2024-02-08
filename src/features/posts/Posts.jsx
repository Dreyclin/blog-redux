import React from "react";
import { useSelector } from "react-redux";


export default function Posts() {

  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <div className="post">
      <h2 className="postTitle">{post.title}</h2>
      <p className="postContent">{post.content}</p>
      <p className="postAuthor">by Unknown Author</p>
    </div>
  ))

  return (
    <div>
      {renderedPosts}
    </div>
  )
}
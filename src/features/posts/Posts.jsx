import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import Emojis from "./Emojis";

export default function Posts(props) {

  const posts = useSelector(state => state.posts);

  const renderedPosts = posts.map(post => (
    <div className="post">
      <h2 className="postTitle">{post.title}</h2>
      <p className="postContent">{post.content}</p>
      <PostAuthor userId={post.userId}/>
      <Emojis />
    </div>
  ))

  return (
    <div>
      {renderedPosts}
    </div>
  )
}
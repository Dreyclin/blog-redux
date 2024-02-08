import React from "react";

export default function Post(props) {
    return(
        <div className="post">
        <h2 className="postTitle">{props.title}</h2>
        <p className="postContent">{props.content}</p>
        <p className="postAuthor">by Unknown Author</p>
      </div>
    )
}
import React from "react";
import { useSelector } from "react-redux";

export default function PostAuthor(props) {
    
    const users = useSelector(state => state.users);

    const author = users.find(user => user.id === props.userId)

    console.log(props.userId);

    return (
       <span>by {author ? author.name : "Unknow author"}</span>
    )
}
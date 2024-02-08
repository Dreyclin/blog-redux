import React from "react";
import FormGroup from "./FormGroup";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

export default function Form() {

  const dispatch = useDispatch();
  const [fullPost, setFullPost] = useState({});
  const {Title, Content} = fullPost;

  function handleChanging(e) {
    const {value, name} = e.target;

    setFullPost(prevValue => {
      return {...prevValue, [name]: value}
    })
  }

  const savePost = () => {
    dispatch(addPost(
      Title,
      Content
    ))

    setFullPost({Title: "", Content: ""});
  }

  return (
    <div className="inputForm w-50 m-auto p-4 border border-dark rounded">
      <form>
        <FormGroup title="Title" setPost={handleChanging} value={Title}/>
        <FormGroup title="Content" setPost={handleChanging} value={Content}/>
      </form>
      <button className="btn btn-primary" onClick={savePost}>Submit</button>
    </div>
  )
}
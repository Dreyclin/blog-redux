import React from "react";

export default function FormGroup(props) {
    return(
        <div className="form-group pb-3">
        <label htmlFor={"blog" + props.title}>{props.title}</label>
        <input type="text" value={props.value} name={props.title} className="form-control" id={"blog" + props.title} placeholder={props.title} onChange={props.setPost}/>
      </div>
    )
}
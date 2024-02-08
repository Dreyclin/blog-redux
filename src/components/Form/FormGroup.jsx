import React from "react";

export default function FormGroup(props) {
    return(
        <div className="form-group pb-3">
        <label for={"blog" + props.title}>{props.title}</label>
        <input type="text" class="form-control" id={"blog" + props.title} placeholder={props.title} />
      </div>
    )
}
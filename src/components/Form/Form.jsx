import React from "react";
import FormGroup from "./FormGroup";

export default function Form() {
  return (
    <div className="inputForm w-50 m-auto p-4 border border-dark rounded">
      <form>
        <FormGroup title="Title" />
        <FormGroup title="Content" />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
import React from "react";
import { useDispatch } from "react-redux";

function Tag({ tag }) {
  const dispatch = useDispatch();
  const checkTag = (event) => {
    event.target.checked
      ? dispatch({ type: "ADD_TAG", payload: event.target.id })
      : dispatch({ type: "REMOVE_TAG", payload: event.target.id });
  };
  return (
    <div className="tag__wrapper">
      <input
        type={"checkbox"}
        name={tag}
        id={tag}
        className="tags__input"
        onClick={(event) => checkTag(event)}
      />
      <label htmlFor={tag} className="tags__item ">
        {tag}
      </label>
    </div>
  );
}

export default Tag;

import React from "react";
import { useDispatch } from "react-redux";
import {
  addTag,
  removeTag,
  setTagToParams,
  removeTagFromParams,
} from "../store/actions";
import constants from "./constants";

function Tag({ tag }) {
  const dispatch = useDispatch();
  const checkTag = (event) => {
    constants.isLoading = true;
    if (event.target.checked) {
      dispatch(addTag(event.target.id));
      dispatch(setTagToParams(event.target.id));
    } else {
      dispatch(removeTag(event.target.id));
      dispatch(removeTagFromParams(event.target.id));
    }
  };
  return (
    <div className="tag">
      <input
        type={"checkbox"}
        name={tag}
        id={tag}
        className="tag__input"
        onClick={(event) => checkTag(event)}
      />
      <label htmlFor={tag} className="tag__label ">
        #{tag.toLowerCase()}
      </label>
    </div>
  );
}

export default Tag;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag, removeTag } from "../store/actions";
import { asyncGetProdutcsByTag } from "../store/actions";

function Tag({ tag }) {
  const dispatch = useDispatch();

  const selectedTags = useSelector((state) => state.selectedTagsReducer.tags);
  const checkTag = (event) => {
    if (event.target.checked) {
      dispatch(addTag(event.target.id));
    } else {
      dispatch(removeTag(event.target.id));
    }

    // dispatch(asyncGetProdutcsByTag(selectedTags));
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

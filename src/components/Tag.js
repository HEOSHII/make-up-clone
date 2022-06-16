import React from "react";

function Tag({ tag }) {
  const checkTag = (event) => {
    console.log(event.target.id);
    console.log(event.target.checked);
  };
  return (
    <div className="tag__wrapper">
      <input
        type={"checkbox"}
        name={tag}
        id={tag}
        className="tags__input"
        onClick={checkTag}
      />
      <label htmlFor={tag} className="tags__item ">
        {tag}
      </label>
    </div>
  );
}

export default Tag;

import React from "react";
import constants from "./constants";
import Tag from "./Tag";

function TagsList() {
  return (
    <div className="tags container">
      <h3 className="tags__title">#tags</h3>
      <div className="tags__wrapper">
        {constants.tags.map((tag, index) => {
          return <Tag tag={tag} key={index} />;
        })}
      </div>
    </div>
  );
}

export default TagsList;

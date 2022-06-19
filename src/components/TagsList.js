import React from "react";
import constants from "./constants";
import Tag from "./Tag";

function TagsList({ selectedTags }) {
  return (
    <div className="tags">
      {constants.tags.map((tag, index) => {
        return <Tag tag={tag} key={index} selectedTags={selectedTags} />;
      })}
    </div>
  );
}

export default TagsList;

import React from "react";
import constants from "./constants";
import Tag from "./Tag";
import apiRequests from "./apiRequests";
import { useDispatch } from "react-redux";

function TagsList({ selectedTags }) {
  const dispatch = useDispatch();
  selectedTags.length && apiRequests.getByTag(selectedTags);
  return (
    <div className="tags">
      {constants.tags.map((tag, index) => {
        return <Tag tag={tag} key={index} />;
      })}
    </div>
  );
}

export default TagsList;

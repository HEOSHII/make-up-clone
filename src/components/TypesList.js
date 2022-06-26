import React from "react";
import constants from "./constants";
import Type from "./Type";

function TypesList() {
  return (
    <div className="types">
      <hr />
      <div className="types__wrapper">
        {constants.types.map((type) => {
          return <Type type={type} key={type} />;
        })}
      </div>
      <hr />
    </div>
  );
}

export default TypesList;

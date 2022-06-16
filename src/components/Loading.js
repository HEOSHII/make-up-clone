import React from "react";

function Loading(props) {
  return (
    <div className={props.class}>
      <img
        className={props.class + "__image"}
        src="./assets/loading.svg"
        alt="loading"
      ></img>
    </div>
  );
}

export default Loading;

import React from "react";

function Loading(props) {
  return (
    <div className={props.className}>
      <img
        className={props.className + "__image"}
        src="./assets/loading.svg"
        alt="loading"
      ></img>
    </div>
  );
}

export default Loading;

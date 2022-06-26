import React from "react";
import constants from "./constants";
import { changeType } from "../store/actions";
import { useDispatch } from "react-redux";

function Type({ type }) {
  const dispatch = useDispatch();
  function checkType(event) {
    constants.isLoading = true;
    dispatch(changeType(event.target.id));
  }
  return (
    <div className="types__item" key={type}>
      <input
        onChange={(event) => checkType(event)}
        className="types__input"
        type={"radio"}
        id={type}
        name="types"
      />
      <label className="types__label" htmlFor={type}>
        {type}
      </label>
    </div>
  );
}

export default Type;

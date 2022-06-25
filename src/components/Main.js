import React from "react";
import TagsList from "./TagsList";
import Content from "./Content";
import constants from "./constants";
import { changeType } from "../store/actions";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  function checkType(event) {
    constants.isLoading = true;
    dispatch(changeType(event.target.id));
    console.log(event.target.id);
  }
  return (
    <main className="main">
      <TagsList />
      <div className="types">
        <hr />
        <div className="types__wrapper">
          {constants.types.map((type) => {
            return (
              <div className="types__item">
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
          })}
        </div>
        <hr />
      </div>
      <Content />
    </main>
  );
}

export default Main;

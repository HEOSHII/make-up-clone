import React from "react";
import TagsList from "./TagsList";
import Content from "./Content";
import TypesList from "./TypesList";

function Main() {
  return (
    <main className="main">
      <TagsList />
      <TypesList />
      <Content />
    </main>
  );
}

export default Main;

import React, { useState } from "react";
import constants from "./constants";
import TagsList from "./TagsList";
import Content from "./Content";

function Main({ products, selectedTags }) {
  const [isOpen, setOpen] = useState(false);
  const styles = {
    wrapper: ["brands", isOpen ? "opened" : ""].join(" "),
  };
  const buttonStyles = ["brands__button", isOpen ? "active" : null].join(" ");

  function openCloseBrands() {
    setOpen(!isOpen);
    console.log(isOpen);
  }
  return (
    <main className="main">
      <TagsList selectedTags={selectedTags} />
      <Content products={products} selectedTags={selectedTags} />
    </main>
  );
}

export default Main;

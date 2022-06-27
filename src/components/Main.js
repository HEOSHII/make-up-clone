import React from "react";
import TagsList from "./TagsList";
import Content from "./Content";
import TypesList from "./TypesList";
import ProductCard from "./ProductCard";

function Main() {
  return (
    <main className="main">
      <TagsList />
      <TypesList />
      <Content />
      <ProductCard />
    </main>
  );
}

export default Main;

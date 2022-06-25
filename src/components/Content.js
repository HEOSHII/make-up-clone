import React from "react";
import ProducstList from "./ProducstList";
import constants from "./constants";
import Loading from "./Loading";

function Content({ products, selectedTags }) {
  function produtsRender() {
    if (!selectedTags.length) {
      return <h1>CATEGORIES</h1>;
    }
    if (constants.isLoading) {
      return <Loading className="loading" />;
    }
    return products.length ? (
      <ProducstList products={products} />
    ) : (
      <h1> NO PRODUCTS FOUND </h1>
    );
  }

  return <div className="content">{produtsRender()}</div>;
}

export default Content;

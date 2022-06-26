import React from "react";
import ProducstList from "./ProducstList";
import constants from "./constants";
import Loading from "./Loading";
import { useSelector } from "react-redux";

function Content() {
  const products = useSelector((state) => state.productsReducer.products);
  function produtsRender() {
    if (constants.isLoading) {
      return <Loading className="loading" />;
    } else {
      return products.length ? (
        <ProducstList products={products} />
      ) : (
        <h3 className="not-found"> Products not found </h3>
      );
    }
  }

  return <div className="content">{produtsRender()}</div>;
}

export default Content;

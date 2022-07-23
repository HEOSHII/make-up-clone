import React from "react";
import ProductItem from "./ProductItem";

function ProducstList({ products }) {
  return (
    <div className="products container">
      {products.map((product) => {
        return <ProductItem product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProducstList;

import React from "react";
import ProductCard from "./ProductCard";

function ProducstList({ products }) {
  console.log(products);
  return (
    <div className="products container">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProducstList;

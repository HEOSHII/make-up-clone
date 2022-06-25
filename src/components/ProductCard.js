import React from "react";

function ProductCard({ product }) {
  return (
    <div className="products__item" key={product.id}>
      <div className="products__code">code: {product.id}</div>
      <div className="products__image-wrapper">
        <img
          className="products__image"
          src={product.image_link}
          alt={product.name}
          onError={(event) =>
            (event.target.src = "../../public/assets/alt-pic.webp")
          }
        />
      </div>
      <div className="products__info">
        <h4 className="products__name">{product.name}</h4>
        <p className="products__tags">({product.tag_list.join(", ")})</p>
        <strong className="products__price">
          {Number(product.price).toFixed(2)}
          <span className="products__price-dollar">$</span>
        </strong>
        <button className="products__buy-button">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;

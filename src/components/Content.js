import React from "react";
import constants from "./constants";
import Loading from "./Loading";

function Content({ products, tags }) {
  console.log(tags.length);
  return (
    <div className="content">
      <div className="products container">
        {constants.isLoad ? (
          <Loading className="loading" />
        ) : (
          products.map((product) => {
            return (
              <div className="products__item" key={product.id}>
                <div className="products__code">code: {product.id}</div>
                <div className="products__image-wrapper">
                  <img
                    className="products__image"
                    src={product.image_link}
                    alt={product.name}
                  />
                </div>
                <div className="products__info">
                  <h4 className="products__name">{product.name}</h4>
                  <p className="products__tags">
                    ({product.tag_list.join(", ")})
                  </p>
                  <strong className="products__price">
                    {product.price}
                    <span className="products__price-dollar">$</span>
                  </strong>
                  <button className="products__buy-button">Add to cart</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Content;

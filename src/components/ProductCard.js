import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCard } from "../store/actions";

function ProductCard() {
  const dispatch = useDispatch();

  const currentProduct = useSelector(
    (state) => state.currentProductReducer.currentProduct
  );

  const isOpened = useSelector(
    (state) => state.currentProductReducer.isCardOpen
  );

  function closeCardHandler(event) {
    if (event.target.classList.contains("opened")) {
      dispatch(closeCard());
    }
  }

  return (
    <div
      className={isOpened ? "product-card opened" : "product-card"}
      onClick={(event) => closeCardHandler(event)}
    >
      <div className="product-card__wrapper container">
        <div className="product-card__content">
          <div className="product-card__info">
            <div className="product-card__image">
              <img
                src={currentProduct.image_link}
                alt="IMAGE"
                onError={(event) =>
                  (event.target.src = "./assets/alt-pic.webp")
                }
              />
            </div>
            <div className="product-card__about">
              <h3 className="product-card__title">{currentProduct.name}</h3>
            </div>
          </div>
          <div className="product-card__description">
            <h3>ABOUT PRODUCT</h3>
            <p>{currentProduct.description}</p>
          </div>
        </div>

        <button
          className="product-card__close-button"
          onClick={() => dispatch(closeCard())}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

import React from 'react';
import { useDispatch } from 'react-redux';
import { setProductCard } from '../store/actions';
import { openCard } from '../store/actions';
import RatingStar from './RatingStar';

function ProductItem({ product }) {
  console.log(product.name);
  const dispatch = useDispatch();
  const productRating = Number(product.rating).toFixed(0);
  const productPrice = Number(product.price).toFixed(2);

  function openCardHandler(product) {
    dispatch(setProductCard(product));
    dispatch(openCard());
  }

  function renderProductTags(tags) {
    return tags.length ? (
      <p className="products__tags">({product.tag_list.join(', ')})</p>
    ) : (
      <p className="products__tags">No tags</p>
    );
  }

  function renderRating(rating) {
    const ratingStars = [];
    for (let i = 0; i < rating; i++) {
      ratingStars.push(<RatingStar class={'rating__star'} key={i} />);
    }
    if (rating < 5) {
      for (let i = 0; i < 5 - rating; i++) {
        ratingStars.push(<RatingStar class={'rating__star-empty'} key={i} />);
      }
    }
    return ratingStars;
  }
  return (
    <div className="products__item" key={product.id} onClick={() => openCardHandler(product)}>
      <div className="products__code">code: {product.id}</div>
      <div className="products__image-wrapper">
        <img
          className="products__image"
          src={product.image_link}
          onError={event => (event.target.src = './assets/alt-pic.webp')}
        />
      </div>
      <div className="products__info">
        <h4 className="products__name">{product.name}</h4>
        <div>{renderProductTags(product.tag_list)}</div>
        <div className="rating">{renderRating(productRating)}</div>
        <strong className="products__price">
          {productPrice}
          <span className="products__price-dollar">$</span>
        </strong>
        <button className="products__buy-button">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductItem;

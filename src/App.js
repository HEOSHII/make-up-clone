import Header from "./components/Header";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import TagsList from "./components/TagsList";
import React, { useEffect } from "react";
import { asyncGetProdutcsByTag } from "./store/actions";
import constants from "./components/constants";

function App() {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state) => state.selectedTagsReducer.tags);
  const products = useSelector((state) => state.productsReducer.products);
  console.log(products);
  useEffect(() => {
    if (selectedTags.length) {
      dispatch(asyncGetProdutcsByTag(selectedTags));
    }
  }, [selectedTags]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <TagsList selectedTags={selectedTags} />
        {selectedTags.length ? (
          !products.length ? (
            <Loading class="loadng" />
          ) : (
            <div className="content">
              <div className="products container">
                {products.map((product) => {
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
                      </div>

                      <button className="products__buy-button">
                        Add to cart
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

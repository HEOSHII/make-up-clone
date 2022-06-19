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
        <h3>TAGS</h3>
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
                      <h4>{product.name}</h4>
                      <div className="products__image-wrapper">
                        <img
                          className="products__image"
                          src={product.image_link}
                          alt={product.name}
                        ></img>
                      </div>

                      <p>{product.tag_list.join(", ")}</p>
                      <strong>{product.price}$</strong>
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

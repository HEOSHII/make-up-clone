import Header from "./components/Header";
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import TagsList from "./components/TagsList";
import React, { useEffect } from "react";
import { asyncGetProdutcsByTag } from "./store/actions";
import Content from "./components/Content";

function App() {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state) => state.selectedTagsReducer.tags);
  const products = useSelector((state) => state.productsReducer.products);
  useEffect(() => {
    if (selectedTags.length) {
      dispatch(asyncGetProdutcsByTag(selectedTags));
    } else {
    }
  }, [selectedTags]);
  return (
    <div className="App">
      <Header />
      <main className="main">
        <TagsList selectedTags={selectedTags} />
        <Content products={products} tags={selectedTags} />
      </main>
    </div>
  );
}

export default App;

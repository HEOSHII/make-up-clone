import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { asyncGetProdutcs } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const selectedTags = useSelector((state) => state.selectedTagsReducer.tags);
  const products = useSelector((state) => state.productsReducer.products);
  const params = useSelector((state) => state.paramsReducer.params);
  console.log(params);
  useEffect(() => {
    if (selectedTags.length) {
      dispatch(asyncGetProdutcs(selectedTags));
    }
  }, [selectedTags]);
  return (
    <div className="App">
      <Header />
      <Main products={products} selectedTags={selectedTags} />
    </div>
  );
}

export default App;

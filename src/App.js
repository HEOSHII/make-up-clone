import Header from "./components/Header";
import Main from "./components/Main";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { asyncGetProdutcs } from "./store/actions";

function App() {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.paramsReducer.params);
  const isCardOpen = useSelector(
    (state) => state.currentProductReducer.isCardOpen
  );
  if (isCardOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  console.log(params);
  useEffect(() => {
    dispatch(asyncGetProdutcs(params));
  }, [params]);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

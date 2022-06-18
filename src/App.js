import Header from "./components/Header";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import TagsList from "./components/TagsList";

function App() {
  const selectedTags = useSelector((state) => state.selectedTags.tags);
  console.log(selectedTags);

  return (
    <div className="App">
      <Header />
      <main className="main container">
        <TagsList selectedTags={selectedTags} />
        <div className="products">
          <div className="products__item">
            <img src=""></img>
          </div>
        </div>
        {!selectedTags.length ? (
          <Loading class="loadng" />
        ) : (
          <h1>{"There will be products"}</h1>
        )}
      </main>
    </div>
  );
}

export default App;

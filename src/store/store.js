import { createStore, combineReducers, applyMiddleware } from "redux";
import { productsReducer } from "./productsReducer";
import { selectedTagsReducer } from "./selectedTagsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  selectedTagsReducer: selectedTagsReducer,
  productsReducer: productsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

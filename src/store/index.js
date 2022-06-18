import { createStore, combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { selectedTags } from "./selectedTags";

const rootReducer = combineReducers({ selectedTags: selectedTags });

export const store = createStore(rootReducer);

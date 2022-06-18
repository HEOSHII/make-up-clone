import apiRequests from "../components/apiRequests";

const defaultState = {
  products: [],
};
export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_BY_TAG:
      return {
        ...state,
        products: apiRequests.getByTag(action.payload),
      };
    default:
      return state;
  }
};

const ADD_PRODUCTS_BY_TAG = "ADD_PRODUCTS_BY_TAG";

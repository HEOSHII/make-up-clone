import { PRODUCTS_BY_TAG } from "./types";

const defaultState = {
  products: [],
};

export const productsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_BY_TAG:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

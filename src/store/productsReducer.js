import { SET_PRODUCTS } from "./types";

const defaultState = {
  products: [],
};

export const productsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};

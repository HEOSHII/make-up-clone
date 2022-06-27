import { SET_PRODUCT_CARD, CLOSE_CARD, OPEN_CARD } from "./types";

const defaultState = {
  currentProduct: {},
  isCardOpen: false,
};

export const currentProductReducer = (
  state = defaultState,
  { type, payload }
) => {
  switch (type) {
    case SET_PRODUCT_CARD:
      return {
        ...state,
        currentProduct: payload,
      };
    case CLOSE_CARD:
      return {
        ...state,
        isCardOpen: false,
      };
    case OPEN_CARD:
      return {
        ...state,
        isCardOpen: true,
      };

    default:
      return state;
  }
};

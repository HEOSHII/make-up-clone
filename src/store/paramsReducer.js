import { SET_TAG_TO_PARAMS, REMOVE_TAG_FROM_PARAMS } from "./types";

const defaultState = {
  params: {
    product_tags: [],
  },
};

export const paramsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_TAG_TO_PARAMS:
      return {
        ...state,
        params: { product_tags: [...state.params.product_tags, payload] },
      };
    case REMOVE_TAG_FROM_PARAMS:
      return {
        ...state,
        params: {
          product_tags: state.params.product_tags.filter(
            (tag) => tag !== payload
          ),
        },
      };
    default:
      return state;
  }
};

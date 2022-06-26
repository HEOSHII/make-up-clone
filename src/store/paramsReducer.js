import {
  SET_TAG_TO_PARAMS,
  REMOVE_TAG_FROM_PARAMS,
  CHANGE_TYPE,
} from "./types";

const defaultState = {
  params: {
    product_type: ``,
    product_tags: ``,
    rating_greater_than: 4.9,
    price_greater_than: 0,
    limit: 9,
  },
};

export const paramsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_TAG_TO_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          product_tags: [state.params.product_tags, payload]
            .filter((item) => item !== "")
            .join(", "),

          rating_greater_than: "",
        },
      };
    case REMOVE_TAG_FROM_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          product_tags: state.params.product_tags
            .split(", ")
            .filter((tag) => tag !== payload)
            .join(", "),

          rating_greater_than: "",
        },
      };
    case CHANGE_TYPE:
      return {
        ...state,
        params: {
          ...state.params,
          product_type: payload,
          rating_greater_than: "",
        },
      };
    default:
      return state;
  }
};

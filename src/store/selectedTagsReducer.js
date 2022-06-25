import { ADD_TAG } from "./types";
import { REMOVE_TAG } from "./types";

const defaultState = {
  tags: [],
};

export const selectedTagsReducer = (
  state = defaultState,
  { type, payload }
) => {
  switch (type) {
    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, payload],
      };
    case REMOVE_TAG:
      return {
        ...state,
        tags: [...state.tags.filter((tag) => tag !== payload)],
      };
    default:
      return state;
  }
};

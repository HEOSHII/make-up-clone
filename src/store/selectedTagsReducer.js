const defaultState = {
  tags: [],
};

export const selectedTagsReducer = (state = defaultState, { type, payload }) => {
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

const ADD_TAG = "ADD_TAG";
const REMOVE_TAG = "REMOVE_TAG";

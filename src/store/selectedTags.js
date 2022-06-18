const defaultState = {
  tags: [],
};

export const selectedTags = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case REMOVE_TAG:
      return {
        ...state,
        tags: [...state.tags.filter((tag) => tag !== action.payload)],
      };
    default:
      return state;
  }
};

const ADD_TAG = "ADD_TAG";
const REMOVE_TAG = "REMOVE_TAG";

import { NEWS_DATA } from "../types";

const initialState = {
  news: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_DATA:
      return {
        ...state,
        news: action.payload,
      };

    default:
      return state;
  }
};

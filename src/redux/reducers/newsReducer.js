import {GET_SINGLE_NEWS, NEWS_DATA} from "../types";

const initialState = {
  news: null,
  single:null,
  loading:true
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEWS_DATA:
      return {
        ...state,
        news: action.payload,
      };
    case GET_SINGLE_NEWS:
      return {
        ...state,
        single: action.payload,
        loading: false
      }

    default:
      return state;
  }
};

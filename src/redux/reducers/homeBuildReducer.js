import { HOME_BULID } from "../types";

const initialState = {
  build: [],
};

export const homeBuildReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_BULID:
      return { ...state, build: action.payload };

    default:
      return state;
  }
};

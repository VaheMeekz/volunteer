import { HOME_ABOUT } from "../types";

const initialState = {
  homabout: null,
};

export const homeAboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOME_ABOUT:
      return { ...state, homabout: action.payload };

    default:
      return state;
  }
};

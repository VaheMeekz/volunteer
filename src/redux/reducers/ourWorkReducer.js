import { OURWORK_DATA } from "../types";

const initialState = {
  work: [],
};

export const ourworkReducer = (state = initialState, action) => {
  switch (action.type) {
    case OURWORK_DATA:
      return { ...state, work: action.payload };

    default:
      return state;
  }
};

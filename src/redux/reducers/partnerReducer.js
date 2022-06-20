import { PARTNERS_DATA } from "../types";

const initialState = {
  partners: null,
};

export const partnersReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTNERS_DATA:
      return {
        ...state,
        partners: action.payload,
      };

    default:
      return state;
  }
};

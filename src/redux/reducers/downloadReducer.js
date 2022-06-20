import { DOWNLOAD_PDF } from "../types";

const initialState = {
  load: null,
};

export const downloadReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_PDF:
      return {
        ...state,
        load: action.payload,
      };

    default:
      return state;
  }
};

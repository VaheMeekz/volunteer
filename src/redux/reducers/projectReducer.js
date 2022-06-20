import { PROJECTS_DATA } from "../types";

const initialState = {
  project: null,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_DATA:
      return {
        ...state,
        project: action.payload.length > 0 ? action.payload : ["Data is Empty"],
      };

    default:
      return state;
  }
};

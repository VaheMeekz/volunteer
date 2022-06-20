import { ABOUT_US, ABOUT_BANNER, GET_EVETS, GET_SINGLE_EVENT } from "../types";

const initialState = {
  about: null,
  banner: null,
  events: null,
  loading: true,
  singleEvent:null,
  singleLoading:true
};

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ABOUT_US:
      return {
        ...state,
        about: action.payload,
      };
    case ABOUT_BANNER:
      return {
        ...state,
        banner: action.payload,
      };
    case GET_EVETS:
      return {
        ...state,
        events: action.payload,
        loading: false,
      };
    case GET_SINGLE_EVENT:
        return {
          ...state,
          singleEvent:action.payload,
          singleLoading:false
        }
    default:
      return state;
  }
};

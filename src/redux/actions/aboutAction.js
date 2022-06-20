import { ABOUT_US, ABOUT_BANNER, GET_EVETS, GET_SINGLE_EVENT } from "../types";
import { keys } from "../../keys";
import axios from "axios";
export const aboutAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/aboutUs`)
    .then((resp) => {
      dispatch({
        type: ABOUT_US,
        payload: resp.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const aboutBannerAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/aboutUsBanner`)
    .then((resp) => {
      dispatch({
        type: ABOUT_BANNER,
        payload: resp.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getEventsAC = () => {
   return async (dispatch) => {
     const response = await axios.get(`${keys.API_URI}/api/v1/event`);
     dispatch({
       type: GET_EVETS,
       payload: response.data,
     });
   };
}

export const getSingleEventsAC = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`${keys.API_URI}/api/v1/event/single`,{
      params:{
        id
      }
    });
    dispatch({
      type: GET_SINGLE_EVENT,
      payload: response.data,
    });
  };
};

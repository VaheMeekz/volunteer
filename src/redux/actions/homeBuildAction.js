import { HOME_BULID } from "../types";
import axios from "axios";
import { keys } from "../../keys";

export const homeBuildActin = (pageItem) => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/homeWeDo`)
    .then((resp) => {
      dispatch({
        type: HOME_BULID,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

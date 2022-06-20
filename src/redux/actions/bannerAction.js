import { BANNER_HOME } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const bannerInfo = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/homeBanner`, {})
    .then((resp) => {
      dispatch({
        type: BANNER_HOME,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

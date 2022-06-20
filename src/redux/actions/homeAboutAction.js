import { HOME_ABOUT } from "../types";
import { keys } from "../../keys";
import axios from "axios";
export const homeAboutAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/homeAbout`)
    .then((resp) => {
      dispatch({
        type: HOME_ABOUT,
        payload: resp.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

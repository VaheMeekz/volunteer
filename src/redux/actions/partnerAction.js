import { PARTNERS_DATA } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const partnersAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/partner`, {})
    .then((resp) => {
      dispatch({
        type: PARTNERS_DATA,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

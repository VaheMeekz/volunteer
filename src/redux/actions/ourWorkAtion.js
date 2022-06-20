import { OURWORK_DATA } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const ourWorkAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/work`)
    .then((resp) => {
      dispatch({
        type: OURWORK_DATA,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

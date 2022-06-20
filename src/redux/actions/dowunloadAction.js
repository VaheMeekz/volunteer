import { DOWNLOAD_PDF } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const downloadAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/upload`)
    .then((resp) => {
      dispatch({
        type: DOWNLOAD_PDF,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

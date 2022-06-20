import { PROJECTS_DATA } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const projectAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/project`)
    .then((resp) => {
      dispatch({
        type: PROJECTS_DATA,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

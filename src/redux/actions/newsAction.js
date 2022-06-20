import { NEWS_DATA } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const newsAction = () => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/news`)
    .then((resp) => {
      dispatch({
        type: NEWS_DATA,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

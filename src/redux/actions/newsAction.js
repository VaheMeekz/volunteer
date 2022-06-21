import { NEWS_DATA } from "../types";
import { keys } from "../../keys";
import axios from "axios";

export const newsAction = (page) => (dispatch) => {
  axios
    .get(`${keys.API_URI}/api/v1/news`,{
        params:{
            page
        }
    })
    .then((resp) => {
      dispatch({
        type: NEWS_DATA,
        payload: resp.data,
      });
    })
    .catch((error) => console.log(error));
};

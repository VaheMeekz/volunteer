import {GET_SINGLE_NEWS, NEWS_DATA} from "../types";
import {keys} from "../../keys";
import axios from "axios";

export const newsAction = (page) => (dispatch) => {
    axios
        .get(`${keys.API_URI}/api/v1/news`, {
            params: {
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

export const getSingleNews = (id) => (dispatch) => {
    console.log(id, "631024702798000.0")
    axios
        .get(`${keys.API_URI}/api/v1/news/single`, {
            params: {
                id
            }
        })
        .then((resp) => {
            dispatch({
                type: GET_SINGLE_NEWS,
                payload: [resp.data],
            });
        })
        .catch((error) => console.log(error));
};

import axios from "axios";
import { ActionTypes } from "../actionTypes";
import { options } from "../../constants";

export const getPopular = () => (dispatch) => {
  //yüklenme durumunu aç
  dispatch({ type: ActionTypes.MOVIES_LOADING });

  // apidem polpülar filmleri al

  axios
    .get("https://api.themoviedb.org/3/movie/popular", options)
    //başarılı olursa reducerı bildir
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVIES_SUCCESS,
        payload: res.data.results,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVIES_ERROR,
        payload: err.message,
      })
    );
};

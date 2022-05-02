import { SET_AIRLINE } from "../actionTypes/actionTypes";

export const setAirline = (airline) => {
  return (dispatch) => {
    return dispatch({
      type: SET_AIRLINE,
      payload: airline,
    });
  };
};

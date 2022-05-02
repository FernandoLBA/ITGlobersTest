import { GET_AIRLINE, SET_AIRLINE } from "../actionTypes/actionTypes";
const initialState = {
  airline: "",
};

export const airlinesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AIRLINE:
      return {...state, airline: payload};
      
    case GET_AIRLINE:
      return state.airline;

    default:
      return state;
  }
};

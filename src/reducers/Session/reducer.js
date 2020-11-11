import { TYPES } from "./types";

const initialState = {
  data: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.FETCH_DATA:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

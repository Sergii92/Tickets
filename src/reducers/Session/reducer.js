import { TYPES } from "./types";

const initialState = {
  days: [],
  sessions: [],
  sessionID: "",
  places: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.FETCH_DATA_SUCCESS:
      return {
        ...state,
        days: payload,
      };
    case TYPES.FETCH_SESSIONS_SUCCESS:
      return {
        ...state,
        sessions: payload,
      };

    case TYPES.FETCH_PLACES:
      return {
        ...state,
        places: payload,
      };
    case TYPES.GET_SESSION_ID:
      return {
        ...state,
        sessionID: payload,
      };
    default:
      return state;
  }
};

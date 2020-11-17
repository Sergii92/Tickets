import { TYPES } from "./types";
import { helperBoockedPlace, helperGetPlaces } from "./helpers/index";
const initialState = {
  days: [],
  sessions: [],
  sessionID: "",
  ticket: {
    places: [],
  },
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

    case TYPES.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        ticket: helperGetPlaces(state.ticket, payload),
      };

    case TYPES.BOOKED_PLACE:
      return {
        ...state,
        ticket: helperBoockedPlace(state.ticket, state.ticket.places, payload),
      };
    default:
      return state;
  }
};

import { TYPES } from "./types";
import { helperBoockedPlace, helperGetCarentPlaces } from "./helpers/index";

const initialState = {
  data: [],
  places: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.FETCH_DATA_OK:
      return {
        ...state,
        data: payload,
      };
    case TYPES.BOOK_PLACE:
      return {
        ...state,
        data: helperBoockedPlace(state.data, payload),
      };
    case TYPES.GET_CARENT_PLACES:
      return {
        ...state,
        places: helperGetCarentPlaces(state.data, payload),
      };
    default:
      return state;
  }
};

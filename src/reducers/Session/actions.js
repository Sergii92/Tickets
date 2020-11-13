import { TYPES } from "./types";

export const dataActions = {
  fetchData: () => ({
    type: TYPES.FETCH_DATA,
  }),
  fetchDataOK: (data) => ({
    type: TYPES.FETCH_DATA_OK,
    payload: data,
  }),
  bookPlace: (id) => ({
    type: TYPES.BOOK_PLACE,
    payload: id,
  }),
  getPlaces: (id) => ({
    type: TYPES.GET_CARENT_PLACES,
    payload: id,
  }),
};

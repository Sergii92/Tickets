import { TYPES } from "./types";

export const dataActions = {
  fetchData: () => ({
    type: TYPES.FETCH_DAYS,
  }),
  fetchDataSuccess: (data) => ({
    type: TYPES.FETCH_DATA_SUCCESS,
    payload: data,
  }),
  getSessionID: (id) => ({
    type: TYPES.GET_SESSION_ID,
    payload: id,
  }),
  fetchSession: () => ({
    type: TYPES.FETCH_SESSIONS,
  }),
  fetchSessionsSuccess: (data) => ({
    type: TYPES.FETCH_SESSIONS_SUCCESS,
    payload: data,
  }),
  fetchPlaces: () => ({
    type: TYPES.FETCH_PLACES,
  }),
  fetchPlacesSuccess: (data) => ({
    type: TYPES.FETCH_PLACES_SUCCESS,
    payload: data,
  }),
  bookedPlace: (id) => ({
    type: TYPES.BOOKED_PLACE,
    payload: id,
  }),
  putPlaces: (data) => ({
    type: TYPES.PUT_PLACES,
    payload: data,
  }),
};

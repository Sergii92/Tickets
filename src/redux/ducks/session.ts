import { apply, call, put, takeEvery } from "redux-saga/effects";

import { helperBookedPlace, helperGetPlaces } from "./helpers";
import { API } from "../../constants/api";
import {
  IsessionState,
  IactionType,
  Itypes,
  IplaceData,
  IsessionData,
  Iday,
} from "../../interfaces";

/************************ TYPES ************************/
export const TYPES: Itypes = {
  FETCH_DAYS: "FETCH_DATA",
  FETCH_DATA_SUCCESS: "FETCH_DATA_OK",
  FETCH_SESSIONS: "FETCH_SESSIONS",
  FETCH_SESSIONS_SUCCESS: "FETCH_SESSIONS_SUCCESS",
  FETCH_PLACES: "FETCH_PLACES",
  FETCH_PLACES_SUCCESS: "FETCH_PLACES_SUCCESS",
  GET_SESSION_ID: "GET_SESSION_ID",
  BOOKED_PLACE: "BOOKED_PLACE",
  PUT_PLACES: "PUT_PLACES",
  PUT: "PUT",
};

/********************* REDUCER ***********************/

const initialState = {
  days: [],
  sessions: [],
  ticket: {
    places: [],
  },
};

export const dataReducer = (
  state: IsessionState = initialState,
  action: IactionType
) => {
  switch (action.type) {
    case TYPES.FETCH_DATA_SUCCESS:
      return {
        ...state,
        days: action.payload,
      };
    case TYPES.FETCH_SESSIONS_SUCCESS:
      return {
        ...state,
        sessions: action.payload,
      };

    case TYPES.FETCH_PLACES_SUCCESS:
      return {
        ...state,
        ticket: helperGetPlaces(state.ticket, action.payload),
      };

    case TYPES.BOOKED_PLACE:
      return {
        ...state,
        ticket: helperBookedPlace(
          state.ticket,
          state.ticket.places,
          action.payload
        ),
      };
    default:
      return state;
  }
};

/********************* action ************************/

export const dataActions = {
  fetchData: () => ({
    type: TYPES.FETCH_DAYS,
  }),
  fetchDataSuccess: (data: Array<Iday>) => ({
    type: TYPES.FETCH_DATA_SUCCESS,
    payload: data,
  }),
  getSessionID: (id: number) => ({
    type: TYPES.GET_SESSION_ID,
    payload: id,
  }),
  fetchSession: () => ({
    type: TYPES.FETCH_SESSIONS,
  }),
  fetchSessionsSuccess: (data: Array<IsessionData>) => ({
    type: TYPES.FETCH_SESSIONS_SUCCESS,
    payload: data,
  }),
  fetchPlaces: () => ({
    type: TYPES.FETCH_PLACES,
  }),
  fetchPlacesSuccess: (data: Array<IplaceData>) => ({
    type: TYPES.FETCH_PLACES_SUCCESS,
    payload: data,
  }),
  bookedPlace: (id: number) => ({
    type: TYPES.BOOKED_PLACE,
    payload: id,
  }),
  putPlaces: (data: Array<IplaceData>) => ({
    type: TYPES.PUT_PLACES,
    payload: data,
  }),
};
/*********************Selectors**********************/
export const selectDays = (state: IsessionState | any) => state.data.days;

export const selectSessions = (state: IsessionState | any) =>
  state.data.sessions;
export const selectPlaces = (state: IsessionState | any) =>
  state.data.ticket.places;

/*********************Saga**************************/

const fetchDay = () => fetch(`${API.DAYS}`);

const fetchSessionUrl = () => fetch(`${API.SESSIONS}`);

const fetchPlacesUrl = () => fetch(`${API.TICKETS}`);

const update = ({ payload }: IactionType) => {
  return fetch(`${API.TICKETS}/1000`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ places: payload }),
  });
};

export function* fetchSessionsWorker() {
  try {
    const responce: any = yield call(fetchSessionUrl);

    const data: Array<IsessionData> = yield apply(responce, responce.json, []);
    if (responce.status !== 200) {
      throw new Error("error");
    }
    yield put(dataActions.fetchSessionsSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchDays() {
  try {
    const responce = yield call(fetchDay);
    const data: Array<Iday> = yield apply(responce, responce.json, []);
    if (responce.status !== 200) {
      throw new Error("error");
    }
    yield put(dataActions.fetchDataSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
export function* fetchPlacesWorker() {
  try {
    const responce = yield call(fetchPlacesUrl);
    const data: Array<any> = yield apply(responce, responce.json, []);
    if (responce.status !== 200) {
      throw new Error("error");
    }
    yield put(dataActions.fetchPlacesSuccess(data[0].places));
  } catch (error) {
    console.log(error);
  }
}

export function* sagaWatcher() {
  yield takeEvery(TYPES.FETCH_DAYS, fetchDays);
  yield takeEvery(TYPES.FETCH_SESSIONS, fetchSessionsWorker);
  yield takeEvery(TYPES.FETCH_PLACES, fetchPlacesWorker);
  yield takeEvery(TYPES.PUT_PLACES, update);
}

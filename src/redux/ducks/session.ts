import { apply, call, put, takeEvery } from "redux-saga/effects";

import { helperBoockedPlace, helperGetPlaces } from "./helpers";
import { API } from "../../constants/api";

////////////TYPES//////////
export const TYPES = {
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

///////////REDUCER//////////////

interface IsessionState {
  days: Array<any>;
  sessions: Array<object>;
  ticket: any;
}
interface IactionType {
  type: string;
  payload: any;
}

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
        ticket: helperBoockedPlace(
          state.ticket,
          state.ticket.places,
          action.payload
        ),
      };
    default:
      return state;
  }
};

/////////action/////////

export const dataActions = {
  fetchData: () => ({
    type: TYPES.FETCH_DAYS,
  }),
  fetchDataSuccess: (data: Array<any>) => ({
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
  fetchSessionsSuccess: (data: Array<any>) => ({
    type: TYPES.FETCH_SESSIONS_SUCCESS,
    payload: data,
  }),
  fetchPlaces: () => ({
    type: TYPES.FETCH_PLACES,
  }),
  fetchPlacesSuccess: (data: Array<any>) => ({
    type: TYPES.FETCH_PLACES_SUCCESS,
    payload: data,
  }),
  bookedPlace: (id: number) => ({
    type: TYPES.BOOKED_PLACE,
    payload: id,
  }),
  putPlaces: (data: Array<any>) => ({
    type: TYPES.PUT_PLACES,
    payload: data,
  }),
};
//////////////Selectors////////
export const selectDays = (state: any) => state.data.days;

export const selectSessions = (state: any) => state.data.sessions;
export const selectPlaces = (state: any) => state.data.ticket.places;

export const selectSessionID = (state: any) => state.data.sessionID;

///////////Saga/////////

const fetchDay = () => {
  return fetch(`${API.DAYS}`);
};

const fetchSessionUrl = () => {
  return fetch(`${API.SESSIONS}`);
};

const fetchPlacesUrl = () => {
  return fetch(`${API.TICKETS}`);
};

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

    const data: Array<any> = yield apply(responce, responce.json, []);
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
    const data: Array<any> = yield apply(responce, responce.json, []);
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

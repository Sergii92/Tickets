import { apply, call, put, takeEvery } from "redux-saga/effects";

import { TYPES } from "./types";
import { dataActions } from "./actions";

const fetchDay = () => {
  return fetch("http://localhost:3004/days");
};

const fetchSessionUrl = () => {
  return fetch(`http://localhost:3004/sessions`);
};

const fetchPlacesUrl = () => {
  return fetch(`http://localhost:3004/ticket`);
};

const update = ({ payload }) => {
  return fetch(`http://localhost:3004/ticket/1000`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ places: payload }),
  });
};

export function* fetchSessionsWorker({ payload }) {
  try {
    const responce = yield call(() => fetchSessionUrl(payload));

    const data = yield apply(responce, responce.json);
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
    const data = yield apply(responce, responce.json);
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
    const data = yield apply(responce, responce.json);
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

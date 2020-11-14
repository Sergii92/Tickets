import { apply, call, put, takeEvery } from "redux-saga/effects";

import { TYPES } from "./types";
import { dataActions } from "./actions";

const fetchDay = () => {
  return fetch("http://localhost:3004/days");
};

const fetchSessionUrl = () => {
  return fetch("http://localhost:3004/sessions");
};

export function* fetchSessionsWorker() {
  try {
    const responce = yield call(fetchSessionUrl);
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

export function* sagaWatcher() {
  yield takeEvery(TYPES.FETCH_DAYS, fetchDays);
  yield takeEvery(TYPES.FETCH_SESSIONS, fetchSessionsWorker);
}

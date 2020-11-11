import { apply, call, put, takeEvery } from "redux-saga/effects";

import { TYPES } from "./types";
import { dataActions } from "./actions";

const fetchData = () => {
  return fetch(" http://localhost:3004/sessionsDays");
};

export function* fetchSessions() {
  try {
    const responce = yield call(fetchData);
    const data = yield apply(responce, responce.json);
    if (responce.status !== 200) {
      throw new Error("error");
    }
    yield put(dataActions.fetchData(data));
  } catch (error) {
    console.log(error);
  }
}

export function* sagaWatcher() {
  yield takeEvery(TYPES.FETCH_DATA, fetchSessions);
}

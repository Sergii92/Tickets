import { all, call } from "redux-saga/effects";

import { sagaWatcher } from "../reducers/Session/sagas";

export function* rootSaga() {
  yield all([call(sagaWatcher)]);
}

import { all, call } from "redux-saga/effects";

import { sagaWatcher } from "./ducks/session";

export function* rootSaga() {
  yield all([call(sagaWatcher)]);
}

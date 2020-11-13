import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { enhancedStore, sagaMiddleware } from "./middleware/core";
import { sagaWatcher } from "../reducers/Session/sagas";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(sagaWatcher);

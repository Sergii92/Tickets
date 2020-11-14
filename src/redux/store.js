import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { enhancedStore, sagaMiddleware } from "./middleware/core";
import { rootSaga } from "./rootSaga";

export const store = createStore(rootReducer, enhancedStore);

sagaMiddleware.run(rootSaga);

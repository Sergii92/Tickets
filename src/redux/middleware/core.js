import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const composeEnchancers = devtools ? devtools : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancedStore = composeEnchancers(applyMiddleware(sagaMiddleware));

export { enhancedStore, sagaMiddleware };

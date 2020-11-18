import { combineReducers } from "redux";

import { dataReducer as data } from "./ducks/session";

export const rootReducer = combineReducers({ data });

import { combineReducers } from "redux";

import { dataReducer as data } from "../reducers/Session/reducer";

export const rootReducer = combineReducers({ data });

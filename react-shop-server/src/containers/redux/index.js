import { createStore, combineReducers } from "redux";

import { test } from "./reducers/testReducer";

let combine_Reducers = combineReducers({
  test,
});

export default createStore(combine_Reducers);

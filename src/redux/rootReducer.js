import { combineReducers } from "redux";

import { reducer as authReducer } from "./auth";
import { reducer as customerReducer } from "./customer";
import * as actionTypes from "./auth/types";

// Combine all reducers.

const appReducer = combineReducers({
  auth: authReducer,
  customers: customerReducer,
});

// // Reset all reducers.
// const resetReducer = combineReducers({
//   state: (state = {}) => state,
// });
// const rootReducer = (state, action) => {
//   // Clear all data in redux store to initial.
//   if (action.type !== actionTypes.LOGOUT_SUCCESS) {
//     return appReducer(state, action);
//   } else {
//     return resetReducer(state, action);
//   }
// };

const rootReducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

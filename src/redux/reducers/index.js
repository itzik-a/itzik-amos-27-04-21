import { combineReducers } from "redux";

import settingsReducer from "./settings";
import weatherReducer from "./weather";

const rootReducer = combineReducers({
  settingsState: settingsReducer,
  weatherState: weatherReducer,
});

export default rootReducer;

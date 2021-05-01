import { SETTINGS } from "../types";

const defaultState = { isDarkMode: false, isMetric: true };

const settingsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case SETTINGS.SET_DARK_MODE:
      return { ...state, isDarkMode: payload };
    case SETTINGS.SET_IS_METRIC:
      return { ...state, isMetric: payload };
    default:
      return state;
  }
};

export default settingsReducer;

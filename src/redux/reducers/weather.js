import { WEATHER } from "../types";

const defaultState = {
  currentConditions: {},
  fiveDayForecast: [],
  favorites: [],
  searchResults: [],
  error: null,
};

const weatherReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case WEATHER.SET_CURRENT_CONDITIONS:
      return { ...state, currentConditions: payload };
    case WEATHER.SET_FAVORITES:
      return { ...state, favorites: payload };
    case WEATHER.SET_FIVE_DAY_FORECAST:
      return { ...state, fiveDayForecast: payload };
    case WEATHER.SET_SEARCH_RESULTS:
      return { ...state, searchResults: payload };
    case WEATHER.SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default weatherReducer;

import { WEATHER } from "../types";

export const getCurrentConditions = ({ locationKey, name, isMetric }) => ({
  type: WEATHER.GET_CURRENT_CONDITIONS,
  payload: { locationKey, name, isMetric },
});

export const getLocalCurrentConditions = (payload) => ({
  type: WEATHER.GET_LOCAL_CURRENT_CONDITIONS,
  payload,
});

export const setCurrentConditions = (currentConditions) => ({
  type: WEATHER.SET_CURRENT_CONDITIONS,
  payload: currentConditions,
});

export const setFavorites = (favorites) => ({
  type: WEATHER.SET_FAVORITES,
  payload: favorites,
});

export const addToFavorites = (favorite) => ({
  type: WEATHER.ADD_TO_FAVORITES,
  payload: favorite,
});

export const removeFromFavorites = (id) => ({
  type: WEATHER.REMOVE_FROM_FAVORITES,
  payload: id,
});

export const setFiveDayForecast = (forecast) => ({
  type: WEATHER.SET_FIVE_DAY_FORECAST,
  payload: forecast,
});

export const getSearchResults = (query) => ({
  type: WEATHER.GET_SEARCH_RESULTS,
  payload: query,
});

export const setSearchResults = (results) => ({
  type: WEATHER.SET_SEARCH_RESULTS,
  payload: results,
});

export const setError = (error) => ({
  type: WEATHER.SET_ERROR,
  payload: error,
});

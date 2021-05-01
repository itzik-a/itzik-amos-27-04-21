import { put, takeLatest, call, all, select } from "redux-saga/effects";

import { WEATHER } from "../types";
import {
  setCurrentConditions,
  setFavorites,
  setFiveDayForecast,
  getCurrentConditions,
  setSearchResults,
  setError,
} from "../actions";
import {
  getCurrentConditions as getCurrentConditionsApi,
  getFiveDayForecast,
  getLocation,
  getSearchResults,
} from "../../api";
import { ls } from "../../utils";
import { getWeatherState } from "../selectors";

function* watchGetCurrentConditions({
  payload: { locationKey, name, isMetric },
}) {
  try {
    const currentConditions = yield call(getCurrentConditionsApi, locationKey);
    currentConditions.id = locationKey;
    currentConditions.name = name;

    const fiveDayForecast = yield call(getFiveDayForecast, {
      locationKey,
      isMetric,
    });

    yield put(setCurrentConditions(currentConditions));
    yield put(setFiveDayForecast(fiveDayForecast));
  } catch (e) {
    if (e.Message) {
      yield put(setError(e.Message));
    }
    console.error(e);
  }
}

function* watchGetLocalCurrentConditions({ payload }) {
  try {
    const { Key, LocalizedName, Country } = yield call(getLocation, payload);
    yield put(
      getCurrentConditions({
        locationKey: Key,
        name: `${LocalizedName}, ${Country.ID}`,
        isMetric: payload.isMetric,
      })
    );
  } catch (e) {
    if (e.Message) {
      yield put(setError(e.Message));
    }
    console.error(e);
  }
}

function* watchAddToFavorites({ payload }) {
  try {
    const { favorites } = yield select(getWeatherState);
    const updatedFavorites = [...favorites, payload];

    ls.setField("favorites", updatedFavorites);
    yield put(setFavorites(updatedFavorites));
  } catch (e) {
    console.error(e);
  }
}

function* watchRemoveFromFavorites({ payload }) {
  try {
    const { favorites } = yield select(getWeatherState);
    const updatedFavorites = favorites.filter((fav) => fav.id !== payload);

    ls.setField("favorites", updatedFavorites);
    yield put(setFavorites(updatedFavorites));
  } catch (e) {
    console.error(e);
  }
}

function* watchGetSearchResults({ payload }) {
  try {
    const searchResults = yield call(getSearchResults, payload);
    yield put(setSearchResults(searchResults));
  } catch (e) {
    if (e.Message) {
      yield put(setError(e.Message));
    }
    console.error(e);
  }
}

const sagas = [
  takeLatest(WEATHER.GET_CURRENT_CONDITIONS, watchGetCurrentConditions),
  takeLatest(WEATHER.ADD_TO_FAVORITES, watchAddToFavorites),
  takeLatest(WEATHER.REMOVE_FROM_FAVORITES, watchRemoveFromFavorites),
  takeLatest(WEATHER.GET_SEARCH_RESULTS, watchGetSearchResults),
  takeLatest(
    WEATHER.GET_LOCAL_CURRENT_CONDITIONS,
    watchGetLocalCurrentConditions
  ),
];

export default function* rootSaga() {
  yield all(sagas);
}

import axios from "axios";
// import {
//   location,
//   currentConditions,
//   fiveDayForecast,
//   searchResults,
// } from "./mock-data";

const apiKey = "dkwOxqz9SlENvLWhuRuYrEAzAIi3ayAI";
const baseUrl = "http://dataservice.accuweather.com";

export const getLocation = async ({ latitude, longitude }) => {
  try {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}&toplevel=true`
    );
    return data;
    // return location;
  } catch (e) {
    console.error(e);
  }
};

export const getCurrentConditions = async (locationKey) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/currentconditions/v1/${locationKey}?apikey=${apiKey}`
    );
    return data[0];
    // return currentConditions[0];
  } catch (e) {
    console.error(e);
  }
};

export const getFiveDayForecast = async ({ locationKey, isMetric }) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${isMetric}`
    );
    return data.DailyForecasts;
    // return fiveDayForecast.DailyForecasts;
  } catch (e) {
    console.error(e);
  }
};

export const getSearchResults = async (query) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${query}`
    );
    return data;
    // return searchResults;
  } catch (e) {
    console.error(e);
  }
};

import axios from "axios";

const apiKey = "dkwOxqz9SlENvLWhuRuYrEAzAIi3ayAI";
const baseUrl = "https://dataservice.accuweather.com";

export const getLocation = async ({ latitude, longitude }) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${latitude},${longitude}&toplevel=true`
    );
    return data;
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
  } catch (e) {
    console.error(e);
  }
};

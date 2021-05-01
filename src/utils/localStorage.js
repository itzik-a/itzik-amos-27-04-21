const HEROLO_WEATHER = "heroloWeather";

const initialState = {
  favorites: [],
  isDarkMode: false,
  isMetric: true,
};

const getHeroloWeather = () => {
  const heroloWeather = localStorage.getItem(HEROLO_WEATHER);
  if (heroloWeather) {
    return JSON.parse(heroloWeather);
  } else {
    return null;
  }
};

const setHeroloWeather = (heroloWeather) => {
  const stringified = JSON.stringify(heroloWeather);
  localStorage.setItem(HEROLO_WEATHER, stringified);
};

const setInitialState = () => setHeroloWeather(initialState);

const getFavorites = () => getHeroloWeather() && getHeroloWeather().favorites;

const setField = (field, value) => {
  const heroloWeather = getHeroloWeather();
  heroloWeather[field] = value;
  setHeroloWeather(heroloWeather);
};

const ls = {
  setInitialState,
  getHeroloWeather,
  setHeroloWeather,
  getFavorites,
  setField,
};

export default ls;

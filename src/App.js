import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { getIsDarkMode, getWeatherState } from "./redux/selectors";
import { getTheme, darkBg, lightBg } from "./theme";
import { setDarkMode, setFavorites, setIsMetric } from "./redux/actions";
import { ls } from "./utils";
import Toast from "./components/Toast";

const App = () => {
  const isDarkMode = useSelector(getIsDarkMode);
  const { error } = useSelector(getWeatherState);
  const dispatch = useDispatch();

  const theme = getTheme(isDarkMode);
  const themeBg = isDarkMode ? darkBg : lightBg;

  useEffect(() => {
    const heroloWeather = ls.getHeroloWeather();
    if (heroloWeather) {
      const { favorites, isDarkMode, isMetric } = heroloWeather;
      dispatch(setFavorites(favorites));
      dispatch(setDarkMode(isDarkMode));
      dispatch(setIsMetric(isMetric));
    } else {
      ls.setInitialState();
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Paper style={{ background: themeBg, minHeight: "100vh" }}>
          {error && <Toast />}
          <Header />
          <Switch>
            <Route path="/favorites" component={Favorites} />
            <Route path="/" component={Home} />
          </Switch>
        </Paper>
      </Router>
    </ThemeProvider>
  );
};

export default App;

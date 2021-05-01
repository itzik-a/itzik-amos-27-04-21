import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import LightThemeIcon from "@material-ui/icons/Brightness7";
import DarkThemeIcon from "@material-ui/icons/Brightness4";

import { getSettingsState } from "../../redux/selectors";
import { setDarkMode, setIsMetric } from "../../redux/actions";
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isDarkMode, isMetric } = useSelector(getSettingsState);

  const onToggleDarkMode = () => dispatch(setDarkMode(!isDarkMode));
  const onToggleTempUnit = () => dispatch(setIsMetric(!isMetric));

  const toggleDarkModeButton = (
    <IconButton title="Toggle Dark Mode" onClick={onToggleDarkMode}>
      {isDarkMode ? (
        <LightThemeIcon className={classes.themeIcon} />
      ) : (
        <DarkThemeIcon className={classes.themeIcon} />
      )}
    </IconButton>
  );

  const toggleTempUnitButton = (
    <IconButton
      title="Toggle C - F"
      onClick={onToggleTempUnit}
      className={classes.unitButton}
    >
      {isMetric ? (
        <img
          className={classes.unitIcon}
          src={require("../../assets/icons/celsius.png").default}
          alt="Celius"
        />
      ) : (
        <img
          className={classes.unitIcon}
          src={require("../../assets/icons/fahrenheit.png").default}
          alt="Fahrenheit"
        />
      )}
    </IconButton>
  );

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar style={{ backgroundColor: "transparent" }}>
        <Box display={{ xs: "none", sm: "block" }} className={classes.toolbar}>
          <Link className={classes.title} to="/">
            Herolo Weather
          </Link>
        </Box>
        <Link to="/" className={classes.link}>
          Home
        </Link>
        <Link to="/favorites" className={classes.link}>
          Favorites
        </Link>
        {toggleTempUnitButton}
        {toggleDarkModeButton}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

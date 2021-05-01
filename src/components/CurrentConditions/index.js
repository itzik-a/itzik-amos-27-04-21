import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { getSettingsState, getWeatherState } from "../../redux/selectors";
import useStyles from "./styles";

const CurrentConditions = () => {
  const classes = useStyles();
  const { isMetric } = useSelector(getSettingsState);
  const { currentConditions } = useSelector(getWeatherState);

  const {
    name,
    WeatherIcon,
    WeatherText,
    Temperature,
    PrecipitationType,
  } = currentConditions;
  const tempFormat = isMetric ? "Metric" : "Imperial";
  const { Value, Unit } = Temperature ? Temperature[tempFormat] : {};
  const icon = WeatherIcon
    ? require(`../../assets/icons/${WeatherIcon}.png`).default
    : null;
  const precipitation = PrecipitationType ? PrecipitationType : "None";

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      alignItems="center"
      className={classes.container}
    >
      <Grid item xs={10} md={6}>
        <Typography component="h4" variant="h4" align="center">
          {name}
        </Typography>
      </Grid>
      <Grid item xs={10} md={6}>
        <Typography component="h4" variant="h4" align="center">
          {`${parseInt(Value)}° ${Unit}`}
        </Typography>
      </Grid>
      <Grid item xs={10} md={6}>
        <img src={icon} alt={WeatherText} className={classes.icon} />
      </Grid>
      <Grid item xs={10} md={6}>
        <Typography component="h4" variant="h4" align="center">
          {WeatherText}
        </Typography>
      </Grid>
      <Grid item xs={10} md={6}>
        <Typography component="span" color="textSecondary">
          Current Precipitation: {precipitation}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CurrentConditions;

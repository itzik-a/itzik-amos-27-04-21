import { useSelector } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";

import FavoriteCard from "../../components/FavoriteCard";
import { getSettingsState, getWeatherState } from "../../redux/selectors";

const Favorites = () => {
  const { isMetric } = useSelector(getSettingsState);
  const { favorites } = useSelector(getWeatherState);

  const favoritesMarkup = favorites.map((favorite) => {
    const { id, name, WeatherIcon, WeatherText, Temperature } = favorite;
    const icon = require(`../../assets/icons/${WeatherIcon}.png`).default;
    const tempUnit = isMetric ? "Metric" : "Imperial";
    const { Value } = Temperature[tempUnit];
    return (
      <Grid item xs={6} sm={4} md={3} key={Math.random()}>
        <FavoriteCard
          id={id}
          name={name}
          text={WeatherText}
          icon={icon}
          tempValue={Value}
        />
      </Grid>
    );
  });

  return (
    <Container>
      {favorites.length > 0 ? (
        <Grid container spacing={3} style={{ marginTop: 22 }}>
          {favoritesMarkup}
        </Grid>
      ) : (
        <Typography
          component="h6"
          variant="h6"
          color="textSecondary"
          style={{ marginTop: 80, textAlign: "center" }}
        >
          Click on {<Star />} in home screen to add location to favorites
        </Typography>
      )}
    </Container>
  );
};

export default Favorites;

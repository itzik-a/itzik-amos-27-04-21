import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Star from "@material-ui/icons/Star";

import FiveDayForecast from "../../components/FiveDayForecast";
import Spinner from "../../components/Spinner";
import SearchBox from "../../components/SearchBox";
import CurrentConditions from "../../components/CurrentConditions";
import { getSettingsState, getWeatherState } from "../../redux/selectors";
import {
  addToFavorites,
  getCurrentConditions,
  getLocalCurrentConditions,
  removeFromFavorites,
} from "../../redux/actions";
import { gl } from "../../utils";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isMetric } = useSelector(getSettingsState);
  const { currentConditions, favorites } = useSelector(getWeatherState);

  const isFavorite = false;
  const favoriteButtonTitle = isFavorite
    ? "Remove from Favorites"
    : "Add to Favorites";
  const { id: locationId } = currentConditions;
  const favorite = favorites.find((fav) => fav.id === locationId);

  const onFavoriteBtnClick = () => {
    if (favorite) {
      dispatch(removeFromFavorites(favorite.id));
    } else {
      dispatch(addToFavorites(currentConditions));
    }
  };

  useEffect(() => {
    if (!locationId) {
      dispatch(
        getCurrentConditions({
          locationKey: "215854",
          name: "Tel Aviv",
          isMetric,
        })
      );
      gl.getLocation(
        (position) => {
          const {
            coords: { latitude, longitude },
          } = position;
          dispatch(
            getLocalCurrentConditions({ latitude, longitude, isMetric })
          );
        },
        null,
        { enableHighAccuracy: true }
      );
    }
  }, [dispatch, locationId, isMetric]);

  return locationId ? (
    <Container>
      <IconButton
        title={favoriteButtonTitle}
        className={classes.favoriteButton}
        onClick={onFavoriteBtnClick}
        style={{ color: favorite ? "#ffb74d" : "#fff" }}
      >
        <Star className={classes.favoriteIcon} />
      </IconButton>
      <SearchBox />
      <CurrentConditions />
      <Grid container justify="center" spacing={3} style={{ marginTop: 22 }}>
        <FiveDayForecast />
      </Grid>
    </Container>
  ) : (
    <Spinner />
  );
};

export default Home;

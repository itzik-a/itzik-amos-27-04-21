import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Star from "@material-ui/icons/Star";

import { removeFromFavorites, getCurrentConditions } from "../../redux/actions";
import { getSettingsState, getWeatherState } from "../../redux/selectors";
import useStyles from "./styles";

const FavoriteCard = ({ id, name, text, icon, tempValue }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentConditions } = useSelector(getWeatherState);
  const { isMetric } = useSelector(getSettingsState);

  const onFavoriteClick = () => {
    if (id !== currentConditions.id) {
      dispatch(getCurrentConditions({ locationKey: id, name, isMetric }));
    }
    history.push("/");
  };

  const onRemoveFavorite = (e) => {
    e.stopPropagation();
    dispatch(removeFromFavorites(id));
  };

  return (
    <Card className={classes.card} onClick={onFavoriteClick}>
      <CardContent>
        <Typography component="h5" variant="h5">
          {name}
        </Typography>
        <Typography component="h6" variant="h6" color="textSecondary">
          {`${parseInt(tempValue)}°`}
        </Typography>
      </CardContent>
      <CardMedia className={classes.cover} image={icon} />
      <Typography component="h6" variant="h6" className={classes.weatherText}>
        {text}
      </Typography>
      <IconButton
        onClick={onRemoveFavorite}
        disableRipple
        className={classes.favoriteButton}
        title="Remove from Favorites"
      >
        <Star className={classes.favoriteIcon} />
      </IconButton>
    </Card>
  );
};

export default FavoriteCard;

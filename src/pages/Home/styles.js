import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  favoriteButton: {
    position: "absolute",
    top: 70,
    right: 20,
    zIndex: 10,
  },
  favoriteIcon: {
    height: 30,
    width: 30,
  },
}));

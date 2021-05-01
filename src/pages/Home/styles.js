import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  favoriteButton: {
    position: "absolute",
    top: 70,
    right: 20,
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      top: 128,
    },
  },
  favoriteIcon: {
    height: 30,
    width: 30,
  },
}));

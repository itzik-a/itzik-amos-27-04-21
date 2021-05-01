import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  card: {
    position: "relative",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "transparent",
    boxShadow: "1px 1px 4px 0px gray",
    maxHeight: 242,
  },
  cover: {
    width: 90,
    height: 90,
  },
  weatherText: {
    padding: 12,
  },
  favoriteButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    color: palette.warning.light,
  },
  favoriteIcon: {
    height: 30,
    width: 30,
  },
}));

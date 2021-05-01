import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    height: 230,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  media: {
    height: 60,
    width: 60,
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  search: {
    position: "relative",
    margin: "18px auto 0",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 48,
  },
}));

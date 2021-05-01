import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {},
  search: {
    position: "relative",
    margin: "18px auto 0",
    [theme.breakpoints.down("sm")]: {
      margin: "18px auto 28px",
    },
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
    padding: "8px 8px 8px 48px",
  },
}));

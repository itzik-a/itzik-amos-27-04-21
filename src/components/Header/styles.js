import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  toolbar: {
    flexGrow: 1,
  },
  title: {
    color: "inherit",
    fontSize: 23,
    fontWeight: 700,
    textDecoration: "none",
    marginLeft: 12,
  },
  link: {
    color: "inherit",
    fontSize: 16,
    fontWeight: 700,
    textDecoration: "none",
    marginLeft: 12,
  },
  unitButton: {
    marginLeft: 10,
  },
  themeIcon: {
    height: 26,
    width: 26,
    color: "white",
  },
  unitIcon: {
    height: 28,
    width: 28,
  },
}));

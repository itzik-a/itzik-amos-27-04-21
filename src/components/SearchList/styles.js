import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ palette }) => ({
  list: {
    position: "absolute",
    top: 42,
    left: 45,
    minWidth: 150,
  },
  listItem: {
    backgroundColor: palette.bg1,
    height: 38,

    "&:hover": {
      backgroundColor: palette.bg2,
    },
  },
}));

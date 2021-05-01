import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  container: {
    maxWidth: 450,
    position: "absolute",
    bottom: 20,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "4px 16px 4px 22px",
    backgroundColor: "red",
  },
  text: {
    color: "#fff",
    marginRight: 12,
  },
  closeIcon: {
    color: "#fff",
  },
}));

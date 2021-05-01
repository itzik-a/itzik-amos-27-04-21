import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import useStyles from "./styles";
import { getWeatherState } from "../../redux/selectors";
import { setError } from "../../redux/actions";

const Toast = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { error } = useSelector(getWeatherState);

  useEffect(() => {
    const handlerTimeout = setTimeout(() => {
      dispatch(setError(null));
    }, 5000);

    return () => clearTimeout(handlerTimeout);
  }, [dispatch]);

  const onClose = () => dispatch(setError(null));

  return (
    <div className={classes.container}>
      <Typography className={classes.text}>{error}</Typography>
      <IconButton onClick={onClose}>
        <CloseIcon className={classes.closeIcon} />
      </IconButton>
    </div>
  );
};

export default Toast;

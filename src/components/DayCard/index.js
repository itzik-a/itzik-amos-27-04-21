import moment from "moment";
import { useSelector } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { getSettingsState } from "../../redux/selectors";
import { cToF } from "../../utils";
import useStyles from "./styles";

const DayCard = ({ date, icon, phrase, minValue, maxValue }) => {
  const classes = useStyles();
  const { isMetric } = useSelector(getSettingsState);

  const title = moment(date).format("ddd");
  const image = require(`../../assets/icons/${icon}.png`).default;

  let min = minValue;
  let max = maxValue;
  if (!isMetric) {
    min = cToF(minValue);
    max = cToF(maxValue);
  }

  return (
    <Card className={classes.root} title={phrase}>
      <CardHeader title={title} />
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography component="h6" variant="h6" color="textSecondary">
          {`${parseInt(min)}° - ${parseInt(max)}°`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DayCard;

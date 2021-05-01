import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { getWeatherState } from "../../redux/selectors";
import DayCard from "../DayCard";

const FiveDayForecast = () => {
  const { fiveDayForecast } = useSelector(getWeatherState);

  return fiveDayForecast.map(
    ({
      Date,
      Day: { Icon, IconPhrase },
      Temperature: {
        Maximum: { Value: maxValue },
        Minimum: { Value: minValue },
      },
    }) => {
      return (
        <Grid item xs={10} sm={4} md={2} key={Date}>
          <DayCard
            date={Date}
            icon={Icon}
            phrase={IconPhrase}
            minValue={minValue}
            maxValue={maxValue}
          />
        </Grid>
      );
    }
  );
};

export default FiveDayForecast;

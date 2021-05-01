import { useDispatch, useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { getCurrentConditions, setSearchResults } from "../../redux/actions";
import { getSettingsState } from "../../redux/selectors";
import useStyles from "./styles";

const SearchList = ({ searchResults, searchInputRef }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isMetric } = useSelector(getSettingsState);

  const onLocationClick = (locationKey, name) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
    dispatch(setSearchResults([]));
    dispatch(getCurrentConditions({ locationKey, name, isMetric }));
  };

  return (
    <List component="ul" classes={{ root: classes.list }}>
      {searchResults.map(({ Key, LocalizedName, Country }) => {
        const name = `${LocalizedName}, ${Country.ID}`;
        return (
          <ListItem
            button
            key={Key}
            className={classes.listItem}
            onClick={onLocationClick.bind(null, Key, name)}
          >
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SearchList;

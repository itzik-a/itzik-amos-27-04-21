import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import SearchList from "../SearchList";
import { getWeatherState } from "../../redux/selectors";
import { getSearchResults, setSearchResults } from "../../redux/actions";
import useStyles from "./styles";

const SearchBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { searchResults } = useSelector(getWeatherState);
  const inputRef = useRef();

  const onInputChange = ({ target: { value } }) => {
    if (value.trim() === "") {
      dispatch(setSearchResults([]));
    } else {
      dispatch(getSearchResults(value));
    }
  };

  const onClickAway = () => {
    if (searchResults.length > 0) {
      dispatch(setSearchResults([]));
    }
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <ClickAwayListener onClickAway={onClickAway}>
          <InputBase
            placeholder="Search Location…"
            classes={{ input: classes.inputInput }}
            onChange={onInputChange}
            inputRef={inputRef}
          />
        </ClickAwayListener>
        {searchResults.length > 0 && (
          <SearchList searchResults={searchResults} searchInputRef={inputRef} />
        )}
      </Grid>
    </Grid>
  );
};

export default SearchBox;

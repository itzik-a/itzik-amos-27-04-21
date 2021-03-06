import { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import SearchList from "../SearchList";
import { getWeatherState } from "../../redux/selectors";
import {
  getSearchResults,
  setError,
  setSearchResults,
} from "../../redux/actions";
import useStyles from "./styles";
import { useDebounce } from "../../utils";

const SearchBox = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { searchResults } = useSelector(getWeatherState);
  const inputRef = useRef();
  const [query, setQuery] = useState("");

  useDebounce(
    () => {
      const onlyEnglishLetters = /^[a-zA-Z\s]*$/;

      if (query.trim() === "") {
        dispatch(setSearchResults([]));
      } else if (onlyEnglishLetters.test(query)) {
        dispatch(getSearchResults(query));
      } else {
        dispatch(setError("Please use English letters only."));
      }
    },
    300,
    [query]
  );

  const onInputChange = ({ target: { value } }) => setQuery(value);

  const onClickAway = useCallback(() => {
    if (searchResults.length > 0) {
      dispatch(setSearchResults([]));
    }
  }, [dispatch, searchResults]);

  useEffect(() => {
    const listener = document.addEventListener("keydown", ({ key }) => {
      if (key === "Escape") {
        onClickAway();
      }
    });

    return () => document.removeEventListener("keydown", listener);
  }, [onClickAway]);

  return (
    <Grid container className={classes.container}>
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

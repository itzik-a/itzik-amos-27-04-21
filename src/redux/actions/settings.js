import { SETTINGS } from "../types";
import { ls } from "../../utils";

export const setIsMetric = (bool) => {
  ls.setField("isMetric", bool);
  return {
    type: SETTINGS.SET_IS_METRIC,
    payload: bool,
  };
};

export const setDarkMode = (bool) => {
  ls.setField("isDarkMode", bool);
  return {
    type: SETTINGS.SET_DARK_MODE,
    payload: bool,
  };
};

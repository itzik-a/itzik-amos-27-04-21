import { createMuiTheme } from "@material-ui/core/styles";

const lightTheme = {
  bg1: "#0093E9",
  bg2: "#eee",
};

const darkTheme = {
  type: "dark",
  bg1: "#070D20",
  bg2: "#555",
};

export const darkBg = "linear-gradient(179.4deg, #070D20 11.4%, #1E2B56 70.2%)";
export const lightBg = "linear-gradient(179.4deg, #0093E9 0%, #80D0C7 100%";

export const getTheme = (isDarkMode) => {
  const palette = isDarkMode ? darkTheme : lightTheme;
  return createMuiTheme({ palette });
};

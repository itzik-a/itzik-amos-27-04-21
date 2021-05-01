export { default as ls } from "./localStorage";
export { default as gl } from "./geoLocation";

export const cToF = (value) => (value * 9) / 5 + 32;
export const fToC = (value) => ((value - 32) * 5) / 9;

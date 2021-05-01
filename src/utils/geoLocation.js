export const getLocation = (cb) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(cb);
  }
};

const gl = { getLocation };

export default gl;

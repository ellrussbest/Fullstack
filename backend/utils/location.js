const axios = require("axios");
const HttpError = require("../models/http-error");

const API_KEY = "AIzaSyAfK9g-xnoyEqZXt5wVrwSXQGUG093_BDQ";

const getCoordsForAddress = async (address) => {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
      address
    )}&key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address",
      422
    );

    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
};

module.exports = getCoordsForAddress;

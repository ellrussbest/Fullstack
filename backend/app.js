require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
const cors = require("cors");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(bodyParser.json());

/**
 * A longer way of enabling cors
 */

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });

// a shorter way of enabling cors
app.use(cors());

// middlewares
app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

// error handler middleware
// if you provide a middleware function that takes four parameters
// express will take this as an error handling middleware function
// this function will only be executed on requests that have an error attached to it
app.use((error, req, res, next) => {
  if (res.headerSent) {
    next(error);
    return;
  }

  // it will check if the error code is already setup
  // if not it will default to 500
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("The connection was successful");
    app.listen(5000);
  })
  .catch((error) => console.log(error));

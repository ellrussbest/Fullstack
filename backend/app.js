const fs = require("fs");
const path = require("path");

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

// express static middleware returns the requested file
// static serving means that you just return a file,
// you don't execute it... etc.
app.use(
  "/uploads/images",
  express.static(
    /*include the absolute path here, you can do this with the node js PATH module
    this helps in giving you the path with regards to file system of your native host environment
    */
    path.join("uploads", "images")
  )
);

// used to serve the react paths statically
app.use(express.static(path.join("public")));

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
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// middleware used to handle unknown route requests
// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });

// error handler middleware
// if you provide a middleware function that takes four parameters
// express will take this as an error handling middleware function
// this function will only be executed on requests that have an error attached to it
app.use((error, req, res, next) => {
  // multer adds a file property to the request object
  if (req.file) {
    fs.unlink(req.file.path, (err) => console.log(err));
  }

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
    app.listen(process.env.PORT || 5000);
  })
  .catch((error) => console.log(error));

/*
  This is how a .env file would look like
  CONNECTION_STRING=mongodb+srv://<username>:<password>@cluster0.srquefs.mongodb.net/<database_name>?retryWrites=true&w=majority
*/

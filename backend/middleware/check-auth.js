const HttpError = require("../models/http-error");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // the options requests is a request that's sent to the server by the
  // browser to first confirm if the browser has the to-be sent request
  // this could be a nuisance when sending headers and so we want to skip this middleware if the
  // request method is OPTIONS; --- capische? ---

  if (req.method === "OPTIONS") return next();

  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) throw new Error("Authentication failed");

    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.userData = { userId: decodedToken.userId };
    next();
  } catch (error) {
    return new HttpError("Authentication failed", 403);
  }
};

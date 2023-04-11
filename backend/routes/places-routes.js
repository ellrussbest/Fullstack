const express = require("express");
const checkAuth = require("../middleware/check-auth");

const { check } = require("express-validator");

const {
  getPlaceById,
  getPlacesByUserId,
  createPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/places-controllers");
const fileUpload = require("../middleware/file-upload");
const router = express.Router();

router.get("/:pid", getPlaceById);

router.get("/user/:uid", getPlacesByUserId);

// A request without a valid token will never reach the bottom routes
router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  updatePlace
);

router.delete("/:pid", deletePlace);

module.exports = router;

/**
 * btw, you can use as many middlewares as you want on one middleware,
 * all the middlewares will be executed from left to right
 *
 *
 * express-validator middleware
 * you can use a third party application for validation of
 * your user inputs, you don't have to do it manually if you have this package installed
 */

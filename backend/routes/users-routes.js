const express = require("express");
const { check } = require("express-validator");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

const { getUsers, signup, login } = require("../controllers/users-controllers");

router.get("/", getUsers);

router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup
);

router.post("/login", login);

module.exports = router;

/**
 * fileUpload that we have used above is another middleware
 * this time around this is from multer.
 *
 * this middleware takes the name that it expects from the body of the request
 * in this case, the name is 'image'
 */

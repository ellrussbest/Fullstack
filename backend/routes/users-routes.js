const express = require("express");

const router = express.Router();

const DUMMY_USERS = [];

router.get("/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const user = DUMMY_USERS.find((val) => val.id === userId);
  res.json({ user });
});

module.exports = router;

const express = require("express");
const router = new express.Router();

const User = require("../models/user");

router.get("/home", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
  // User.find({})
  //   .then(users => {
  //     res.send(users);
  //   })
  //   .catch(error => {
  //     res.status(500).send();
  //   });
});

module.exports = router;

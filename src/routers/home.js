const express = require("express");
const router = new express.Router();

router.get("/home", async (req, res) => {
  res.send("home page");
});

module.exports = router;

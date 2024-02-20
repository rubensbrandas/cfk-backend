const express = require("express");
const router = express.Router();

router.get("/waitinglist", (req, res) => {
  res.send("Waiting List");
});

module.exports = router;

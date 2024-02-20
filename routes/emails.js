const express = require("express");
const router = express.Router();

router.get("/emails", (req, res) => {
  res.send("Emails");
});

module.exports = router;

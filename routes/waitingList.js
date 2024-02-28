const express = require("express");
const router = express.Router();
const WaitList = require("../models/waitinglistModel");

router.get("/waitinglist", async (req, res) => {
  try {
    const waitlist = await WaitList.find({});
    res.status(200).json(waitlist);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

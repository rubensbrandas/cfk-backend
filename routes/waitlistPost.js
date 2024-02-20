const express = require("express");
const cors = require("cors");
const router = express.Router();
const WaitList = require("../models/waitinglistModel");
router.use(express.json());
router.use(cors());
router.post("/waitlistpost", async (req, res) => {
  try {
    const waitlist = await WaitList.create(req.body);
    res.status(200).json(waitlist);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

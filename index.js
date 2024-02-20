const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
const { readdirSync } = require("fs");
const connectDB = require("./connectMongo");
const WaitList = require("./models/waitinglistModel");

connectDB();
readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/waitlist", async (req, res) => {
  try {
    const waitlist = await WaitList.find({});
    res.status(200).json(waitlist);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

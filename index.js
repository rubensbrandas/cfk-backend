const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const port = process.env.PORT || 8000;
const { readdirSync } = require("fs");
const connectDB = require("./connectMongo");

connectDB();
readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongoose = require("mongoose");

const waitlistSchema = mongoose.Schema(
  {
    course: {
      type: String,
      required: [false, "Please insert a day"],
    },
    zipcode: {
      type: String,
      required: [false, "Please insert a day"],
    },
    phoneNum: {
      type: String,
      required: false,
      default: "Phone number",
    },
    email: {
      type: String,
      default: "email address",
      required: true,
    },
    name: {
      type: String,
      default: "Name ",
      required: true,
    },
    group: {
      type: String,
      default: "Group",
      required: false,
    },
  },
  { timestamps: true }
);

const WaitList = mongoose.model("WaitList", waitlistSchema);

module.exports = WaitList;

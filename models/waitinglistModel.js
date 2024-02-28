const mongoose = require("mongoose");

const waitlistSchema = mongoose.Schema(
  {
    course: {
      type: String,
      required: [false, "Course not found."],
    },
    zipcode: {
      type: String,
      required: [false, "Please insert a Zipcode"],
    },
    phoneNum: {
      type: String,
      required: false,
      default: "(333)333-3333",
    },
    email: {
      type: String,
      default: "email@email.com",
      required: true,
    },
    name: {
      type: String,
      default: "user Name",
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

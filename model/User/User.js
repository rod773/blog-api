const mongoose = require("mongoose");

const userSchema = new mongoose.userSchema({
  firsrName: {
    type: String,
    required: [true, "First Name"],
  },
});

const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", usersSchema);

module.exports = User;

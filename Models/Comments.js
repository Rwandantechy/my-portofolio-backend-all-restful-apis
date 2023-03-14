const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commentorName: {
      type: String,
      required: true,
    },
    commentorEmail: {
      type: String,
      required: true,
    },
    blog: {
      type: String,
      ref: "Blog",
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

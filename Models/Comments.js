const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    commentorName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    commentorEmail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    commentBody: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 2000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);

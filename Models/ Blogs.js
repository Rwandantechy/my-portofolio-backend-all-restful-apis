const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 255,
    },
    blogAuthor: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 40,
    },
    blogBody: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 2500,
    },
    blogThumbnailImageUrl: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 400,
    },
  },

  { timestamps: true }
);

const Blogs= mongoose.model("Blogs", blogSchema);

module.exports = Blogs;

const express = require("express");
const router = express.Router();
const commentController = require("../Controllers/commentsController");

// POST /blog/:blogId/comments
router.post("/blog/create/:blogId/comments", commentController.createComment);

// GET /blogs/:blogId/comments
router.get("/blog/:blogId/comments", commentController.getComments);

// DELETE /blogs/:blogId/comments/:commentId
router.delete(
  "/blog/:blogId/comments/:commentId",
  commentController.deleteComment
);

module.exports = router;

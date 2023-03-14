const express = require("express");
const router = express.Router();
const commentController = require("../Controllers/commentsController");

// GET  all comments 
router.get("/comments/", commentController.getAllComments);
// GET comments BY ID
router.get("/comments/:id", commentController.getCommentByItsId);

// DELETE  comments/:commentId
router.delete(
  "/comments/:id",
  commentController.deleteComment
);

module.exports = router;

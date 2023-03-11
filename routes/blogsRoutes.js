const express = require("express");
const router = express.Router();
const blogsController = require("../Controllers/blogsController");

router.get("/blogs", blogsController.getAllBlogs);
router.get("/blogs/:id", blogsController.getBlogByItsId);
router.post("/blogs/create", blogsController.createNewBlog);
router.put("/blogs/update/:id", blogsController.updateBlog);
router.delete("/blogs/delete/:id", blogsController.deleteBlog);

module.exports = router;

const Blog = require("../Models/ Blogs");
const Joi = require("joi");

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.send(blogs);
};

const getBlogByItsId = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog)
    return res.status(404).send("Oops You  don't have the blog with such ID But you can create one");
  res.send(blog);
};

const createNewBlog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const blog = new Blog({
    blogTitle: req.body.blogTitle,
    blogAuthor: req.body.blogAuthor,
    blogBody: req.body.blogBody,
    blogThumbnailImageUrl: req.body.blogThumbnailImageUrl,
  });

  await blog.save();
  res.send(blog);
};

const updateBlog = async (req, res) => {
  const { error } = validateBlog(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    {
      blogTitle: req.body.blogTitle,
      blogAuthor: req.body.blogAuthor,
      blogBody: req.body.blogBody,
      blogThumbnailImageUrl: req.body.blogThumbnailImageUrl,
    },
    { new: true }
  );

  if (!blog)
    return res
      .status(404)
      .send("You can not update the blog which is not available");
  res.send(blog);
};

const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);
  if (!blog)
    return res.status(404).send("Oops Blog was not found. First create one");
  res.send(blog);
};

function validateBlog(blog) {
  const schema = Joi.object({
    blogTitle: Joi.string().min(10).max(255).required(),
    blogAuthor: Joi.string().min(10).max(40).required(),
    blogBody: Joi.string().min(10).max(2500).required(),
    blogThumbnailImageUrl: Joi.string().min(10).max(400).required(),
  });

  return schema.validate(blog);
}
module.exports = {
  getAllBlogs,
  getBlogByItsId,
  deleteBlog,
  createNewBlog,
  updateBlog,
};

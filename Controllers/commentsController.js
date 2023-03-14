// 
const Comment = require("../Models/Comments");
const Joi = require("joi");

const getAllComments = async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
};

const getCommentByItsId = async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment)
    return res
      .status(404)
      .send(
        "Oops You  don't have the comment yet"
      );
  res.send(comment);
};

const createNewComment = async (req, res) => {
  const { error } = validateComment(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const comment = new Comment({
    commentorName: req.body.commentorName,
    commentorEmail: req.body.commentorEmail,
    blog: req.body.blog,
    commentBody: req.body.commentBody,
  });

  await comment.save();
  res.send(comment);
};


const deleteComment = async (req, res) => {
  const comment = await Comment.findByIdAndRemove(req.params.id);
  if (!comment)
    return res.status(404).send("Oops comment was not found.");
  res.send(comment);
};

function validateComment(comment) {
  const schema = Joi.object({
    commentorName: Joi.string().min(2).max(255).required(),
    commentorEmail: Joi.string().min(10).max(300).required(),
    blog: Joi.string().min(5).max(200).required(),
    commentBody: Joi.string().min(10).max(2500).required(),
  });

  return schema.validate(comment);
}
module.exports = {
  getAllComments,
  getCommentByItsId,
  deleteComment,
  createNewComment,
};

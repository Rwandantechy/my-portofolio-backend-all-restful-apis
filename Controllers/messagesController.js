// const messagesModel = require("../Models/Messages");
// // const nodemailer = require("nodemailer");

// const messagesController = {};

// // Retrieve all messages
// messagesController.getAllMessages = async (req, res, next) => {
//   try {
//     const messages = await messagesModel.find();
//     res.json(messages);
//   } catch (error) {
//     next(error);
//   }
// };

// // Create a new  message --- once a user sends one.
// messagesController.createMessage = async (req, res, next) => {
//   try {
//     const { senderName, senderEmail, senderMessage } = req.body;
//     const message = new messagesModel({
//       senderName,
//       senderEmail,
//       senderMessage,
//     });
//     await message.save();

//     // Send email notification to website owner using transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const mailOptions = {
//       from: `${senderEmail}`,
//       to: "niyinnocent2027@gmail.com",
//       subject: "A client Reach out",
//       text: `This is reminder that you have a message from ${senderName} (${senderEmail}): ${senderMessage}`,
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ message: " Your Message to Innocent is sent successfully" });
//   } catch (error) {
//     next(error);
//   }
// };
// // Delete a  recieved message
// messagesController.deleteMessage = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await messagesModel.findByIdAndDelete(id);
//     res.json({ message: "Query deleted successfully" });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = messagesController;


const Message = require("../Models/Messages");
const Joi = require("joi");

const getAllMessages = async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
};

const getMessageByItsId = async (req, res) => {
  const blog = await Message.findById(req.params.id);
  if (!message)
    return res.status(404).send("Oops You  don't have that message");
  res.send(message);
};

const createNewMessage = async (req, res) => {
  const { error } = validateMessage(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const message = new Message({
    senderName: req.body.senderName,
    senderEmail: req.body.senderEmail,
    senderMessage: req.body.senderMessage,
    date: req.body.date,
  });

  await message.save();
  res.send(message);
};

const deleteMessage = async (req, res) => {
  const message = await Message.findByIdAndRemove(req.params.id);
  if (!message) return res.status(404).send("Oops message was not found");
  res.send(message);
};

function validateMessage(message) {
  const schema = Joi.object({
    senderName: Joi.string().min(3).max(250).required(),
    senderEmail: Joi.string().min(5).max(40).required(),
    senderMessage: Joi.string().min(10).max(2500).required(),
    date: Joi.string().min(5).max(40).required(),
  });

  return schema.validate(message);
}
module.exports = {
  getAllMessages,
  getMessageByItsId,
  deleteMessage,
  createNewMessage,
};

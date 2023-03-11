const messagesModel = require("../Models/Messages");
const nodemailer = require("nodemailer");

const messagesController = {};

// Retrieve all messages
messagesController.getAllMessages = async (req, res, next) => {
  try {
    const messages = await messagesModel.find();
    res.json(messages);
  } catch (error) {
    next(error);
  }
};

// Create a new  message --- once a user sends one.
messagesController.createMessage = async (req, res, next) => {
  try {
    const { senderName, senderEmail, senderMessage } = req.body;
    const message = new messagesModel({
      senderName,
      senderEmail,
      senderMessage,
    });
    await message.save();

    // Send email notification to website owner using transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "niyinnocent2027@gmail.com",
      subject: "A client Reach out",
      text: `This is reminder that you have a message from ${senderName} (${senderEmail}): ${senderMessage}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: " Your Message to Innocent is sent successfully" });
  } catch (error) {
    next(error);
  }
};
// Delete a  recieved message
messagesController.deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    await messagesModel.findByIdAndDelete(id);
    res.json({ message: "Query deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = messagesController;

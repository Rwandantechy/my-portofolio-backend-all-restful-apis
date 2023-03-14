const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  senderEmail: {
    type: String,
    required: true,
  },
  senderMessage: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const messageModel = mongoose.model("Messages", messageSchema);

module.exports = messageModel;

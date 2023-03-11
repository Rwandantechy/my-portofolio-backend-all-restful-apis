const express = require("express");
const messagesController = require("../Controllers/messagesController");

const router = express.Router();

// Retrieve all messages
router.get("/messages", messagesController.getAllMessages);

// Create a new messsage
router.post("/messages/create", messagesController.createMessage);
// Delete a message
router.delete("/messages/delete/:id", messagesController.deleteMessage);

module.exports = router;

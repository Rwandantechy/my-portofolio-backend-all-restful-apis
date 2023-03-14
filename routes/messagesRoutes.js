const express = require("express");
const messagesController = require("../Controllers/messagesController");

const router = express.Router();

// Retrieve all messages
router.get("/messages", messagesController.getAllMessages);
//by id 
router.get("/messages/:id", messagesController.getMessageByItsId);
// Create a new messsage   getMessageByItsId,
router.post("/messages/create", messagesController.createNewMessage);
// Delete a message
router.delete("/messages/delete/:id", messagesController.deleteMessage);

module.exports = router;

// importing user context
const userController = require("../Controllers/usersController");
const express = require("express");
const router = express.Router();
//get all users
router.get("/users/", userController.getAllUsers);
//get user by ID 
router.get("/users/:id", userController.getUserByTheirId);
//deleting user by thir id 
router.delete("/users/:id", userController.deleteUserByTheirId);
// registering a user
router.post("/users/register", userController.registerUser);
// login a user
router.post("/users/login", userController.loginUser);

module.exports = router;

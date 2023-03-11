const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const userController = require("../Controllers/usersController");

// GET /api/users - Get all users
router.get("/users", userController.getUsers);

// POST /api/users - Create a new user
router.post(
  "/signup",
  body("email").isEmail().withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
  body("confirmpassword")
    .isLength({ min: 3 })
    .withMessage("Password must be at least 3 characters long"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  userController.createUser
);

// GET /api/users/:id - Get a user by ID
router.get("/users/:id", userController.getUserById);

// PUT /api/users/:id - Update a user by ID
router.put("/users/update/:id", userController.updateUserById);

// DELETE /api/users/:id - Delete a user by ID
router.delete("/users/delete/:id", userController.deleteUserById);

module.exports = router;

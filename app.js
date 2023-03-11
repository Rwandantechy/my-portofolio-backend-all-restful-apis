// Requiring required  Dependencies and other files..
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogsRoutes = require("./routes/blogsRoutes");
const usersRoutes = require("./routes/usersRoutes");
const commentsRoutes = require("./routes/commentsRoutes");
const messagesRoutes = require("./routes/messagesRoutes");

// Getting Connection URI
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected successfully!");
});
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log(`Server has just Started at ${3000}`);
});

// Using MiddleWares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Defining all  routes.
app.use("/api", blogsRoutes);
app.use("/api", usersRoutes);
app.use("/api", commentsRoutes);
app.use("/api", messagesRoutes);

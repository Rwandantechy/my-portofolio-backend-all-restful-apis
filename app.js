// Requiring required  Dependencies and other files..
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const low = require("lowdb");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
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
const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;
app.use(express.json());
app.listen(port, () => {
  console.log(`Server has just Started at ${port}`);
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

app.get("/", (req, res) => {
  res.send("This is my Portofolio  API");
});

// Intergrating Swagger
const swaggerDefinition = require("./swagger.js");


const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to the API routes files
};

const Spec = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(Spec));

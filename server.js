const express = require("express");

// Helmet is a collection of 14 smaller middleware functions that helps you secure your Express apps by setting various HTTP response headers.
const helmet = require("helmet");

// Morgan is a HTTP request logger middleware for node.js
const morgan = require("morgan");

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
const cors = require("cors");

// const usersRouter = require('./dummyusers/users-router.js');

const server = express();

require("dotenv").config();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());
/// server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(
    "<h1> Welcome to Project Motivation Backend!</h1>" +
      "<br/>" +
      "Built by: Leslie Thompson" +
      "<br />" +
      "<br />" +
      "GitHub: https://github.com/LCRT215/Project-Motivation-BE" +
      "<br />" +
      "<br />" +
      "Deployed Backend: https://motivation-backend.herokuapp.com/"
  );
});

module.exports = server;

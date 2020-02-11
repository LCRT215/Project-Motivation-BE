const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

const adminRoute = require("./admin/adminRoute.js");
const quotesRoute = require("./quotes/quotesRoute.js");

require("dotenv").config();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

adminRoute(server);
quotesRoute(server);

module.exports = server;

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

const adminRoute = require("./admin/adminRoute.js");

require("dotenv").config();

server.use(cors());
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

adminRoute(server);

// server.get("/", (req, res) => {
//   res.send(
//     "<h1> Welcome to Project Motivation Backend!</h1>" +
//       "<br/>" +
//       "Built by: Leslie Thompson" +
//       "<br />" +
//       "<br />" +
//       "GitHub: https://github.com/LCRT215/Project-Motivation-BE" +
//       "<br />" +
//       "<br />" +
//       "Deployed Backend: https://motivation-backend.herokuapp.com/"
//   );
// });

module.exports = server;

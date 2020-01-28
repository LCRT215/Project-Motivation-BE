const router = require("express").Router();

module.exports = server => {
  server.get("/", testServer);
};

///// SANITY CHECK //////
function testServer(req, res) {
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
}

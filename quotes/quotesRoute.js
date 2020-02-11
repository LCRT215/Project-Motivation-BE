const router = require("express").Router();
const DB = require("./quotesModel.js");

module.exports = server => {
  server.get("/quotes", get);
};

function get(req, res) {
  DB.get()
    .then(quotes => {
      res.json(quotes);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get quotes" });
    });
}

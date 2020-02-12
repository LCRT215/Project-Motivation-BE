const router = require("express").Router();
const DB = require("./quotesModel.js");

module.exports = server => {
  server.get("/quotes", get);
  server.post("/quotes", post);
};

function get(req, res) {
  DB.get()
    .then(quotes => {
      if (quotes) {
        res.status(200).json({ quotes });
      } else {
        res.status(404).json({
          message:
            "There are currently no quotes in the database. Please add one!"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ err, message: "Failed to get quotes" });
    });
}

function post(req, res) {
  DB.add(req.body)
    .then(quote => {
      if (quote) {
        res.status(200).json({
          "Your quote was successfully added": req.body,
          "Added quote ID": quote
        });
      } else {
        res.status(404).json({
          message:
            "There are currently no quotes in the database. Please add one!"
        });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to add new quote" });
    });
}

// if (!title || !date || !location) {
//   res.status(400).json({
//     message: "Sorry, all new experiences require a title, date, and location."
//   });
// }
// else {
//   Experiences.addExperience(req.body)
//     .then(experience => {
//       res.status(201).json(experience);
//     })

const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  get,
  add
};

function get() {
  return db("lesliesQuotes").select();
}

function add(quote) {
  return db("lesliesQuotes").insert(quote);
}

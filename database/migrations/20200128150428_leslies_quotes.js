exports.up = function(knex, Promise) {
  return knex.schema.createTable("lesliesQuotes", function(tbl) {
    tbl.increments();
    tbl.text("quote").notNullable();
    tbl.string("author", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist("lesliesQuotes");
};

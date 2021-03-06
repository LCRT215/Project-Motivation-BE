exports.up = function(knex, Promise) {
  return knex.schema.createTable("lesliesQuotes", function(tbl) {
    tbl.increments();
    tbl
      .text("quote", 500)
      .notNullable()
      .unique();
    tbl.string("author", 128).notNullable();
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("lesliesQuotes");
};

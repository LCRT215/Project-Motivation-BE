exports.seed = function(knex, Promise) {
  return knex("lesliesQuotes")
    .del()
    .then(function() {
      return knex("lesliesQuotes").insert([
        {
          id: 1,
          quote:
            "It was when I realized I needed to stop trying to be somebody else and be myself, I actually started to own, accept and love what I had.",
          author: "Tracee Ellis Ross"
        },
        {
          id: 2,
          quote:
            "Don't settle for average. Bring your best to the moment. Then, whether it fails or succeeds, at least you know you gave all you had. We need to live the best that's in us",
          author: "Angela Bassett"
        },
        {
          id: 3,
          quote: "If you prioritize yourself, you are going to save yourself.",
          author: "Gabrielle Union"
        }
      ]);
    });
};

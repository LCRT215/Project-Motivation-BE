

//////////////////////////////////////
require("dotenv").config(); // load .env variables

const server = require("./server.js");

// Needed to deploy to Heroku
const port = process.env.PORT || 4200;

server.listen(port, () => {
  console.log(
    `\n *** ✨ Ya server is running on localhost:${port} sis ✨ *** \n`
  );
});

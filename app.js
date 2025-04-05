const express = require("express");
const Router = require("./routes");
const app = express();
const { sequelize, Word } = require("./models");

const PORT = 3000;

async function init() {
  // we need to use express.json() to parse the body of the request
  app.use(express.json());
  app.use("/api", Router);

  // syncing the database -> this will create the tables if they don't exist
  await sequelize.sync();

//   await Word.bulkCreate([
//     { title: "apple" },
//     { title: "banana" },
//     { title: "cherry" },
//     { title: "date" },
//     { title: "fig" },
//     { title: "grape" },
//     { title: "kiwi" },
//   ]);

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

init();

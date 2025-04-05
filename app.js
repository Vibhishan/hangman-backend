const express = require("express");
const Router = require("./routes");
const app = express();
const cors = require("cors");
const { sequelize, Word } = require("./models");

const PORT = 3000;

async function init() {
  // adding cors to allow requests from the frontend
  app.use(
    cors({
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
      optionsSuccessStatus: 200,
      maxAge: 3600,
    })
  );

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
